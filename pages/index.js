import {Component} from 'react';
import style from '../assets/styles/index.scss';
import Head from 'next/head'
import ReactMarkdown from 'react-markdown';
//import Link from 'next/link'
import {Link} from '../routes'

import {MD} from '../markdown'



class Home extends Component {

   render(){
      const facts = ['fact1', 'fact2', 'fact3']
      return (
         <div className="">
            <Head>
               <title>ssrtest/index</title>
               
            </Head>
            <style jsx global>
            {`
               
               ${style._getCss()}
               hr{ border-top:1px solid #333;}
               
            `}
            </style>
            <div className="content">
               
               <h1 className="text-danger">
               hello next.js
               </h1>
               {[...facts,'end'].map( (fact,i) => 
                  <h5 key={i}> 
                     {fact}
                  </h5>
               )}
               <hr />
               <div className="post-list">
                  <ul>
                     {MD.map( (postobj,i)=>
                        <li key={i}>
                           <Link route='post' params={{key:postobj.key}} >
                           <a>{postobj.key}</a>
                           </Link>
                        </li> 
                     )}
                  </ul>
               </div>
            </div>
            
         </div>
      )
   }
}

export default Home