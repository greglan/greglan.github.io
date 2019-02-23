---
title:  "Reversing of the Onplus 6T trustzone"
topic: "reversing"
---

# Vector tables
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
TODO







# SMC handling from lower EL
This is handled by `smc_handler_lower_el`.

### Vocabulary
service identifier: svc_id in scm.c. Possible values in scm.h (SCM_SVC_*)
SCM_SVC_ID(fn_id) returns an SCM_SVC identifier

### Modification of interrupt registers
Executed if `X0=0x17` and `X1=256`. The register `X2` contains the operation to perform. This is handled by `modify_interrupt_regs`. This function uses structures that seem to be 0xD0 long, and it seems like there is one structure per cpu (`get_cpu_id` function). This memory location is designated by `interrupt_regs`.




# Timer
Counter-timer physical count register is saved in a structure, which is 32 bytes long. The offset 0x10 of that per-cpu structure is the CNTPCT register. This is used in some exception handling routines (el3_handler, start...).




# Structures
### core_regs_t (0x108 bytes)
```
struct core_regs_t {
    uint64_t x0;
    /* ... */
    uint64_t x30;
    uint64_t sp_el0;
    uint64_t sp_el1;
}
```

### sys_regs_t (0xF0 bytes)
```
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
```
struct fp_regs_t {
    uint128_t q0;
    /* ... */
    uint128_t q31;
    uint64_t fpcr;
    uint64_t fpsr;
}
```


# Function map

![functions-map](/assets/oneplus6t-reversing-functions-map.png)


# Resources and references
