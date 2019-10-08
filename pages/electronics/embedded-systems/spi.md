---
layout: page
title:  "SPI protocol"
permalink: "spi.html"
summary: "Presentation of the SPI protocol"
tags: [electronics]
---

## Introduction
* SPI = Serial Peripheral Interface. Synchronous serial data protocol.
* Master/salve architecture
* MISO (Master In Slave Out) pin: data line from slave to master
* MOSI (Master Out Slave In) pin: data line from master to slave
* SCK (Serial ClocK) pin
* SS (Slave Select) pin
* Different implementation by different devices. Several modes possible according to configuration!
  * data shifted in/out on rising or falling edge of SCK
  * SCK idle when high or low
  * Data shifted MSB or LSB first
  * Clock speed
* 4 different modes according to the configuration

## Resources and references
* [Wikipedia article](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface)
* [Sparkfun article](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all)
