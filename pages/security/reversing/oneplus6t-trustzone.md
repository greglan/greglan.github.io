---
layout: page
title:  "Reversing of the Oneplus 6T trustzone"
permalink: "oneplus6t-trustzone.html"
tags: [security, reversing, arm]
summary: "A introduction to the Trustzone implementation on the Oneplus 6T"
---

## Vector tables
### EL3 vector table 1
Almost all exceptions from this table have the same handler, `el3_handler`. The identification of the exception is performed by storing a code in the `TPIDRRO_EL0` register. The codes are given in the table below.

| Exception | Code |
|:-:|:-:|
| Synchronous EL3 with SP_EL0 | 0xC |
| IRQ/vIRQ EL3 with SP_EL0 | 0xD |
| FIQ/vFIQ EL3 with SP_EL0 | 0xE |
| SError/vSError EL3 with SP_EL0 | 0xF |
| Synchronous EL3 with SP_EL3 | 0x10 |
| IRQ/vIRQ EL3 with SP_EL3 | 0x11 |
| FIQ/vFIQ EL3 with SP_EL3 | 0x12 |
| SError/vSError EL3 with SP_EL3 | 0x13 |
| Synchronous inferior AArch32 and AArch64 EL | 0x14 |
| IRQ/vIRQ inferior AArch64 EL | 0x15 |
| SError/vSError inferior AArch64 EL | 0x17 |
| IRQ/vIRQ inferior AArch32 EL | 0x19 |
| SError/vSError inferior AArch32 EL | 0x1B |

The synchronous and FIQ exceptions from a lower AArch64 level have the same handler, `synchronous_fiq_inferior_aarch64_el_handler`. Basically, this handler will save registers on the stack, setup `VBAR_EL3` to point to the second EL3 vector table, and configure `SPSR_EL3` to return to an AArch32 mode. Then, `ELR_EL3` is loaded with the address of a code that is basically an `SMC #0` (using the AArch32 instruction set). This is caught by the second EL3 vector table that was just setup.

### EL3 vector table 2
The second EL3 vector table has all its entries trapped, except for a synchronous exception from inferior EL which was using AArch32. This function only restore registers that were saved on the stack and return. The return will actually redirect execution to the instruction just after the call to
`synchronous_fiq_inferior_aarch64_el_handler`.


### EL1 vector table
Just like the EL3 vector table, each vector sets up a code in X0 to identify the exception. The general handling is done by `el1_handler`.

| Exception | Code |
|:-:|:-:|
| Synchronous EL1 with SP_EL0 | 0x1C |
| IRQ/vIRQ EL1 with SP_EL0 | 0x1D |
| FIQ/vFIQ EL1 with SP_EL0 | 0x1E |
| SError/vSError EL1 with SP_EL0 | 0x1F |
| Synchronous EL1 with SP_EL1 | 0x20 |
| SError/vSError EL1 with SP_EL1 | 0x23 |
| SError/vSError AArch64 EL0  | 0x27 |
| SError/vSError AArch32 EL0  | 0x2B |

Every handler starts by checking the value of the `exception_el1_flag`. If it set, the execution goes on to `el1_handler`. Else, the current value of `TTBR0_EL1` is checked against a saved copy. If this value matches, execution goes on to `el1_handler`. Else, the saved `TTBR0_EL1` is restored and the cache is invalidated (TODO: research this).


Many handlers for an EL1 exception follow the pattern described above. Additionally,  the `el1_exception_different_ttbr0_flag` is set if the `TTBR0_EL1` register was not the same as the copy.


* IRQ/FIQ SP_EL1: save X16/X17
* Synchronous/IRQ/FIQ/Serror aarch64 and aarch32 EL0: SMC 0x3C






## SMC handling from lower EL
This is handled by `smc_handler_lower_el`.

### Vocabulary
service identifier: svc_id in scm.c. Possible values in scm.h (SCM_SVC_*)
SCM_SVC_ID(fn_id) returns an SCM_SVC identifier

### Modification of interrupt registers
Executed if `X0=0x17` and `X1=256`. The register `X2` contains the operation to perform. This is handled by `modify_interrupt_regs`. This function uses structures that seem to be 0xD0 long, and it seems like there is one structure per cpu (`get_cpu_id` function). This memory location is designated by `interrupt_regs`.




## Timer
Counter-timer physical count register is saved in a structure, which is 32 bytes long. The offset 0x10 of that per-cpu structure is the CNTPCT register. This is used in some exception handling routines (el3_handler, start...).




## Structures
### core_regs_t (0x108 bytes)
```C
struct core_regs_t {
    uint64_t x0;
    /* ... */
    uint64_t x30;
    uint64_t sp_el0;
    uint64_t sp_el1;
}
```

### sys_regs_t (0xF0 bytes)
```C
struct sys_regs_t {
    uint64_t spsr_el1;
    uint64_t elr_el1;
    uint64_t dacr32_el2;
    uint64_t cntkctl_el1;
    uint64_t vbar_el1;
    uint64_t ttbr1_el1;
    uint64_t ttbr0_el1;
    uint64_t tcr_el1;
    uint64_t tpidr_el0;
    uint64_t tpidrr_el0;
    uint64_t tpidr_el1;
    uint64_t sctlr_el1;
    uint64_t par_el1;
    uint64_t mair_el1;
    uint64_t esr_el1;
    uint64_t far_el1;
    uint64_t csselr_el1;
    uint64_t contextidr_el1;
    uint64_t amair_el1;
    uint64_t afsr1_el1;
    uint64_t afsr0_el1;
    uint64_t actlr_el1;
    uint64_t cpacr_el1;
    uint64_t elr_el3;
    uint64_t scr_el3;
    uint64_t spsr_el3;
    uint64_t cptr_el3;
    uint64_t spsr_el2;
    uint64_t pmcr_el0;
    uint64_t pmcr_el0_bis;
}
```

### fp_regs_t (0x210 bytes)
```C
struct fp_regs_t {
    uint128_t q0;
    /* ... */
    uint128_t q31;
    uint64_t fpcr;
    uint64_t fpsr;
}
```

### el3_struct_1
```C
struct el3_struct_1 {
    uint32_t field_0;
    uint32_t esr_el3;
    uint64_t far_el3;
}
```


## Function map

![functions-map](/images/oneplus6t-reversing-functions-map.svg)


## Resources and references
* Source files of qseecom driver
* [Kernel sources](https://github.com/OnePlusOSS/android_kernel_oneplus_sdm845/tree/oneplus/SDM845_P_9.0)
* [Exploring Qualcomm's TrustZone implementation](https://bits-please.blogspot.com/2015/08/exploring-qualcomms-trustzone.html)
* [Checkpoint research](https://research.checkpoint.com/2019/the-road-to-qualcomm-trustzone-apps-fuzzing/)