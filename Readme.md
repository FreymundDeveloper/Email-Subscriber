# Email-Subscriber

Email-Subscriber is a simple application that registers an email in a database. The application is linked to a response algorithm (similar to the idea of ​​a “subscribe newsletter”), developed with the nodemail library.

**Obs**: Due to the need to connect to a paid server/platform, the nodemailer algorithm is disabled. To reactivate it, simply uncomment the code snippet in "backend\src\controller\controller.ts".

Some technologies used:

* React;
* Html;
* CSS(Styled);
* TypeScript;
* Jest;
* SQLite;
* Node;
* Express;
* Docker.

## Routes 

All routes are linked to the "localhost:3001/emails ..." address. The backend runs on port 3001 and the frontend on port 3000. Below are some examples of shipping data and the routes themselves:

* Post: /emails - Body: { "email": "exemple@mail.com" };
* Get: /emails - QueryParams: { "id" };
* Delete: /emails/:id - Params: { "id": number };

## Running the app

**Obs**: Make sure the Backend is running before starting the Frontend, otherwise bugs may occur.

```bash
# Installation
$ npm install

# Running
# Open two terminals and go to "cd ./frontend" in one, and "cd ./backend" in the other. Then run on both:
$ npm run start

# Running Test
# Go to "cd ./frontend" or "cd ./backend". Then run:
$ npm run test
```

## Running Docker

**Obs**: The application has 2 Dockerfiles, one in "./backend" and another in "./frontend". The configuration and building process for both is done through "docker-compose.yml" in the root of the application.

```bash
# Build
$ docker-compose up
```