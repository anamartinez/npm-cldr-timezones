exports.load = function(locale){
  locale = friendlyLocale(locale);
  return require('./cldr_timezones/' + locale + '_cldr_timezones');
}

function friendlyLocale (locale){
  var friendlyLocale = locale.replace(/-/g, "_");
  return friendlyLocale;
}