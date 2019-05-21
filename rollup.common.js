import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/testCommon.js',
  output: {
    file: 'bundle.common.js',
    format: 'iife',
    name: 'my',
    exports: 'named', // output.exports must be 'default', 'named', 'none', 'auto', or left unspecified (defaults to 'auto')
  },
  plugins: [
    commonjs(),
  ],
};