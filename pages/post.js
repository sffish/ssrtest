import {Component} from 'react'
import Head from 'next/head'
import '../assets/styles/index.scss';
import ReactMarkdown from 'react-markdown' 
import {MD} from '../markdown'

class Post extends Component{
   render(){
      const key = this.props.url.query.key
      const postobj = MD.find(mdobj=> {
         return mdobj.key==key
      })
      
      return (
         <div className="container" >
            <style jsx>{  /* Unfortunately nesting is not supported by styled-jsx. */ 
               ` `
            }
            </style>
            <div className="content p-5 post">
               {key?
                  <div className={`p-5 markdown-body`}>
                     <ReactMarkdown source={postobj.source} />
                  </div>:
                  <div>Invalid post entry!</div>
               }
            </div>
         </div>
      );
   }
}

export default Post