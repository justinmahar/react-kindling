<h2 align="center">
  <a href="https://github.com/devboldly/react-library-starter">
    react-library-starter
  </a>
</h2>
<h3 align="center">
  A template to build, test, and share React components and hooks easily.<br/>Uses Storybook, Jest, and more.
</h3>
<p align="center">
  <a href="https://github.com/devboldly/react-library-starter/generate">
    <img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/>
  </a>
  <a href="https://github.com/devboldly/react-library-starter/actions">
    <img src="https://github.com/devboldly/react-library-starter/workflows/Node.js%20CI/badge.svg" alt="Build Status"/>
  </a>
</p>

## Overview

This project was created as a starter for [React](https://reactjs.org/) component and [hook](https://reactjs.org/docs/hooks-intro.html) libraries. Think of this template as a scaffold for all of your React goodies you want to build and possibly share via [npm](https://www.npmjs.com/).

### Features include:

- **🚀 Starter component and hook**
  - A jumping-off point to speed up your development.
- **🧪 [Jest](https://jestjs.io/) tests**
  - Includes [react-testing-library](https://testing-library.com/react) and [react-hooks-testing-library](https://react-hooks-testing-library.com) examples to build from.
- **✨ [TypeScript](https://www.typescriptlang.org/) support**
  - For optional type checking and safety. Don't know TS? Just use JS until you [learn](https://www.typescriptlang.org/).
- **📋 [ESLint](https://eslint.org/) rules**
  - Use best practices, catch mistakes, and autoformat your code.
- **📖 [Storybook](https://storybook.js.org/) stories**
  - Example stories for a component and a hook. Visualize as you build.
- **👷 Zero-config [GitHub CI](https://help.github.com/en/actions/building-and-testing-code-with-continuous-integration/about-continuous-integration)**
  - GitHub will build and run your tests on every push, for free. It just works!
- **👓 [README template](https://github.com/devboldly/react-library-starter/blob/master/README.template.md)**
  - Just fill it out. Includes [npm version badge](https://badge.fury.io/for/js) and CI badges for street cred.
- **📜 [Docz](https://www.docz.site/) documentation**
  - Easily document and showcase your components and hooks. See the [included example](https://react-library-starter.netlify.com/).
- **🌎 [Netlify](https://netlify.com/) pre-configuration**
  - Deploy your documentation site to Netlify with just a few clicks. For free.
- **📦 Easy [npm publish](https://docs.npmjs.com/cli/publish)**
  - Build, version, and publish to [npm](https://www.npmjs.com/) with one command: `npm run deploy`
- And more!

## Quick Start

### Click the button below to use this template:

<a href="https://github.com/devboldly/react-library-starter/generate"><img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/></a>

You will be prompted for a repo name and description, and GitHub will do the rest.

**Note:** This approach is recommended over cloning or forking because [repositories created from a template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) start with a single commit and are not treated as forks, but instead as an entirely new project.

### Install dependencies

```
npm i
```

### Start project

```
npm start
```

This will run the Storybook server so you can develop. 

Go to [localhost:6006](http://localhost:6006/) to see the example hook and component stories. You're ready to start developing!

## Start Developing

### Update `package.json`

First thing's first. Open `package.json` and update all fields including the name, description, and author.

By default the package is scoped to an npm account (e.g. `@devboldly/react-library-starter`).

### Replace the README

This project includes a README template called `README.template.md`. [View it here](https://github.com/devboldly/react-library-starter/blob/master/README.template.md).

If you'd like to use the template:
  - Replace `README.md` with `README.template.md`
  - Replace `devboldly` with your username and `react-library-starter` with the name of your package.
  - Fill the rest out when you're ready.

If not, then just delete `README.template.md` and create your own `README.md`.

### Use Storybook to develop your components and hooks

[Storybook](https://storybook.js.org/) lets you develop your React components and hooks in isolation. Each "storybook" is a file that contains "stories", which are just the different visual states of your component or hook.

You can run Storybook using:

```
npm start
```

Your browser will automatically open to [localhost:6006](http://localhost:6006/).

In `src/__stories__`, a story is provided for both the example component and hook. Use these as a starting point for your own components and hooks.

You will see your changes in Storybook immediately since it uses Webpack's hot module reloading.

### Write tests

The directory `src/__tests__` contains two example test files, one for a component and one for a hook. 

There are [react-testing-library](https://testing-library.com/react) and [react-hooks-testing-library](https://react-hooks-testing-library.com) examples provided to build off of. 

There is a single test to ensure your component or hook doesn't crash. Add more tests as you see fit.

You can run tests by running: 

```
npm test
```

You can run tests in watch mode by running: 

```
npm test:watch
```

### Export modules from `index.tsx`

Export anything you'd like to make available to the outside world in `index.tsx`.

These will be the modules that can be imported from your npm package after it's installed.

### Document with Docz

This starter includes [Docz](https://www.docz.site/), the easiest way to create React documentation.

Just add [MDX files](https://mdxjs.com/) next to your components and [Docz](https://www.docz.site/) will automatically find them and add them to your documentation site. Example MDX files are already present for the example component and hook in this template repository. Use those as a starting point.

Edit the MDX files in `src/__docz__` to change the Home doc page and license page.

Just run the following to start the Docz dev server:

```bash
npm run docz:dev
```

### Deploy to Netlify

With just a few clicks, you can deploy this project's documentation to [Netlify](https://netlify.com/) for free.

Netlify has already been configured (in `netlify.toml`), so you can add and deploy immediately with zero config. Netlify will build and serve up your Docz static site.

Once you deploy and the documentation site is live, be sure to update the README (if you used the provided template):

- Update the Netlify build status badge (at the top)
- Update the link to the documentation site (first section)

### Publish to npm

When you're finished developing, you can easily deploy to npm with one command.

If you haven't already, log into npm:

```
npm login
```

Then deploy with a single command:

```
npm run deploy
```

This command will build your project, add/commit the freshly built `dist` directory, push to GitHub, increment the package version, and publish to npm.

If you have any unsaved changes, this script will fail until your working directory is clean.

### Celebrate!

You've done it! Your project is ready for the world.

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## ⭐ Found It Helpful? [Star It!](https://github.com/devboldly/react-library-starter/stargazers)

More stars means more development love. So if you found this project helpful, [star it](https://github.com/devboldly/react-library-starter/stargazers)! [👉⭐](https://github.com/devboldly/react-library-starter/stargazers)

## License

This project is covered under the [MIT License](https://en.wikipedia.org/wiki/MIT_License):

```
Copyright © 2020 DevBoldly https://devboldly.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```