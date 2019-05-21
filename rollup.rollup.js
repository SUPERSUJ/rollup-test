const rollup = require('rollup');
const inputOptions = {
  input: 'src/main.js',
};

const outputOptions = {
  file: 'bundle.js',
  format: 'cjs',
};

async function build() {
  const bundle = await rollup.rollup(inputOptions);

  const { code, map } = await bundle.generate(outputOptions);

  await bundle.write(outputOptions);
}

build();