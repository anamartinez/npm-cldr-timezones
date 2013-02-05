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

    var cldr_timezones = require('cldr_timezones').load('es_MX')

    var cldr_timezones = require('cldr_timezones').load('ja')

Please note that currectly your language tag should have "_" instead of "-".

The hash has the timezone indentifier as the key and the translation as the value.

Examples: 
    
    es_cldr_timezones_hash["Europe/Moscow"] # "(GMT+04:00) Moscú"

    ja_cldr_timezones_hash["America/Cordoba"] # "（GMT-09:00）モスクワ"

There is also support for fallback.

    es-MX_cldr_timezones_hash["Europe/Moscow"] # "(GMT+04:00) Moscú"


TODO
=====

- Support for dash instead of underscore in language tags.

Author
======
[Ana Martinez](https://github.com/anamartinez)<br/>
acemacu@gmail.com<br/>
License: MIT<br/>

[![Build Status](https://travis-ci.org/anamartinez/js-cldr-timezones.png)](https://travis-ci.org/anamartinez/npm-cldr-timezones)
