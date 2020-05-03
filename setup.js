const fs = require('fs');
const readline = require('readline');
const replace = require('replace-in-file');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name ? ', function(name) {
  const options = {
    files: ['src/**/*', 'LICENSE', 'package-lock.json', 'package.json', 'README.md', 'README.template.md'],
    from: /lalala/g,
    to: 'heeeey!',
  };
  const results = replace.sync(options);
  console.log('Replacement results:', results);

  try {
    fs.unlinkSync('setup.js');
    //file removed
  } catch (err) {
    console.error(err);
  }

  rl.close();
});

rl.on('close', function() {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});
