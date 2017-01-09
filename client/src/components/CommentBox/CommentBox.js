import React from 'react';

class CommentBox extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <div className="commentBox" onClick={(e) => this.handleClick(e)}>
        Hello, {this.props.name}! I am a CommentBox.
      </div>
    );
  }
}

export default CommentBox;
