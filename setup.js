const fs = require('fs');
const readline = require('readline');
const replace = require('replace-in-file');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const parameters = {};

const doSetup = () => {
  console.log('doing it!', parameters);
  const scriptPattern = /\n {4}"setup": "node setup.js",/g;
  const options = {
    files: ['package.json'],
    from: scriptPattern,
    to: '',
  };
  const options2 = {
    files: ['src/**/*', 'LICENSE', 'package-lock.json', 'package.json', 'README.md', 'README.template.md'],
    from: /lalala/g,
    to: '',
  };

  // const results = replace.sync(options);
  // console.log('Replacement results:', results);

  try {
    // fs.unlinkSync('setup.js');
    //file removed
  } catch (err) {
    console.error(err);
  }

  rl.close();
};

rl.question('What is your name? ', function(name) {
  parameters.name = name;
  rl.question('What is your name2? ', function(name) {
    doSetup();
  });
});

rl.on('close', function() {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});