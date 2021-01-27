## Introduction
Bankfo-Backend is a REST Service made using NodeJS.
It is currently hosted [here](https://bankfo-backend.herokuapp.com/).
Bankfo-Backend is made as an assignment.

## API
There are 2 endpoints available which are
-  ### search (/api/branches?q=<>)
    Search API to return possible matches across all columns and all rows to get all the bank branches. (Thorugh name of cities, localities, branch name etc)
    Ex: api/branches?q=Bangalore&limit=3&offset=0

-  ### autocomplete (/api/branches/autocomplete?q=<>)
    Autocomplete API to return possible matches based on the branch name.
    Ex: api/branches/autocomplete?q=RTGS&limit=3&offset=0

### Setup
1. Install the packages using: \
    `` npm install ``
2.  Make a copy of .env.example and rename it to .env and fill the connection details for database
3.  Run the following command\
      `` npm run dev``

Feel free to give any suggestions for improvement at alishamohanty1416@gmail.com or create an issue.

Thank you :D