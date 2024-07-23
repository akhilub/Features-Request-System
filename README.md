## Feature Request Display System

A modern full stack web application to suggest new features to accommodate in existing business products based on user total votes and can be filtered based on old, new & top suggestions.


  - Part I : Backend Using Node.js With Express
  - Part II: The server-side-rendered React Frontend
  - Part III: Dockerizing Front- & Backend
  - Part IV: Deployed Front- & Backend In The Cloud  
  - Part V: Automating The Build- And Deployment-Process using Git & Docker

~~I am trying to deploy both frontend and backend through one docker-compose on AWS cloud with automated build to reflect the immediate changes pushed into the repo.~~
Update : Deployed both frontend and backend to reflect the immediate changes pushed to repo with automatic build.

## Getting Started

1. **Initialize your environment**

We recommend using nvm for managing node versions.

Install nvm from [here](https://github.com/creationix/nvm)

Then install the node version for this assessment:

```sh
nvm i
```

1. **Install dependencies**

Next you'll need to install this app

```sh
npm install
```

1. **Run the backend**

The backend is a node server. Everything to do with the server lives in `/server`.

Terminal tab #1:

```sh
npm run backend
```

1. **Run the frontend**

Webpack is used to bundle and serve our app. Everything to do with the frontend lives in `/app`.

Terminal tab #2:

```sh
npm run frontend
```

Once everything is running, you should see the app running http://127.0.0.1:8080.


