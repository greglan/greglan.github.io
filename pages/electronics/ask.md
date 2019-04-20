---
layout: page
title:  "Amplitude Shift Keying (ASK)"
permalink: "ask.html"
tags: electronics
summary: "433 MHz ASK modules and interfacing them with an Arduino"
---

## Introduction to ASK

## Antenna
* The wavelength is $$\lambda = \frac{c}{f} \simeq $$ 70 cm for 433 MHz
* In practice, we use a quarter of that length, so around 17.5 cm
* Coiling the antenna is bad, it's better to keep the antenna a straight line

## Arduino sample code
### Transmitter
```cpp
#include <RH_ASK.h>
#include <SPI.h>

RH_ASK rf_driver;

void setup()
{
    rf_driver.init();
}

void loop()
{
    const char *msg = "Hello World";
    rf_driver.send((uint8_t *)msg, strlen(msg));
    rf_driver.waitPacketSent();
    delay(1000);
}
```

### Receiver
```cpp
#include <RH_ASK.h>
#include <SPI.h>
#define BUF_LEN 16

RH_ASK rf_driver;

void setup()
{
    rf_driver.init();
    Serial.begin(9600);
}

void loop()
{
    uint8_t buf[BUF_LEN];
    uint8_t buflen = sizeof(buf);
    if (rf_driver.recv(buf, &buflen))
    {
      Serial.println((char*)buf);         
    }
}
```

## Resources and references
* [Tutorial for Arduino](https://lastminuteengineers.com/433mhz-rf-wireless-arduino-tutorial/)
* [ASK description](https://www.tutorialspoint.com/digital_communication/digital_communication_amplitude_shift_keying.htm)
* [RadioHead library documentation](http://www.airspayce.com/mikem/arduino/RadioHead/)
