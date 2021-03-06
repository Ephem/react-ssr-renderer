// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/react/index.js',
    output: {
        file: 'react.js',
        format: 'umd',
        name: 'SSRRenderer',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
        }
    },
    external: ['react', 'react-dom'],
    plugins: [
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        babel({
            babelrc: false,
            exclude: 'node_modules/**', // only transpile our source code
            presets: [
                [
                    'babel-preset-env',
                    {
                        modules: false
                    }
                ],
                'react'
            ],
            plugins: [
                'transform-class-properties',
                'external-helpers',
                'transform-flow-strip-types'
            ]
        }),
        uglify()
    ]
};
