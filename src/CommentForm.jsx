import React from 'react';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '', 
      text: ''
    };
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Your name" 
          style={{"width" : "250px"}} 
          value={this.state.author}
          onChange={this.handleAuthorChange.bind(this)}
        />
        <br />
        <textarea
          placeholder="Say something..." 
          style={{"width" : "250px"}}
          rows="5"
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)} 
        />
        <br />
        <input type="submit" value="Post Comment" />
      </form>
    );
  }

}

export default CommentForm;