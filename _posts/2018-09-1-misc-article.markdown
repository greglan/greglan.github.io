---
layout: post
title:  "Article published in MISC"
tags: security
summary: "Overview of the work I published in the MISC magazine"
---

I published in the French security magazine [MISC](https://connect.ed-diamond.com/MISC) with a classmate. The summary of the article is available [here](https://connect.ed-diamond.com/MISC/MISC-099/Fabriquer-sa-propre-enclave-a-base-de-FPGA).


The project discussed in the article was proposed by [Quarkslab](https://www.quarkslab.com/) to my university. The aim was to study the relevance of FPGAs to improve code obfuscation techniques in terms of both quality (how difficult it is to analyze the resulting code) and performance (speed of the obfuscation process and execution of the obfuscated code). We were given a couple of C source code and we were asked to use an FPGA to do that.

What we did was implement a processor in the FPGA. The capabilities of this processor were chosen to be adapted to the code we wanted to obfuscate. Obviously, the processor had its own instruction set, which was adapted to the kind of instruction we would encounter in the code to obfuscate.

To choose the code to obfuscate, we choose function annotation. This requires user interaction though, and we could imagine a better method which would automatically identify functions that can be deported to the FPGA, depending on its capability. Once the functions are annoted, we compile the regular C files into LLVM assembly language (TODO: Clang flag). From there, we can programmatically extract the annoted functions, replacing them with a simple calling stub to the FPGA.

This calling stub has been designed to call the function on the FPGA if it has already been sent to it , and else upload it to the FPGA. Indeed, the FPGA's function code is self contained in the final binary executed on the computer.

As for the extracted functions, we perform a conversion from LLVM assembly to the custom assembly language of the coprocessor. At this stage, ideally, we would encrypt the function's assembly code, but haven't had the time to do that. Hence, the functions are simply inserted as data in another LLVM assembly file.

Finally, we compile all the files to obtain the final binary.
