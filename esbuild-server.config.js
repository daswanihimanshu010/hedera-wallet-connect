// esbuild-server.config.js
const { build } = require('esbuild');

build({
  entryPoints: ['./src/index.jsx'], // Server-side entry point (update as needed)
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'dist/server.js', // Output file for server-side code
  platform: 'node', // Node.js environment
  target: ['node16'], // Target a specific version of Node.js
  external: ['fs', 'os', 'path'], // Exclude Node.js built-ins from bundling
}).catch(() => process.exit(1));
