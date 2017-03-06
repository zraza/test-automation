## Introduction

Simple framework to test Web UI and API response, GitHub is used as an example


###To Get Started

####Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

**Note** Min node version 6.9.x

2.Chrome or Firefox browsers installed.

####Run Scripts

```
git clone https://github.com/zraza/test-automation
cd test-automation
npm install 

node_modules/protractor/bin/webdriver-manager update
npm test

```
**Note** You might to run npm with sudo

**BDD/components**
Reusable classes

**BDD/features**
As name suggested, it should have feature file (Gherkin) and step files for specific steps.

**BDD/helpers**
Reusable helper classes

**BDD/pages**
As name suggested

**BDD/step-definitions**
Generic step definitions like opening a page, loading REST data

**BDD/support**
set-up/hooks
