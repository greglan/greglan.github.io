---
layout: page
title: Security resources and todos
permalink: "index-security.html"
summary: "Various links to good security articles or interesting things to look at"
---


## Exploitation
* [Xen exploitation](https://blog.quarkslab.com/xen-exploitation-part-1-xsa-105-from-nobody-to-root.html)
* [A Virtualbox CVE writeup](https://github.com/MorteNoir1/virtualbox_e1000_0day/blob/master/README.md)
* [AMD SEV exploitation](https://thehackernews.com/2018/05/amd-sev-encryption.html?m=1)
* [Some CVEs PoC](https://github.com/mirchr/security-research)
* [Collection of CVEs exploits](https://github.com/niklasb/sploits)
* [Password-Protected Reverse Shell ARM Linux shellcode](https://medium.com/syscall59/shellcode-for-iot-a-password-protected-reverse-shell-linux-arm-a18fcda4853b)
* [Introduction to AFL](https://m.habr.com/en/company/dsec/blog/449134/)
* [LLVM sanitizer tutorial](https://github.com/trailofbits/llvm-sanitizer-tutorial)
* [EFI exploitation](https://m.habr.com/ru/post/446238/)
* [Bugbounty targets](https://nedwill.github.io/blog/jekyll/update/2019/04/08/picking-a-target.html)
* [Reverse shell tool using OpenSSL](https://github.com/TheSecondSun/Revssl)
* [OpenSSL reverse shell tutorial](https://medium.com/@int0x33/day-43-reverse-shell-with-openssl-1ee2574aa998)
* [Examples of bug bounty scenarios](https://medium.com/a-bugz-life/the-bugs-are-out-there-hiding-in-plain-sight-12d056613ea3)
* [Tips about bug bounties](https://gynvael.coldwind.pl/?id=659)
* [Writeup of a Dell local escalation vulnerability](https://d4stiny.github.io/Local-Privilege-Escalation-on-most-Dell-computers/)
* [Java Serialization exploitation](https://www.rapid7.com/research/report/exploiting-jsos/)
* [Injection tool for Linux](https://github.com/DavidBuchanan314/dlinject)
* [A blog with many cool articles spanning kernel, ELFs, symbolic execution and more](https://blog.k3170makan.com/)

### Binary exploitation
* [A massive course using CTFs as examples](https://guyinatuxedo.github.io/)
* [Binary exploitation tutorial on GitHub](https://github.com/Bretley/how2exploit_binary)
* [A great blog about exploitation](https://ctf-wiki.github.io/ctf-wiki/)
* [Collection of vulnerable binaries](https://github.com/atxsinn3r/VulnCases)
* [Sploitfun exploitation tutorial](https://sploitfun.wordpress.com/2015/06/26/linux-x86-exploit-development-tutorial-series/)
* [Binary exploitation course](https://github.com/RPISEC/MBE)
* [Azeria Labs ARM exploitation series](https://azeria-labs.com/writing-arm-shellcode/)
* [Insecure programming by example](https://web.archive.org/web/20120401214722/http://community.coresecurity.com/~gera/InsecureProgramming/)
* [Frame pointer overwrite](http://phrack.org/issues/55/8.html)


### Hardware
* [Zombieload attack](https://zombieloadattack.com/)
* [MDS hadware vulnerability in Intel CPUs](https://mdsattacks.com/)
* [AMD and EPYC CVEs](https://thehackernews.com/2018/03/amd-processor-vulnerabilities.html)

### Windows specific
* [Advanced Windows exploitation resources](https://github.com/FULLSHADE/WindowsExploitationResources)
* [Hyper-V fuzzing](https://labs.mwrinfosecurity.com/blog/ventures-into-hyper-v-part-1-fuzzing-hypercalls)



## Reversing
* [Reversing series with Radare2](https://artik.blue/reversing)
* [Distinguishing between encrypted and compressed data](http://www.devttys0.com/2013/06/differentiate-encryption-from-compression-using-math/)
* [Practical binary analysis book](https://practicalbinaryanalysis.com/file/pba-toc.pdf)
* [EFI reversing serie](https://erfur.github.io/down_the_rabbit_hole_pt1/)
* [Cracking IDA's installer](https://devco.re/blog/2019/06/21/operation-crack-hacking-IDA-Pro-installer-PRNG-from-an-unusual-way-en/)
* [Ghidra plugin for crypto](https://github.com/d3v1l401/FindCrypt-Ghidra/blob/master/README.md)
* [Unicorn Engine tutorial](http://eternal.red/2018/unicorn-engine-tutorial/)
* [A blog about reversing](https://rohailaone.home.blog/)
* [Tips about reversing](https://gynvael.coldwind.pl/?id=664)
* [Compiler Explorer](https://godbolt.org/)
* [Many file formats illustrated](https://github.com/corkami/pics/tree/master/binary)
* [UEFI reversing](https://www.synacktiv.com/posts/reverse-engineering/a-journey-in-reversing-uefi-lenovo-passwords-management.html)
* [Diary of a reverse engineer](https://doar-e.github.io/index.html)
* [Ken Shirriff's blog on hardware reversing](http://www.righto.com/?m=0)

### Malware
* [Malware development series](https://0xpat.github.io/Malware_development_part_1/)
* [Analysis of Gootkit](https://connect.ed-diamond.com/MISC/MISC-100/Analyse-du-malware-bancaire-Gootkit-et-de-ses-mecanismes-de-protection)
* [Example of Malware for air-gapped systems](https://medium.com/@nedheesh.hasija/making-a-malware-approaching-isolated-systems-40743e187841)

#### Tools
* [PE-sieve](https://github.com/hasherezade/pe-sieve) [and Hollows Hunter tools](https://github.com/hasherezade/hollows_hunter)
* [mXtract tool](https://github.com/rek7/mXtract)
* [Smokeloader](https://research.checkpoint.com/2019-resurgence-of-smokeloader/)
* [Process Hacker tool](https://processhacker.sourceforge.io/)
* [Process Explorer tool](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)
* [process Monitor tool](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon)

## Web
* [Web security](https://portswigger.net/web-security)
* [XML External Entity injections](https://portswigger.net/web-security/xxe)
* [A review of SSL vulnerabilities](https://github.com/bojanisc/Presentations?files=1)

## General
* [Hackndo](https://beta.hackndo.com/archives/)
* [Bios wiki](https://teambi0s.gitlab.io/bi0s-wiki/)
* [Virgil](https://booj.gitbook.io/virgil/)
* [A blog with short security articles](https://gerardnico.com/security/security)
* [PwnWiki](http://pwnwiki.io/#!index.md)
* [/dev/null](https://d3vnull.com/category/tutorials/)
* [DWARF debugger](https://igio90.github.io/Dwarf/docs/features.html)
* [Cemu plugin for IDA](https://github.com/alexhude/uEmu/blob/master/README.md)
* [FlareEmu plugin for IDA](https://github.com/fireeye/flare-emu/blob/master/README.md#flare-emu)
* [MOSQUITO attack](https://thehackernews.com/2018/03/air-gap-computer-hacking.html)
* [Earlybird injection technique](https://thehackernews.com/2018/04/early-bird-code-injection.html?m=1)
* [Sonic attack for HDD DOS](https://thehackernews.com/2018/05/hard-drive-failure-hack.html?m=1)
* [Google's sandboxed API](https://security.googleblog.com/2019/03/open-sourcing-sandboxed-api.html?m=1)
* [Security courses on davyrogers.uk](https://davyrogers.uk/courses.html)
* [Maltego tutorial](https://www.ethicalhacker.net/columns/gates/maltego-part-i-intro-and-personal-recon/)
* [Hexcellents wiki](http://security.cs.pub.ro/hexcellents/wiki/home)
* [FuzzySecurity tutorials](https://www.fuzzysecurity.com/tutorials.html)
* [OSIRIS Lab](https://github.com/osirislab/Hack-Night)
* [OSINT](https://www.hackers-arise.com/osint)
* [STICC 2019 presentations](https://www.sstic.org/2019/programme/)
* [Archwiki on Security](https://wiki.archlinux.org/index.php/Security)
* [Social engineering](https://www.social-engineer.org/framework/general-discussion/)
* [Open security training](http://opensecuritytraining.info/)
* [Guide to reversing](http://www.hexacorn.com/blog/2019/04/11/reversing-w-o-reversing-how-to-become-alex-in-practice/)
* [Commando VM](https://github.com/fireeye/commando-vm)
* [Microsoft Message Analyzer tool](https://www.microsoft.com/en-us/download/details.aspx?id=44226)
* [Some tips](https://outoftheheap.com/tricks.php)
* [TOCTOU attacks](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use)
* [Collection of short security articles](https://medium.com/@int0x33)
* [GTFO](https://www.alchemistowl.org/pocorgtfo/)
* [Trail of bits on CTF](https://trailofbits.github.io/ctf/)
* [A list of interesting Shodan queries](https://github.com/jakejarvis/awesome-shodan-queries/blob/master/readme.md)
* [Search for videos](https://ippsec.rocks/)
* [Quarkslab internships](https://blog.quarkslab.com/quarkslab-internship-offers-for-2019-2020.html), which give a lot of funny things to look at
* [Penetration testing overview](https://github.com/sundowndev/hacker-roadmap)