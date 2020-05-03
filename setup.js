const fs = require('fs');
const readline = require('readline');
const replace = require('replace-in-file');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const parameters = {};

const doSetup = () => {
  // === README ===
  fs.unlinkSync('README.md');
  fs.renameSync('README.template.md', 'README.md');

  const projectFiles = ['src/**/*', 'LICENSE', 'package-lock.json', 'package.json', 'README.md'];
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
  // === Project description ===
  replace.sync({
    files: projectFiles,
    from: /This header will contain a brief description of the project\./g,
    to: parameters.description,
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
  const scriptPattern = /\n\s*"setup": "node setup.js",/g;
  const scriptOptions = {
    files: ['package.json'],
    from: scriptPattern,
    to: '',
  };
  replace.sync(scriptOptions);
  const replaceInFilePattern = /\n\s*"replace-in-file"": ".*?",/g;
  const replaceInFileOptions = {
    files: ['package.json'],
    from: replaceInFilePattern,
    to: '',
  };
  replace.sync(replaceInFileOptions);
  // console.log('Replacement results:', results);
  try {
    fs.unlinkSync('setup.js');
  } catch (err) {
    console.error(err);
  }

  rl.close();
};

// This header will contain a brief description of the project.

rl.question('GitHub project name (i.e. my-project): ', function(projectName) {
  parameters.projectName = projectName;
  rl.question('Project title (i.e. My Project): ', function(projectTitle) {
    parameters.projectTitle = projectTitle;
    rl.question('Project description: ', function(description) {
      parameters.description = description;
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
});

rl.on('close', function() {
  console.log('\nEnjoy!');
  process.exit(0);
});
