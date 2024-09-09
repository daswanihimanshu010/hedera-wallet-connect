// esbuild-client.config.js
const { build } = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');
const cssModulesPlugin = require('esbuild-plugin-css-modules');

build({
  entryPoints: ['./src/index.jsx'], // Client-side entry point
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'public/bundle.js', // Output file for client-side code
  loader: {
    '.png': 'file',
    '.svg': 'file',
    '.css': 'css',
    '.woff2': 'file',
    '.woff': 'file',
    '.eot': 'file',
  },
  plugins: [
    svgrPlugin(),
    cssModulesPlugin()
  ],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  target: ['esnext'], // Target modern browsers
  platform: 'browser', // Client-side environment
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
}).catch(() => process.exit(1));
