import {Component} from 'react'
import ReactMarkdown from 'react-markdown' 
import {MD} from '../markdown'

class Post extends Component{
   // trouble: need to reload page to see the md content
   render(){
      const key = this.props.url.query.key
      console.log(this.props.url)
      const postobj = MD.find(mdobj=> {
         console.log(key)
         return mdobj.key==key
      })
      
      return (
         <div>
            <h1>Post {key}</h1>
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