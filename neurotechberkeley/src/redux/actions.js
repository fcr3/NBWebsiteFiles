import {database} from '../database/config';

export const GET_POSTS = "GET_POSTS";

function handleReceivedPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

export function getPosts() {
  return dispatch => {
    database.ref('posts').once('value').then(snapshot => {
      let posts = [];
      snapshot.forEach((child, index) => {
        posts.push(child.val());
      });
      dispatch(handleReceivedPosts(posts));
    });
  };
}
