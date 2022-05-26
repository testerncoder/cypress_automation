<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.logolynx.com/images/logolynx/bc/bc2fb19e08e7b17d7cbd4f7d5fd610ae.jpeg" alt="Project logo"></a>
</p>

<h3 align="center">PDB Automation (AU+NZ) </h3>

---

<p align="center"> This project will ensure automation of both AU and NZ PDB Websites and useful current APIs using Cypress. 
    <br> 
</p>

## 📝 Table of Contents

- [Prerequisite](#prerequisite)
- [Framework Setup](#frameworkSetup)
  - [Auto Module Generator](#moduleGenerator)
  - [Code Quality Setup (Eslint + Prettier)](#codeQualitySetup)
  - [Useful commands](#commands)
- [User Access Control](#userAccessControl)
- [Test Execution Control (Environment Specific)](#testExecutionControl)
- [API Schema Validation](#apiSchemaValidation)

## 🧐 Prerequisite <a name = "prerequisite"></a>

- [Node js (recommended version >=10.0.0)](https://nodejs.org)
- [NPM (recommended version >=6.0.0)](https://npmjs.com)

## 🏁 Framework Setup <a name = "frameworkSetup"></a>

```
npm install
```

### 📁 Auto Modules/Files Generator <a name = "moduleGenerator"></a>

To ensure the naming convention of the file in every module are consistent. Also, to provide a standard file structure.

#### For app automation files:

```
cd generator
node appFilesGenerator.js --comp=app.filename
```

#### For api automation files:

```
cd generator
node apiFilesGenerator.js --comp=api.filename
```

### 🥉 Code Quality Setup (Eslint + Prettier) <a name = "codeQualitySetup"></a>

- This framework is using Airbnb Eslint rules to ensure javascript code standards.
- Javascript code is written in ES6.
- This framework is configured with prettier to ensure the code indentation is consistent across.

```
npm run lint
```

### 🚀 Useful commands <a name = "commands"></a>

#### AU Commands: Test Execution on different Environments in Cypress Runner or Browser

```
npm run testau
npm run uatau
npm run nonprodau
```

#### AU Commands: Test Execution on different Environments in Command-Line or CI

```
npm run testauCI
npm run uatauCI
npm run nonprodauCI
```

#### NZ Commands: Test Execution on different Environments in Cypress Runner or Browser

```
npm run testnz
npm run uatnz
npm run nonprodnz
```

#### NZ Commands: Test Execution on different Environments in Command-Line or CI

```
npm run testnzCI
npm run uatnzCI
npm run nonprodnzCI
```

## 🔐 User Access Control <a name = "userAccessControl"></a>

This framework is intelligent enough to ensure that the user has access of a particular functionality on PDB website dependents upon user's role. Therefore, the test cases of accessible modules will only be executed for that user.

For Example, the **Admin** user has all the crud operations access while **Marketing**, **Supplier** and **Merchant** users have limited RW access of the functionalities and the **Viewer** has only read access.

Read More References:

[ User Access Matrix Confluence Page](https://confluence.akqa.net.au/display/BUNICLIENT/PDB+-+Access+matrix)

## ⏳ Test Execution Control (Environment Specific) <a name = "testExecutionControl"></a>

This framework has the ability to decide, which test cases should be executed on which environment. Therefore, it executes the test cases on the basis of current environment in which the build is being deployed.

For Example, when a build is triggered on the **Test** it executes all the test cases available on the project as **Regression Test**, on the **Test** environment, similarly on **Staging**. But when build is finally triggered on **Non-Prod** environment, only the **PVT** test cases are executed.

## ✔️ API Schema Validation <a name = "apiSchemaValidation"></a>
