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

rl.question('GitHub project name (i.e. my-project): ', function(projectName) {
  parameters.projectName = projectName;
  rl.question('Project title (i.e. My Project)? ', function(projectTitle) {
    parameters.projectTitle = projectTitle;
    rl.question('Website or GitHub link? ', function(website) {
      parameters.website = website;
      rl.question('Email (i.e. devboldly@gmail.com)? ', function(email) {
        parameters.email = email;
        rl.question('Author name (i.e. Justin Mahar)? ', function(author) {
          parameters.author = author;
          rl.question('GitHub username (i.e. devboldly)? ', function(githubUsername) {
            parameters.githubUsername = githubUsername;
            doSetup();
          });
        });
      });
    });
  });
});

rl.on('close', function() {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});
