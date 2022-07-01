# _Currency Swap_

#### By _**Garrett Hays**_

#### This application utilizes API calls to return currency conversions and conversion rates.

## Technologies Used

* _HTML_
* _Javascript_
* _JQuery_
* _CSS_
* _Node.js_
* _npm_
* _Webpack_
* _ESLint_
* Babel
* _API_

## Description

This application requires the user to supply three inputs - amount, currency to convert from and currency to convert to. The application then performs a GET call to the ExchangeRate-API, including the provided user inputs. The API then returns the currency being exchanged, currency being converted to, conversion rate and final converted amount. The application then ingests this information and displays it for the user.

## Necessary Requirements

* node.js
* Creation of an account at exchangerate-api.com to obtain API key for ExchangeRate-API.

## Setup/Installation Requirements

* _Copy the repository URL for project named Currency Swap_
* _Clone the copied repository to your desktop using the "git clone" command in a shell program_
* _Open the cloned directory Currency Swap_
* _Using your shell program, navigate to the root directory of the newly created Currency Swap directory_
* _Once in the root directory, create a file named ".env"_
* _Navigate to the newly created .env file. Add your API key by typing "API_KEY={your key here}"_
* _While still in the root directory, add another file named ".gitignore" (if one does not already exist)_
* _Add .env to your .gitignore file_
* _Using your shell program, commit the .gitignore file to your GitHub remote repository_
* _Ensuring you are still in the root directory, run "npm install" in your shell program_
* _After installation, run "npm run build" in your shell program_
* _Locate the index.html file inside the dist directory, then open with Live Server to run application_

## Known Bugs

* No Known Bugs
  - If you identify any issues or just have questions, ideas or concerns, please feel free to contact [Garrett Hays](mailto:GarrettLHays@gmail.com) to discuss.

## License

MIT

Copyright (c) _7/1/22_ _Garrett Hays_
