export default {
  input: 'src/cdn.js',
  output: {
    file: 'bundle.cdn.js',
    format: 'iife',
    name: 'my',
  },
  external: ['jquery'],
}