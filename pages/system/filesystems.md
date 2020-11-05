---
layout: page
title: A look into filesystems
summary: "Study of how information is represented on disks. Mostly describes partition tables and filesystems"
tags: [system]
permalink: "filesystems.html"
---

## Partition tables
### MBR
* Holds information on how the logical partitions containing file systems are organized
* Contains executable code to function as a loader for the installed operating system—usually by passing control over to the loader's second stage, or in conjunction with each partition's volume boot record (VBR)
* Only 4 partitions, with the option of having more sub-partitions on the 4th partition.
* Maximum addressable storage space of a partitioned disk: 2 TiB (232 × 512 bytes)
* Size: 512 or more bytes located in the first sector of the drive. Most likely 512 bytes (0x200).

#### An empty partition table
* Create a dumy disk with a MBR partition table
```
dd if=/dev/zero of=mbr_example.bin bs=1M count=4
parted mbr_example.bin mklabel msdos
```
* Now get an overview of the data:
```
hexdump -C mbr_example.bin
00000000  fa b8 00 10 8e d0 bc 00  b0 b8 00 00 8e d8 8e c0  |................|
00000010  fb be 00 7c bf 00 06 b9  00 02 f3 a4 ea 21 06 00  |...|.........!..|
00000020  00 be be 07 38 04 75 0b  83 c6 10 81 fe fe 07 75  |....8.u........u|
00000030  f3 eb 16 b4 02 b0 01 bb  00 7c b2 80 8a 74 01 8b  |.........|...t..|
00000040  4c 02 cd 13 ea 00 7c 00  00 eb fe 00 00 00 00 00  |L.....|.........|
00000050  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
000001b0  00 00 00 00 00 00 00 00  b1 57 e2 2d 00 00 00 00  |.........W.-....|
000001c0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
000001f0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 55 aa  |..............U.|
00000200  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
00400000
```
* Following the *Structure of a modern standard MBR* on the [Wikipedia article](https://en.wikipedia.org/wiki/Master_boot_record#Sector_layout), we can read off this initial information
* We can see that the bootstrap code (which has an allocated maxsize of 0xDA i.e 218 bytes) is 0x4B i.e 75 bytes in our case.
  
  We can get a raw hexdump with `xxd`: `xxd -p -l 75 mbr_example.bin`

  Feeding that to Radare2's [rasm2](https://r2wiki.readthedocs.io/en/latest/tools/rasm2/) using `rasm2 -a x86 -b 16 -d $(xxd -p -l 75 mbr_example.bin)` gives the following disassembly:
  ```
  0x00000000   1                       fa  cli
  0x00000001   3                   b80010  mov ax, 0x1000
  0x00000004   2                     8ed0  mov ss, ax
  0x00000006   3                   bc00b0  mov sp, 0xb000
  0x00000009   3                   b80000  mov ax, 0
  0x0000000c   2                     8ed8  mov ds, ax
  0x0000000e   2                     8ec0  mov es, ax
  0x00000010   1                       fb  sti
  0x00000011   3                   be007c  mov si, 0x7c00
  0x00000014   3                   bf0006  mov di, 0x600
  0x00000017   3                   b90002  mov cx, 0x200
  0x0000001a   2                     f3a4  rep movsb byte es:[di], byte ptr [si]
  0x0000001c   1                       ea  invalid
  0x0000001d   1                       21  invalid
  ```

  For some unknown reason, `rasm2` doesn't show the whole output, probqbly because this a 16-bits real mode code. However, by opening it directly into Radare2, and after running `pD 75`, we can get the proper disassembly:
  ```
            0000:0000      fa             cli
            0000:0001      b80010         mov ax, 0x1000
            0000:0004      8ed0           mov ss, ax
            0000:0006      bc00b0         mov sp, 0xb000
            0000:0009      b80000         mov ax, 0
            0000:000c      8ed8           mov ds, ax
            0000:000e      8ec0           mov es, ax
            0000:0010      fb             sti
            0000:0011      be007c         mov si, 0x7c00
            0000:0014      bf0006         mov di, 0x600
            0000:0017      b90002         mov cx, 0x200
            0000:001a      f3a4           rep movsb byte es:[di], byte ptr [si]
        ┌─< 0000:001c      ea21060000     ljmp 0:0x621
        │   0000:0021      bebe07         mov si, 0x7be
       ┌──> 0000:0024      3804           cmp byte [si], al
      ┌───< 0000:0026      750b           jne 0x33
      │╎│   0000:0028      83c610         add si, 0x10
      │╎│   0000:002b      81fefe07       cmp si, 0x7fe
      │└──< 0000:002f      75f3           jne 0x24
      │┌──< 0000:0031      eb16           jmp 0x49
      └───> 0000:0033      b402           mov ah, 2
       ││   0000:0035      b001           mov al, 1
       ││   0000:0037      bb007c         mov bx, 0x7c00
       ││   0000:003a      b280           mov dl, 0x80
       ││   0000:003c      8a7401         mov dh, byte [si + 1]
       ││   0000:003f      8b4c02         mov cx, word [si + 2]
       ││   0000:0042      cd13           int 0x13
      ┌───< 0000:0044      ea007c0000     ljmp 0:0x7c00
      ─└──> 0000:0049      ebfe           jmp 0x49
  ```
* In the first `hexdump` output, we can observe 4 bytes of data at offset `0x1B8`. The wikipedia article tells us this is the *32-bit disk signature*. The second note of [the MBR page on wiki.osdev.org](https://wiki.osdev.org/MBR_(x86)#MBR_Format) explains this value. Indeed, running `parted mbr_example.bin mklabel msdos` again changes this value.
* Finally, we can observe the *Boot signature* at offsets `0x01FE` and `0x01FF`.
* Note that partitionning with `fdisk` does not yield any bootstrap code.

#### Adding and studying partition table entries

### GPT
* Uses LBA addressing, which usually are blocks of 0x200 = 512 bytes
* The header has a minimum size of , and is also found at the end of the disk
* Partition entries have a size of 0x80 = 18 bytes

![GPT table diagram](https://upload.wikimedia.org/wikipedia/commons/0/07/GUID_Partition_Table_Scheme.svg)

#### An empty partition table
* Create a dumy disk with a GPT partition table
```
dd if=/dev/zero of=gpt_example.bin bs=1M count=4
parted gpt_example.bin mklabel gpt
```
* Overview of the file:
```
00000000  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
000001c0  02 00 ee ff ff ff 01 00  00 00 ff 1f 00 00 00 00  |................|
000001d0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
000001f0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 55 aa  |..............U.|
00000200  45 46 49 20 50 41 52 54  00 00 01 00 5c 00 00 00  |EFI PART....\...|
00000210  93 fd 43 a0 00 00 00 00  01 00 00 00 00 00 00 00  |..C.............|
00000220  ff 1f 00 00 00 00 00 00  22 00 00 00 00 00 00 00  |........".......|
00000230  de 1f 00 00 00 00 00 00  5d fb e6 50 b3 46 42 49  |........]..P.FBI|
00000240  b8 ed f5 d3 e0 d5 40 be  02 00 00 00 00 00 00 00  |......@.........|
00000250  80 00 00 00 80 00 00 00  86 d2 54 ab 00 00 00 00  |..........T.....|
00000260  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
003ffe00  45 46 49 20 50 41 52 54  00 00 01 00 5c 00 00 00  |EFI PART....\...|
003ffe10  c3 c9 2f df 00 00 00 00  ff 1f 00 00 00 00 00 00  |../.............|
003ffe20  01 00 00 00 00 00 00 00  22 00 00 00 00 00 00 00  |........".......|
003ffe30  de 1f 00 00 00 00 00 00  5d fb e6 50 b3 46 42 49  |........]..P.FBI|
003ffe40  b8 ed f5 d3 e0 d5 40 be  df 1f 00 00 00 00 00 00  |......@.........|
003ffe50  80 00 00 00 80 00 00 00  86 d2 54 ab 00 00 00 00  |..........T.....|
003ffe60  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
```
* First, we notice that the file starts with a MBR header as indicated in the [Wikipedia article](https://en.wikipedia.org/wiki/GUID_Partition_Table#MBR_variants). Indeed, following the specification of the MBR header, we can verify that the partition type (offset 0x4 of the partition entry) of the first entry (offset 0x1BE in the MBR header) which corresponds to offset 0x1BE + 0x4 = 0x1C2 in the previous dump.
* Following the *Partition table header* on the [wikipedia article](https://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_table_header_(LBA_1)), allos to read the following information:
  - Current LBA (offset 0x18): 1 -> 0x200 offset
  - Backup LBA (offset 0x20): 0x1fff = 8191 -> 0x3ffe00 offset
  - First usable LBA (offset 0x28): 0x22 = 34 -> 0x440 = 1088 offset
  - Last usable LBA (offset 0x30): 0x1fde = 8158 -> 0x3fbc00 offset
  
  We can check two things with these values:
  - the backup header is indeed located where expected (0x3fbc00)
  - the last usable LBA is the LBA just before the backup header
  Note that across several creation of the GPT table, we see different *Disk GUID* (offset 0x38)

#### Adding and studying partition table entries
* Using `parted` and switching units to sectors (using `unit s`), we create an EXT2 partition named "P1" starting at LBA 34 (first usable LBA according to previous section) and ending at LBA 36. Note that we get a warning about the fact that the partition is not aligned. Nevertheless, the resulting file shows the addition of the entry in the primary and backup header.
```
00000000  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
000001c0  02 00 ee ff ff ff 01 00  00 00 ff 1f 00 00 00 00  |................|
000001d0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
000001f0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 55 aa  |..............U.|
00000200  45 46 49 20 50 41 52 54  00 00 01 00 5c 00 00 00  |EFI PART....\...|
00000210  0a 24 d1 b8 00 00 00 00  01 00 00 00 00 00 00 00  |.$..............|
00000220  ff 1f 00 00 00 00 00 00  22 00 00 00 00 00 00 00  |........".......|
00000230  de 1f 00 00 00 00 00 00  11 ff 2e 11 8a 14 d3 4b  |...............K|
00000240  84 56 d4 e8 a8 0e 95 df  02 00 00 00 00 00 00 00  |.V..............|
00000250  80 00 00 00 80 00 00 00  86 d9 a2 64 00 00 00 00  |...........d....|
00000260  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
00000400  af 3d c6 0f 83 84 72 47  8e 79 3d 69 d8 47 7d e4  |.=....rG.y=i.G}.|
00000410  6c e9 37 12 ac ca 02 47  98 da ec f5 62 3c d8 7d  |l.7....G....b<.}|
00000420  22 00 00 00 00 00 00 00  24 00 00 00 00 00 00 00  |".......$.......|
00000430  00 00 00 00 00 00 00 00  50 00 31 00 00 00 00 00  |........P.1.....|
00000440  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
003fbe00  af 3d c6 0f 83 84 72 47  8e 79 3d 69 d8 47 7d e4  |.=....rG.y=i.G}.|
003fbe10  6c e9 37 12 ac ca 02 47  98 da ec f5 62 3c d8 7d  |l.7....G....b<.}|
003fbe20  22 00 00 00 00 00 00 00  24 00 00 00 00 00 00 00  |".......$.......|
003fbe30  00 00 00 00 00 00 00 00  50 00 31 00 00 00 00 00  |........P.1.....|
003fbe40  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
003ffe00  45 46 49 20 50 41 52 54  00 00 01 00 5c 00 00 00  |EFI PART....\...|
003ffe10  5a 10 bd c7 00 00 00 00  ff 1f 00 00 00 00 00 00  |Z...............|
003ffe20  01 00 00 00 00 00 00 00  22 00 00 00 00 00 00 00  |........".......|
003ffe30  de 1f 00 00 00 00 00 00  11 ff 2e 11 8a 14 d3 4b  |...............K|
003ffe40  84 56 d4 e8 a8 0e 95 df  df 1f 00 00 00 00 00 00  |.V..............|
003ffe50  80 00 00 00 80 00 00 00  86 d9 a2 64 00 00 00 00  |...........d....|
003ffe60  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
```
* Once again we can read the information following the [Wikipedia article](https://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_entries_(LBA_2%E2%80%9333)):
  - The *Partition type GUID*: 0FC63DAF-8483-4772-8E79-3D69D8477DE4 which according to [this table](https://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_type_GUIDs) matches an EXT2 filesystem.
  - The *Unique Partition UUID*: 1237E96C-CAAC-4702-98DA-ECF5623CD87D
  - First LBA: 0x22 = 34
  - Last LBA: 0x24 = 36
  - Partition name: 0x50003100 ~ "P1"

  This information can easily be recovered using `fdisk -l gpt_example.bin` or `fdisk -x gpt_example.bin` for more details.
  
  Note that the last LBA is included (and usually odd), hence the partition is 3 sectors long corresponding to a size of 512*3 = 1536 bytes. Additionaly, it is worth noting that the partition name has null bytes separating the characters since it doesn't use ASCII encoding but UTF-16 in Little Endian.

  

## Useful commands
* Find filesystem information: `fdisk -l, blkid, fsck`
* Create new MBR partition table: `parted device mklabel msdos` or `parted device mktable msdos`

## Resources and references
* [MBR article on Wikipedia](https://en.wikipedia.org/wiki/Master_boot_record)
* [MBR article on wiki.osdev.org](https://wiki.osdev.org/MBR_(x86))
* [GPT article on Wikipedia](https://en.wikipedia.org/wiki/GUID_Partition_Table)
* [GPT article on wiki.osdev.org](https://wiki.osdev.org/GPT)