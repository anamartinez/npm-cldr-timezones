Translated timezones according to CLDR

Install
=======

    npm install cldr_timezones

Usage
=====

This project supports over 573 languages.
We provide a file with a hash that has the translations. 
You should load it doing
    
    var cldr_timezones = require('cldr_timezones').load('locale')

```locale``` is a bcp-47 language tag. For example:

    var cldr_timezones = require('cldr_timezones').load('es')

    var cldr_timezones = require('cldr_timezones').load('es-MX')

    var cldr_timezones = require('cldr_timezones').load('ja')

The hash has the timezone indentifier as the key and the translation as the value.

Examples: 
    
    cldr_timezones["Europe/Moscow"] # "(GMT+04:00) Moscú"

    cldr_timezones["America/Cordoba"] # "（GMT-09:00）モスクワ"

There is also support for fallback.

    cldr_timezones["Europe/Moscow"] # "(GMT+04:00) Moscú"

Author
======
[Ana Martinez](https://github.com/anamartinez)<br/>
acemacu@gmail.com<br/>
License: MIT<br/>

[![Build Status](https://travis-ci.org/anamartinez/js-cldr-timezones.png)](https://travis-ci.org/anamartinez/npm-cldr-timezones)
