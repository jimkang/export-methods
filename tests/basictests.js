var test = require('tape');
var exportMethods = require('../index');

test('exportMethods', function basicTest(t) {
  t.plan(4);

  function getDoc(opts) {
    return {
      id: 'doc-id-A'
    };
  }

  function getTree(opts) {
    return {
      children: [
        'node-A',
        'node-B'
      ]
    };
  }

  function getNode(opts) {
    return {
      id: 'node-A',
      text: 'ohay guys'
    };
  }

  var exports = exportMethods([getDoc, getTree, getNode]);

  t.equal(Object.keys(exports).length, 3, 'Export has a key per method.');
  t.equal(exports['getDoc'], getDoc, 'First method can be found by name.');
  t.equal(exports['getTree'], getTree, 'Second method can be found by name.');
  t.equal(exports['getNode'], getNode, 'Third method can be found by name.');
});
