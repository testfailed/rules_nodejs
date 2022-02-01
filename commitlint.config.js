module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 120],
    'scope-enum': [
      2,
      'always',
      [
        'builtin',
        'concatjs',
        'create',
        'cypress',
        'deps',
        'docs',
        'esbuild',
        'examples',
        'jasmine',
        'protractor',
        'rollup',
        'runfiles',
        'terser',
        'typescript',
        'worker',
      ],
    ],
  },
};
