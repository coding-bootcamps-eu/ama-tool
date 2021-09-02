# ama-tool (Ask me Anything)

[![GitHub version](https://badge.fury.io/gh/coding-bootcamps-eu%2Fama-tool.svg)](https://badge.fury.io/gh/coding-bootcamps-eu%2Fama-tool)
[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)
[![ama-tool](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/mikw99/dev&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/mikw99/runs)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/coding-bootcamps-eu/ama-tool/tree/dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/563956e9-550c-4f80-91e9-d6f8a5ac3228/deploy-status)](https://app.netlify.com/sites/ama-tool/deploys)

---

\
 **A tool to prepare yourself and your group for an AskMeAnything session.**

---

## For Devs:

> To use the app with local server, you need a local .env.local-file; please contact us if you want to improve the tool

## For User:

GitHub-Account is necessary:

- To ask new questions
- To See the asked questions

We _recommend_ to set your Github display name (settings/public profile).

---

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Rules we set us during the development process

- Variables: variable naming in english and in "camelCase".
- Class (HTML), id names with "-" and lowercase
- Selfdescribing variabel
- Vue denominations: double-named and initial letter capital "MyVueComponent"
- Add comments if functions are unclear
- Quotes: "..." >> Doublequotes
- CSS-Style:
  - General-Styling
  - Specific-Styling
  - Rest from top to bottom matching the DOM
- Components only with "scoped" and in folder

## Views included

- Home
- Questions
  - Question List
  - Question Details
  - Ask Question
- Team
- Footer
  - Privacy
  - Policies
  - Imprint
