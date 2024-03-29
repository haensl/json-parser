const nodeResolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const commonJS = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const minify = require('@rollup/plugin-terser');
const pkg = require('./package');

const globals = {
  '@haensl/pfs': 'fs'
};

const copyright = `// ${pkg.homepage} v${pkg.version} Copyright ${(new Date()).getFullYear()} ${pkg.author.name} <${pkg.author.email}>`;

module.exports = [
  {
    input: './src/index.js',
    output: {
      esModule: false,
      exports: 'named',
      file: pkg.unpkg,
      format: 'umd',
      banner: copyright,
      name: pkg.name,
      globals: globals,
      indent: false
    },
    plugins: [
      external({
        includeDependencies: true
      }),
      babel({
        babelrc: false,
        exclude: [
          'node_modules/**',
          '**/*.test.js'
        ],
        babelHelpers: 'runtime',
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false
            }
          ]
        ],
        plugins: [
          '@babel/plugin-transform-runtime'
        ]
      }),
      commonJS({
        include: 'node_modules/**'
      }),
      nodeResolve(),
      minify()
    ]
  },
  {
    external: [/@babel\/runtime/],
    input: './src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        name: pkg.name,
        indent: false,
        banner: copyright,
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      external({
        includeDependencies: true
      }),
      babel({
        babelHelpers: 'runtime',
        babelrc: false,
        exclude: [
          'node_modules/**',
          '**/*.test.js'
        ],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                node: true
              }
            }
          ]
        ],
        plugins: [
          '@babel/plugin-transform-runtime'
        ]
      }),
      commonJS({
        include: 'node_modules/**'
      }),
      nodeResolve()
    ]
  }
];
