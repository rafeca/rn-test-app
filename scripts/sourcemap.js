'use strict';

if (process.argv.length !== 5) {
  console.error('Usage: yarn run sourcemap <sourcemap-path> <line> <column>');
  process.exit(1);
}


const sourceMap = require('source-map');
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(process.cwd(), process.argv[2]);

fs.readFile(filePath, 'utf8', function (err, data) {
  const smc = new sourceMap.SourceMapConsumer(data);

  console.log(smc.originalPositionFor({
    line: Number(process.argv[3]),
    // Column numbers coming from v8 are 1-based
    // https://chromium.googlesource.com/v8/v8.git/+/master/src/inspector/js_protocol.json#69
    // But mozilla sourcemap library expects 0-based columns
    // https://github.com/mozilla/source-map#sourcemapconsumerprototypeoriginalpositionforgeneratedposition
    column: Number(process.argv[4]) - 1,
  }));
});
