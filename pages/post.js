import {Component} from 'react'
import ReactMarkdown from 'react-markdown' 
import {MD} from '../markdown'

class Post extends Component{
   // trouble: need to reload page to see the md content
   render(){
      const key = this.props.url.query.query
      console.log(this.props.url)
      const postobj = MD.find(mdobj=> {
         console.log(key)
         return mdobj.key==key
      })
      
      //console.log(this.props.url.query.query)
      
      return (
         <div>
            <h1>Post</h1>
            <div>{key?key:'no query'}</div>
            {key?
               <div>test
                  <ReactMarkdown source={postobj.source} />
               </div>:
               null
            }
         </div>
      );
   }
}

export default Post