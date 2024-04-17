import { PostsError, PostsLoaded, RecountVotes } from '../actions/posts';

const InitialState = {
  error: null,
  pages: 0,
  posts: [],
  votes: 0,
};

export default function posts(state = InitialState, action) {
  switch (action.type) {
    case PostsError: {
      return {
        ...state,
        error: action.error,
      };
    }

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

    // No need to recount votes here, it's already done when posts are loaded
    
    //A use case may be when the existing post votes gets updated in the database then we can show the
    // total votes when the user is static on the page 
    case RecountVotes: {
      return state
    }

    default:
      return state;
  }
}
