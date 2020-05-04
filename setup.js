const fs = require('fs');
const readline = require('readline');
const replace = require('replace-in-file');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let completed = false;
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
  // Remove setup npm script
  const scriptPattern = /\s*"setup": "node setup.js",/g;
  const scriptOptions = {
    files: ['package.json'],
    from: scriptPattern,
    to: '',
  };
  replace.sync(scriptOptions);
  // Remove replacement tool
  const replaceInFilePattern = /\s*"replace-in-file": ".*?",/g;
  const replaceInFileOptions = {
    files: ['package.json'],
    from: replaceInFilePattern,
    to: '',
  };
  replace.sync(replaceInFileOptions);
  // Remove setup script file
  try {
    fs.unlinkSync('setup.js');
  } catch (err) {
    console.error(err);
  }
  completed = true;
  // We're done!
  rl.close();
};

const getConfirmation = () => {
  return (
    `\n\nReview:\n-------\n` +
    `Project name: ${parameters.projectName}\n` +
    `Title:        ${parameters.projectTitle}\n` +
    `Description:  ${parameters.description}\n` +
    `Website:      ${parameters.website}\n` +
    `Email:        ${parameters.email}\n` +
    `Author:       ${parameters.author}\n` +
    `GitHub user:  ${parameters.githubUsername}\n\n` +
    `Look good (Y/n)?`
  );
};

// This header will contain a brief description of the project.

const projectNamePrompt = callback => {
  rl.question('GitHub project name (i.e. my-project): ', function(projectName) {
    if (projectName.trim() === '') {
      projectNamePrompt(callback);
    } else {
      callback(projectName);
    }
  });
};
const projectTitlePrompt = callback => {
  rl.question('Project title (i.e. My Project): ', function(projectTitle) {
    if (projectTitle.trim() === '') {
      projectTitlePrompt(callback);
    } else {
      callback(projectTitle);
    }
  });
};
const descriptionPrompt = callback => {
  rl.question('Project description: ', function(description) {
    if (description.trim() === '') {
      descriptionPrompt(callback);
    } else {
      callback(description);
    }
  });
};
const websitePrompt = callback => {
  rl.question('Website or GitHub profile link: ', function(website) {
    if (website.trim() === '') {
      websitePrompt(callback);
    } else {
      callback(website);
    }
  });
};
const emailPrompt = callback => {
  rl.question('Email (i.e. devboldly@gmail.com): ', function(email) {
    if (email.trim() === '') {
      emailPrompt(callback);
    } else {
      callback(email);
    }
  });
};
const authorPrompt = callback => {
  rl.question('Author name (i.e. Justin Mahar): ', function(author) {
    if (author.trim() === '') {
      authorPrompt(callback);
    } else {
      callback(author);
    }
  });
};
const githubUsernamePrompt = callback => {
  rl.question('GitHub username (i.e. devboldly): ', function(githubUsername) {
    if (githubUsername.trim() === '') {
      githubUsernamePrompt(callback);
    } else {
      callback(githubUsername);
    }
  });
};

projectNamePrompt(function(projectName) {
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
              rl.question(getConfirmation(), function(response) {
                if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
                  doSetup();
                }
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

rl.on('close', function() {
  if (completed) {
    console.log('\nDone! To reset all changes and start over, use:\n  git reset HEAD --hard && npm run setup\n');
  } else {
    console.log('Aborted.');
  }
  process.exit(0);
});
