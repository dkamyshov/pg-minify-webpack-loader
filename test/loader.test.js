var loader = require('../index');

var snapshot = "Object.defineProperty(exports, '__esModule', {value: true});\n";
snapshot += "exports[\"default\"] = \"SELECT*FROM table1;\";";

describe('loader', () => {
  it('processes input correctly', () => {
    expect(loader('SELECT * FROM table1;')).toBe(snapshot);
  })
});
