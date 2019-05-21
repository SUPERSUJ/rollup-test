export default [
  {
    input: 'src/main.js',
    output: {
      file: 'bundle.many1.js',
      format: 'cjs',
    },
  },
  {
    input: 'src/main.js',
    output: {
      file: 'bundle.many2.js',
      format: 'iife',
      name: 'many2'
    },
  },
];