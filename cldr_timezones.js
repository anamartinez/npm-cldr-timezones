exports.load = function(locale){
  return require('./cldr_timezones/' + locale + '_cldr_timezones');
}