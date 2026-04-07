##Clone the project on your local

-Execute npm install in the root directory of the downloaded project

-Create a .env file in the root directory and add the following environment variable:

-PORT=3000

-Inside the src/config folder create a new file config.json and then add the following JSON:

{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

-Once you've added your DB config as listed above, go to the src folder from your terminal and execute:
npx sequelize db:create