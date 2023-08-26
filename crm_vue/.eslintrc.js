module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
    // '@vue/standart'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off'
  },
  "overrides": [
    {
      "files": ["src/pages/**"],
      "excludedFiles": ["src/**/components/**"],
      "rules": {
        'vue/multi-word-component-names': ['error', {
          'ignores': ['default']
        }]
      }
    }
  ]
}
