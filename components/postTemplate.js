import React from 'react'
import ReactMarkdown from 'react-markdown';

class PostTemplate extends React.Component{
   render(){
      <div className="post">
         <ReactMarkdown source={this.props.source} />
      </div>
   }
}

export default PostTemplate