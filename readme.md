# Packages Used
This project imports the following npm packages:
### 1. express
  * A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  * Used to set up the server, handle routing, and manage middleware.
### 2. fs 
  * A Node.js built-in module that provides an API for interacting with the file system.
  * Used for reading from and writing to the file system to create and read timestamp files.
  * Built into Node.js, no need to install separately.
### 3. data-fns
  * A modern JavaScript date utility library that provides comprehensive, yet simple and consistent toolset for working with dates.
  * Used to format the current date and time when creating timestamp files.
### 4. path
  * A Node.js built-in module that provides utilities for working with file and directory paths.
  * Used to handle and manipulate file paths.

# API Endpoints
## Base page
#### Base URL:-  https://time-stamp-w721.onrender.com
### Description
This endpoint shows the port is currently running on.

## Create page
#### Create URL:- https://time-stamp-w721.onrender.com/create
### Description
This endpoint creates a new timestamp file in the Timestamp directory. 
The file is named with the current date and time in the format dd-MM-yyyy HH-mm-ss.txt.

## Read Page
#### Read URL:- https://time-stamp-w721.onrender.com/read
### Description
This endpoint reads all timestamp files in the Timestamp directory and returns their contents as a JSON array. 
Each element in the array represents the content of one timestamp file.

## POSTMAN API DOCUMENTATION: 
https://documenter.getpostman.com/view/34996607/2sA3QterXj
