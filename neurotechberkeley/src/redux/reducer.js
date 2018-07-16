import {GET_POSTS} from './actions';

const initialState = {
  posts: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_POSTS:
      return {posts: ...action.posts};
    default:
      return state;
  }
}
