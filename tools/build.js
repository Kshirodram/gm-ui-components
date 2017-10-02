const fs = require('fs');
const execSync = require('child_process').execSync;
const prettyBytes = require('pretty-bytes');
const gzipSize = require('gzip-size');

const ignore = [
  '__tests__',
  'stories',
  'config',
  '/*.js'
];

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  });

console.log('Building CommonJS modules ...');

exec(`babel src -d . --ignore ${...ignore}`, {
  BABEL_ENV: 'cjs'
});

console.log('\nBuilding ES modules ...');

exec(`babel src -d es --ignore ${...ignore}`, {
  BABEL_ENV: 'es'
});

console.log('\nBuilding gm-ui-components.js ...');

exec('rollup -c -f umd -o umd/gm-ui-components.js', {
  NODE_ENV: 'development',
  BABEL_ENV: 'umd'
});

console.log('\nBuilding gm-ui-components.min.js ...');

exec('rollup -c -f umd -o gm-ui-components.min.js', {
  NODE_ENV: 'production',
  BABEL_ENV: 'umd'
});

const size = gzipSize.sync(fs.readFileSync('gm-ui-components.min.js'));

console.log('\ngzipped, the UMD build is %s', prettyBytes(size));
