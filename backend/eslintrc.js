// .eslintrc.js
module.exports = {
    // parser: 구문 분석을 위해 사용한다. 기본적으로 babel-eslint가 있다.
    parser: '@typescript-eslint/parser',
    plugins: [
        'react', // eslint-plugin-react
        '@typescript-eslint', // @typescript-eslint/eslint-plugin
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier', // 이 줄을 추가합니다
    ],
    rules: {
        'prefer-const': ['error', { destructuring: 'all' }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 'off',
    },
}
