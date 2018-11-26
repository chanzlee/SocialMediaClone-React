import React from "react";
import TimeLinePost from "./TimeLinePost";
import TimeLineFeed from "./TimeLineFeed";

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  handleAddingNewFeedPost(newPost) {
    var newList = this.state.masterFeedList.slice();
    newList.push(newPost);
    this.setState({ masterFeedList: newList });
  }

  handleLike(newPost) {
      console.log(newPost);
      var newList = this.state.masterFeedList.slice();
      var likedPost = newPost;
      likedPost.likes++;
      var index = newList.indexOf(newPost);
      newList[index] = likedPost;
      this.setState({ masterFeedList: newList});
  }

  render() {
    return (
      <div>
        <TimeLinePost addPost={this.handleAddingNewFeedPost}/>
        <div className="test">
          {this.state.masterFeedList.map((feed, index) => (
            <TimeLineFeed
              userName={feed.userName}
              content={feed.content}
              date={feed.date}
              likes={feed.likes}
              dislikes={feed.dislikes}
              key={index}
              onLikeClick={() => this.handleLike(feed)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TimeLine;
