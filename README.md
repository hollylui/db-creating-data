# Saving data to our database

This assignment will have you practising saving data to the database

> Difficulty level: Beginner 🫖 🍵

## What you will be doing

For this assignment you will have to:

1. Setup your server
2. Create the code necessary to service all client requests
3. Setup your database
4. Setup the schema for your data
5. Connect your database to your server endpoints

The client (frontend) code has already been written. You do not need to change this.

This project assumes you've already had experience with:

- dotenv
- express.js

## Tasks

## Task 1 - Initial setup - npm packages

> Note: If you are using an older version of `npm`, you may need to first initialise the folder with `npm init -y`

1. Install the `dotenv` package with `npm i dotenv`
2. Install the `mongoose` package with `npm i mongoose`
2. Install the `express` package with `npm i express`

## Task 2 - Setting up your .env file

> Important! To complete this task, you need to know the connection details for your database

> You will need to know:
> 1. Your connection URL
> 2. Your username
> 3. Your password
> 4. The name of the database you want to 

You should be able to get all of this information from your MongoDB server

1. Create a `.env` file in the root folder
2. Setup your `.env` file to include the following information:
   - Username
   - Password
   - Database name

## Task 3 - Setting up dotenv

1. Create the file `server.js`
2. Import the `dotenv` library
3. Run the `config()` method which comes with the `dotenv` library

[dotenv](https://www.npmjs.com/package/dotenv)

## Task 4 - Connecting to the database

1. Import the `mongoose` library
2. Use the `connect()` method to connect to your MongoDB database
   > `connect()` uses promises
   > Hint: You will need to use the variables which `dotenv` provides for you
3. Since the `connect()` method uses promises, we can handle the resulting states from the promise with `then()` and `catch()`
4. Use the `then()` method to write a `console.log()` message, telling us that connecting to the database was a **success**
5. Use the `catch()` method to write a `console.log()` message, telling us that connecting to the database was a **failure**
6. Run your code, and see if you can connect to the database

> Important: Before moving to the next task, make sure your database connection is working

## Task 5 - Setting up the server

1. Import the `express` library and setup a server
2. Setup the `express.json()` middleware

## Task 6 - Setting up a POST endpoint

1. Create an endpoint which accepts a POST request. Use any path or route you wish.
2. Use an API testing tool such as [Insomnia](https://insomnia.rest/) to test your endpoint

## Task 7 - Creating a schema for your collection

We need to store some information into the database. This information will be held inside a new collection.

1. Create a schema with the name "User". The schema should accommodate the following data structure:

```text
id: String
firstname: String
lastname: String
language: String
avatar: String
skill: String
```

## Task 8 - Creating a model for your collection

The schema on its own does nothing - it is the model that does the work of interfacing with the collection

1. Create a model for the schema you just created

## Task 9 - Saving data into the collection via the endpoint

1. Import the model you created in Task 8
2. Using the endpoint you created in Task 6, read and store the JSON from the `request.body` property, and store that in the database using the Model `create()` method.
3. Test your endpoint works by using an API testing tool. Here is some sample data you can use.

```text
id: 262622b5-4cf9-4a33-8f6e-b5ae276394c1
firstname: Elwira
lastname: Janek
language: New Zealand Sign Language
avatar: https://robohash.org/voluptatibusreiciendisodio.png?size=50x50&set=set1
skill: Theatre
```

> Hint: Remember, `create()` uses a promise!

## Task 8 - Getting more mock data

1. Use the website [mockaroo](https://mockaroo.com/) to generate at least 10 more records
2. Use the data from mockaroo in your API testing tool, to add at least 5 more documents to your database
3. Check your database to see if the inputted data has been saved
