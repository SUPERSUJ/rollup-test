import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/th3.js',
  output: {
    file: 'bundle.3th.js',
    format: 'iife',
    name: 'my',
  },
  exteral: ['jquery'],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs()
  ]
}