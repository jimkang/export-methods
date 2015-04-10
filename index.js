function exportMethods(fns) {
  return fns.reduce(addFnToExports, {});
}

function addFnToExports(exports, fn) {
  exports[fn.name] = fn;
  return exports;
}

module.exports = exportMethods;
