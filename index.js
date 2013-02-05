exports.load = function(locale){
  locale = friendlyLocale(locale);
  return require('./lib/' + locale);
}

function friendlyLocale (locale){
  return locale.replace(/-/g, "_");
}
