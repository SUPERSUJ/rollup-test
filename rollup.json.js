import json from 'rollup-plugin-json';

export default {
  input: 'src/json.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'my',
  },
  plugins: [
    json(),
  ],
};