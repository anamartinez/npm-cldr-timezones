exports.load = function(locale){
  locale = friendlyLocale(locale);
  return require('./cldr_timezones/' + locale);
}

function friendlyLocale (locale){
  var friendlyLocale = locale.replace(/-/g, "_");
  return friendlyLocale;
}
