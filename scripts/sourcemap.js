'use strict';

const sourceMap = require('source-map');
const fs = require('fs');

fs.readFile(argv[1], 'utf8', function (err, data) {
  const smc = new sourceMap.SourceMapConsumer(data);

  console.log(smc.originalPositionFor({
    line: argv[2],
    column: argv[3],
  }));
});
