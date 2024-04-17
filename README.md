# Canny Debugging Test

Howdy Candidate, we've created this pared down version of Canny to get a better idea of your experience debugging web applications. Best of luck!

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

## Customer Issues

For each of the following issues:

1. Identify the issue
2. Apply the fix
3. Provide a response to each technical customer in 1-2 sentences

**Customer 1:** When I open the application, my posts do not load and all I see is a 'server error'.

**Debug:1**

```
Issue: Mismatching Field name in userData object while authenticating the user 
userData = {
  email: 'user@email.com',
  id: 'user.id',
  nayme: 'user.name',
  iat: 1609973239
}

Fix: Updated userData.name to userData.nayme
In server/utils/authenticate.js

export default async function authenticateUser(request, queryData) {
  ....//some code
  if (!userData.id) {
    throw new Error('Missing id in user data');
  } else if (userData.email && !validateInput.email(userData.email)) {
    throw new Error('Invalid email in user data');
  } else if (!userData.nayme) {
    throw new Error('Missing name in user data');
  }

  return userData;
}

Response: Resolved the issue by updating the field check from userData.name to userData.nayme in the authenticateUser function. Additionally, according to software engineering best practices, if I had access to the User Database, I would recommend updating the attribute 'nayme' in the user schema.

```

**Customer 2:** When I click on "Top" or "Old", the selector does not update with my new selection.

**Debug:2**

```
Issue: posts reducer function is handling the state update based on action.sort which is causing the latency in updating the sort property 

Fix: 
In app/reducers/sort.js
...
export default function posts(state = InitialState, action) {
  switch (action.type) {
    case ChangeSort: {
      return {
        ...state,
        sort: action.sort,
      };
    }

    default:
      return state;
  }
}
...

Response:
- From the provided code snippets , the posts reducer in app/reducer/posts.js is responsible for handling the ChangeSort action from app/actions/sort.js 
- To resolve the issue I updated the posts reducer to correctly handle the ChangeSort action by returning a new state object with the updated sort value

```

**Customer 3:** When I sort by "Top", there are posts with only 28 votes ranking higher than posts with 180 votes!

**Debug:3**

```
Issue: There is fault in the implementation logic of mergeSort in the sortBy function. 
Fix: Updated the MergeSort Logic in the function sortBy in server/utils/sortBy.js file.
Response: 
In server/utils/sortBy.js
I corrected the merge sort logic, after splitting of the array and arranging the votes in descending order later I merged both arrays before returning the result

Response to Customer: Now the user can happily sort by "Top" filter 

```

**Customer 4:** When I page through posts, although the posts are changing, the vote count in the top left corner does not match the total count of votes of the displayed posts.

```
Issue: There is a bug in how the total votes are calculated
Fix: Updated Code block from app/reducers/posts.js

export default function posts(state = InitialState, action) {
    
    ..//some previous code
    case PostsLoaded: {
      const votes = action.posts.reduce((prev, post) => {
        return prev + post.votes;
      }, 0);
      return {
        ...state,
        error: null,
        pages: action.pages,
        posts: action.posts,
        votes: votes // Recalculate votes when posts are loaded
      };
    }

    case RecountVotes: {
      return state
    }
    ..//some after code
  }


Response: I resolved the issue by updating the `PostLoaded` case to calculate the total votes(`votes`) using `action.posts`, which represent the newly loaded posts. This now ensures that the total votes accurately reflect the count of votes of the displayed posts.

Additionaly I modified the `RecentVotes` case to avoid unnecessary recounting of votes using `state.posts` earlier.

```

## My Note to Canny


- `I like that coding challenge since it is associated with real life working enviroment.`
- `To ensure the quality of code ,I dive deep to first understand the little details in the features, and then implemeted logic utlizing react-redux best practices to make code display the envisioned featured ,keeping it easy to read and maintain.`
- `Considering various product use cases, I have multiple ideas to contribute and am eager to collaborate with product, engineering, and customer-facing teams to deliver an exceptional experience for Canny customers.Moreover I am eager to learn new things`
- `I'm enthusiastic about collaborating with like-minded individuals at Canny 😄 and look forward to working together.`


## 🎉 You're Done 🎉

Congrats on completing our assessment. All that is left for you to do is submit your assessment. We made a command that will zip your submission and send it to us. Send us an email to confirm that we got it.

```sh
npm run submit
```
