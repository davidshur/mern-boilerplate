# mern-boilerplate

This is a boilerplate MERN application. Use this project as a template to kick
start your full-stack project.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

### Prerequisites

You will need to install node, visit their website at
[NodeJS](https://nodejs.org/en/download/).

You will need to install the Heroku CLI. For other systems refer to the official
docs at [Heroku](https://devcenter.heroku.com/articles/heroku-cli). On Mac

```
brew tap heroku/brew && brew install heroku
```

To check that these are installed run

```
node -v
npm -v
heroku -v
```

### Installing

After cloning, create a .env file in the root directory to house the mongoDB
URI. I used mLab as my database host. The environment variable should look like

```
MONGODB_URI=<your_uri_here>
```

After that, make a .env file in the client directory and add the following line.
This will allow the client to run despite a Jest version mismatch between root
and client.

```
SKIP_PREFLIGHT_CHECK=true
```

Then, install the npm packages in root and in client

```
npm i
cd client
npm i
```

Start the server

```
npm start
```

## Running the tests

To run tests, simply do

```
npm run test
```

To run tests continuously, do

```
npm run test:watch
```

### Break down into end to end tests

Tests check API endpoints.

```
it('gets / endpoint', async done => {
  const res = await request.get('/');

  expect(res.status).toBe(200);
  expect(res.body.message).toBe('Hello world!');
  done();
});
```

### And coding style tests

Currently there are no coding style tests.

## Deployment

To deploy on a live website, this project used Heroku. In terminal

```
heroku login
heroku create
```

At this point, go into the Heroku settings for the branch you have created and
add MongoDB mLab as an add on. Make a .env file in the root directory and in it
put

```
MONGODB_URI=mongodb://<username>:<password>@<your_mongo_db_uri_info>
```

Then deploy to the live server with

```
git push heroku master
```

## Built With

- [MongoDB](https://www.mongodb.com/) - Database
- [ExpressJS](https://expressjs.com/) - Web Framework
- [ReactJS](https://reactjs.org/) - Frontend
- [NodeJS](https://nodejs.org/) - Backend

## Authors

- **David Shur** - _Initial work_ - [David Shur](https://github.com/davidshur)

See also the [contributors](https://github.com/your/project/contributors) who
participated in this project.

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md)
file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
