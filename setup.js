const fs = require('fs');
const readline = require('readline');
const replace = require('replace-in-file');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const parameters = {};

const doSetup = () => {
  const projectFiles = ['src/**/*', 'LICENSE', 'package-lock.json', 'package.json', 'README.md', 'README.template.md'];
  // === GitHub project name ===
  replace.sync({
    files: projectFiles,
    from: /react-kindling/g,
    to: parameters.projectName,
  });
  // === Project title ===
  replace.sync({
    files: projectFiles,
    from: /React Kindling/g,
    to: parameters.projectTitle,
  });
  // === Website or GitHub profile link ===
  replace.sync({
    files: projectFiles,
    from: /https:\/\/devboldly.com/g,
    to: parameters.website,
  });
  // === Email ===
  replace.sync({
    files: projectFiles,
    from: /devboldly@gmail\.com/g,
    to: parameters.email,
  });
  // === Author name ===
  replace.sync({
    files: projectFiles,
    from: /DevBoldly/g,
    to: parameters.author,
  });
  // === GitHub username ===
  replace.sync({
    files: projectFiles,
    from: /devboldly/g,
    to: parameters.githubUsername,
  });

  // === Self destruct ===
  const selfDestructPattern = /\n {4}"setup": "node setup.js",/g;
  const selfDestructOptions = {
    files: ['package.json'],
    from: selfDestructPattern,
    to: '',
  };
  replace.sync(selfDestructOptions);
  // console.log('Replacement results:', results);
  try {
    fs.unlinkSync('setup.js');
  } catch (err) {
    console.error(err);
  }

  rl.close();
};

rl.question('GitHub project name (i.e. my-project): ', function(projectName) {
  parameters.projectName = projectName;
  rl.question('Project title (i.e. My Project): ', function(projectTitle) {
    parameters.projectTitle = projectTitle;
    rl.question('Website or GitHub profile link: ', function(website) {
      parameters.website = website;
      rl.question('Email (i.e. devboldly@gmail.com): ', function(email) {
        parameters.email = email;
        rl.question('Author name (i.e. Justin Mahar): ', function(author) {
          parameters.author = author;
          rl.question('GitHub username (i.e. devboldly): ', function(githubUsername) {
            parameters.githubUsername = githubUsername;
            doSetup();
          });
        });
      });
    });
  });
});

rl.on('close', function() {
  console.log('\nEnjoy! 👌');
  process.exit(0);
});
