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

    var es_timezones = require('cldr_timezones').load('es')

    es_timezones["Europe/Moscow"] # "(GMT+04:00) Moscú"
    
    var es_mx_timezones = require('cldr_timezones').load('es-MX')
    
    es_mx_timezones["Europe/Moscow"] # "(GMT+04:00) Moscú"

    var ja_timezones = require('cldr_timezones').load('ja')
    
    ja_timezones["America/Cordoba"] # "（GMT-09:00）モスクワ"

The hash has the timezone indentifier as the key and the translation as the value.    

How to build
======

You can create a file you can include for a web application using the Makefile.

For example:

    make build TZ=./lib/en_US.js TZ+=./lib/es_MX.js

will create a build in `./dist/timezone.js` with just those two locales.


Author
======
[Ana Martinez](https://github.com/anamartinez)<br/>
acemacu@gmail.com<br/>
License: MIT<br/>

[![Build Status](https://travis-ci.org/anamartinez/npm-cldr-timezones.png)](https://travis-ci.org/anamartinez/npm-cldr-timezones)
