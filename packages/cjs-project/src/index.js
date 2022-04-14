const { waitFor } = require('cjs-esm-ts-lib');

(async () => {
  await waitFor(1000);

  console.log('1s later');
})();
