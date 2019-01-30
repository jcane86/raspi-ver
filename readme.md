# RasPi-Ver [![npm version](https://badge.fury.io/js/raspi-ver.svg)](https://badge.fury.io/js/raspi-ver)[![semantic-release](https://github.com/semantic-release/semantic-release)](https://github.com/semantic-release/semantic-release)[![Build Status](https://secure.travis-ci.org/jcane86/raspi-ver.png)](http://travis-ci.org/jcane86/raspi-ver)

> A quick programatic check for your Raspberry Pi board revision, memory and other bits.


## Installation

`npm install --save-dev raspi-ver`

## Usage

 Require in your own modules, and directly access the exposed properties.
 
    let rpi = require('raspi-ver');
 
    if (rpi.model === "Model B") {
 
        console.log("PROFIT");
 
    }
 
## API

The exposed properties of the module.

 * rpi.revision: Your board's hardware revision code.
 * rpi.relDate: The model's release date. A sting of the format ("Q1 2016").
 * rpi.model: Your board's model name. A string like "Model B".
 * rpi.PCBRev: Your board's hardware revision. A string like "1.0".
 * rpi.memory: Your board's shipped memory. A string like "256 MB".
 * rpi.notes: Your board's manufacturer or any other random trivia.


## Acknowledgement

All the info returned by the module was taken from [elinux.org](http://elinux.org/RPi_HardwareHistory#Board_Revision_History) and [raspberrypi.org](https://www.raspberrypi.org/documentation/hardware/raspberrypi/revision-codes/README.md). Thank you!

## LICENSE

(MIT License)

Copyright (c) 2017 jcane86 <jcane86@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
