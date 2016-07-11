import React from 'react';
import {render} from 'react-dom';
import CommentBox from './CommentBox.jsx';

class App extends React.Component {
  render () {
    return <CommentBox />;
  }
}

render(<App/>, document.getElementById('content'));