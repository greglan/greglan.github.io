---
layout: page
title:  "Glibc's heap implementation"
permalink: "glibc-heaps.html"
tags: [security, reversing]
summary: "A detailed look into the standard Linux heap implementation"
---
## glibc implementation
* Linux's default heap allocator
* Derived from [ptmalloc](http://www.malloc.de/en/) (which is also derived from
  [dlmalloc](http://g.oswego.edu/dl/html/malloc.html))
* Memory allocations must be 8-bytes aligned on 32-bits systems, and 16-bytes
  aligned on 64-bits systems [1]
* Heap manager adds metadata before the pointer returned, and padding bytes if
  needed

### Small chunks allocation
* Allocation strategy for small chunks:
    - If there is a big enough previously-freed chunk of memory, use that
    - Else, if space available at the top of the heap, allocate from there
    - Else ask the kernel to add new memory to the end of the heap and allocate
      from there
    - Else return *NULL*
* Heap manager tracks freed chunks in linked lists called *bins*.
* Type of bins: fast bins, unsorted bin, small bins, large bins, and per-thread
  tcache
* Top of the heap: top chunk/remainder chunk
* Heap allocator uses the [sbrk](https://linux.die.net/man/2/brk) function to
  ask the kernel to add memory at the end of the heap
* May not be possible: collisions memory mappings, shared libraries or the
  thread's stack
* In that case, resort to
  [attaching new non-contiguous memory](https://sourceware.org/git/gitweb.cgi?p=glibc.git;a=blob;f=malloc/malloc.c;h=6e766d11bc85b6480fa5c9f2a76559f8acf9deb5;hb=HEAD#l2320) to the
  initial program heap using
  [mmap](http://man7.org/linux/man-pages/man2/mmap.2.html) calls
* If *mmap* calls fail, return *NULL*


### Big chunks allocations
* Allocated off-heap using a direct call to *mmap*. Flagged in the chunk
  metadata. [Source](https://sourceware.org/git/gitweb.cgi?p=glibc.git;a=blob;f=malloc/malloc.c;h=6e766d11bc85b6480fa5c9f2a76559f8acf9deb5;hb=HEAD#l864)
* Freed by releasing the entire mmaped region back to the system via *munmap*
* [Default threshold](https://sourceware.org/git/gitweb.cgi?p=glibc.git;a=blob;f=malloc/malloc.c;h=6e766d11bc85b6480fa5c9f2a76559f8acf9deb5;hb=HEAD#l843): 128KB-512KB on 32-bit systems and 32MB on 64-bit systems
* Threshold can dynamically increase if the heap manager detects that large
  allocations are being used transiently. See the
  [implementation](https://sourceware.org/git/gitweb.cgi?p=glibc.git;a=blob;f=malloc/malloc.c;h=6e766d11bc85b6480fa5c9f2a76559f8acf9deb5;hb=HEAD#l948)


### Chunk metada
#### In-use chunk
* See the [implementation code](https://sourceware.org/git/gitweb.cgi?p=glibc.git;a=blob;f=malloc/malloc.c;h=6e766d11bc85b6480fa5c9f2a76559f8acf9deb5;hb=HEAD#l1033)
* If the chunk before the current one is unused, `prev_size` contains the length
  of the chunk before.

  Else, `prev_size` part of the data of the previous chunk
* Chunks are 8-byte aligned, so the three lowest bits of `size` are unused.

  Lowest bit: `PREV_INUSE`. Set if the repvious chunk is in use

![in-use-chunk](https://sourceware.org/glibc/wiki/MallocInternals?action=AttachFile&do=get&target=MallocInternals-chunk-inuse.svg)

#### Freed chunk
* `fwd/bck`: pointer to forward/backward chunks in a doubly linked list

![freed-chunk](https://sourceware.org/glibc/wiki/MallocInternals?action=AttachFile&do=get&target=MallocInternals-chunk-free.svg)




## Resources and references
* [[1] Azeria Labs tutorial part 1](https://azeria-labs.com/heap-exploitation-part-1-understanding-the-glibc-heap-implementation/)
* [Malloc internals](https://sourceware.org/glibc/wiki/MallocInternals)
* [SploitFUN: malloc syscalls](https://sploitfun.wordpress.com/2015/02/11/syscalls-used-by-malloc/)
* [SploitFUN: Understaning glibc malloc](https://sploitfun.wordpress.com/2015/02/10/understanding-glibc-malloc/)
* [Diving into Glibc heap](https://heap-exploitation.dhavalkapil.com/diving_into_glibc_heap/)
* Google Chrome heap allocator: [PartitionAlloc](https://chromium.googlesource.com/chromium/src/+/HEAD/base/allocator/partition_allocator/PartitionAlloc.md)
* FreeBSD heap allocator: [jemalloc](https://github.com/jemalloc/jemalloc/wiki/Background)
* [A Gynvael stream](https://www.youtube.com/watch?v=OwQk9Ti4mg4)
