// esbuild.config.js
const { build } = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');
const cssModulesPlugin = require('esbuild-plugin-css-modules');

build({
  entryPoints: ['./src/index.jsx'], // Your entry point
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'public/bundle.js',
  loader: {
    '.png': 'file',
    '.svg': 'file',
    '.css': 'css',
    '.woff2': 'file',  // Add a loader for .woff2 files
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
  platform: 'browser', // Ensure this is set to 'browser' for front-end
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  external: ['fs', 'os', 'path'], // Exclude Node.js specific modules
}).catch(() => process.exit(1));
