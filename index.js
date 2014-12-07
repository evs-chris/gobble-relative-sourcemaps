module.exports = relativeSourceMaps;

function relativeSourceMaps(code, opts) {
  code = JSON.parse(code);
  code.sources = code.sources.map(function(p) { return path.join(opts.prefix || '', p.replace(/.*\.gobble\/[^\/]*\/[^\/]*\//, '')); });
  return JSON.stringify(code);
}
relativeSourceMaps.defaults = {
  accept: '.map'
};
