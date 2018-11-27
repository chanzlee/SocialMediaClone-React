import React from "react";
import TimeLinePost from "./TimeLinePost";
import TimeLineFeed from "./TimeLineFeed";
import TimeLineEditPost from "./TimelineEditPost";

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formEditVisible: false,
      postToEdit: null,
      masterFeedList: [
        {
          userName: "ChanTheMan",
          content: "Last week at Thanksgiving I ate.....",
          date: "11/21/18",
          likes: 5,
          dislikes: 3
        }
      ]
    };
    this.handleAddingNewFeedPost = this.handleAddingNewFeedPost.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleAddingNewFeedPost(newPost) {
    var newList = this.state.masterFeedList.slice();
    newPost.userName = this.props.currentProfile;
    newList.push(newPost);
    this.setState({ masterFeedList: newList });
  }

  handleLike(oldPost) {
    var newList = this.state.masterFeedList.slice();
    var likedPost = oldPost;
    likedPost.likes++;
    var index = newList.indexOf(oldPost);
    newList[index] = likedPost;
    this.setState({ masterFeedList: newList });
  }

  handleDislike(oldPost) {
    var newList = this.state.masterFeedList.slice();
    var dislikedPost = oldPost;
    dislikedPost.dislikes++;
    var index = newList.indexOf(oldPost);
    newList[index] = dislikedPost;
    this.setState({ masterFeedList: newList });
  }

  handleDelete(oldPost) {
    var index = this.state.masterFeedList.indexOf(oldPost);
    var newList = this.state.masterFeedList.slice();
    newList.splice(index, 1);
    this.setState({ masterFeedList: newList });
  }

  handleEdit(editedContent) {
    var newList = this.state.masterFeedList.slice();
    var index = this.state.masterFeedList.indexOf(this.state.postToEdit);
    var editedPost = this.state.postToEdit
    editedPost.content = editedContent; 
    newList[index] = editedPost;
    console.log(editedPost);
    this.setState({ masterFeedList: newList, formEditVisible: false, postToEdit: null });
  }

  showEdit(oldPost) {
    this.setState({ formEditVisible: true });
    this.setState({ postToEdit: oldPost})
  }

  render() {
    let showedit = null;

    return (
      <div>
        <TimeLinePost addPost={this.handleAddingNewFeedPost} />
        <div className="test">
          {this.state.formEditVisible ? <TimeLineEditPost editContent={this.handleEdit} postToEdit={this.state.postToEdit}/> : null}
          {this.state.masterFeedList.map((feed, index) => (
            <TimeLineFeed
              userName={feed.userName} 
              content={feed.content}
              date={feed.date}
              likes={feed.likes}
              dislikes={feed.dislikes}
              key={index}
              onLikeClick={() => this.handleLike(feed)}
              onDislikeClick={() => this.handleDislike(feed)}
              onDelete={() => this.handleDelete(feed)}
              showEdit={() => this.showEdit(feed)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TimeLine;
