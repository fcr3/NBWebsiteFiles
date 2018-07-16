import React, {Component} from 'react';
import Cell from './testcell';
import {connect} from 'react-redux';
import {getPosts} from '../redux/actions';
import {Route} from 'react-router-dom';

class postView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    let renderedPosts = (<Cell title="No posts available" article="" link="" id={0} />);
    if (this.props.posts.length !== 0) {
      renderedPosts = this.props.posts.map((val, index) => (
        <Cell title={val.title} article={val.article} link={val.link} id={index} />
      ));
    }

    return (
      <div>
        <Route path="/posts" component={() => (<div><ul>{renderedPosts}</ul></div>)} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  };
}

export default connect(mapStateToProps, {getPosts})(postView);
