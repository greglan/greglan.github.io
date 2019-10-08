---
layout: page
title:  "Bluetooth"
permalink: "bluetooth.html"
summary: ""
---

## HC-05 modules
* Work on 3.3 V logic: voltage divider needed for RX pin of the module

## AT commands
* AT mode activated by setting a specific pin HIGH at power up.
* Serial config: 38400 baud, NL+CR
* Test UART connection: `AT`
* Device's name: `AT+NAME`
* Device's address: `AT+ADDR`
* Device's role: `AT+ROLE`. Possible roles: slave and master
* Device's pin: `AT+PSWD`. Must agree between two devices for pairing


## Arduino code for AT mode
```cpp
#include <SoftwareSerial.h>
#define EN_PIN 9

SoftwareSerial BTSerial(10, 11); // RX, TX

void setup()
{
  // Pull the HC-05 pin 34 (key pin) HIGH to switch module to AT mode
  pinMode(EN_PIN, OUTPUT);
  digitalWrite(EN_PIN, HIGH);

  // Serial setups
  Serial.begin(38400); // PC link: NL & CR
  BTSerial.begin(38400); // HC-05 default speed in AT command mode

  Serial.println("AT mode ready\n");
  Serial.println("-------------\n\n");
}

void loop()
{
  if (BTSerial.available())
    Serial.write(BTSerial.read());

  if (Serial.available())
    BTSerial.write(Serial.read());
}
```

## Resources and references
