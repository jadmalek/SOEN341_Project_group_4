[![Build Status](https://travis-ci.org/benrs/SOEN341_Project_group_4.svg?branch=master)](https://travis-ci.org/benrs/SOEN341_Project_group_4)

# E-Learning website for Software Engineering 341

Site Url: http://ec2-54-91-234-134.compute-1.amazonaws.com/


### Building and testing locally

Dependencies: You must install NodeJS and MongoDB on your computer, you can do this via a package manager or by doing it manually.

Open up a terminal windows, and CD to the directory that your local repo is stored. Checkout newest branch youre are testing.
To build the project locally you need to run `npm install` in a terminal window which is located in the root directory, you must also run `npm install` under the frontend directory.
After installing all dependencies you must run `node app.js`, you will receive a message the app is listening on
a specific port.

Open up a browser and go to http://localhost:<port_number> and you will be served the main index.html file.
