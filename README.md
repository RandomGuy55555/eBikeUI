# EBikeUI

## What is this project about?
This project is a frontend implementation of an eBike renting system in Angular.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## TechStack
To run the frontend you need the following:

- Node.js version v16.14.2
- Angular 14.2 (will be installed via npm install)

# Installation

## Node.js (16.14.2)
* Visit this [NodeJS-website](https://nodejs.org/download/release/v16.4.2/), to download the installer for your operation system. Alternatively use [Node Version Manager](https://github.com/nvm-sh/nvm).
* follow the installation instructions for your operating system
* type following command into a terminal (Linx/macOS)
```
node -v
```
The result should be:
```
v16.14.2
```
* After that type following command to install all dependencies
```
npm install
```
* You should now be ready to go.

## Start the (Development) server
* Run `ng serve` for a dev server. Alternatively open the project with VSCode and run the run configuration **ng serve**.
* **IMPORTANT**: Use google chrome with **deactivated CORS** , otherwise the application will not work as intended. 

For **macOS** install Google Chrome and start a terminal with
```
open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security
```
For **Windows**:
- right click on desktop. Create a new shortcut or alternatively copy an existing shortcut
- rightclick on the shortcut and set the target as 
```
"[PATH_TO_CHROME]\chrome.exe" --disable-web-security --user-data-dir=~/chromeTemp
``` 
and save

* If executed correct, there is a hint at the top of the application that security is disabled.
* Make sure the **backend** runs
* Navigate to `http://localhost:4200/`.
