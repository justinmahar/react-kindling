function __export(m) {
  for (const p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, '__esModule', { value: true });
__export(require('./components/ExampleComponent'));
__export(require('./hooks/useExample'));
