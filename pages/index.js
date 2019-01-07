import {Component} from 'react';
import '../assets/styles/index.scss';
import Head from 'next/head'
import ReactMarkdown from 'react-markdown';
//import Link from 'next/link'
import {Link} from '../routes'

import {MD} from '../markdown'


const isClientOrServer = () => {
   return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

class Home extends Component {

   render(){
      const fact1 = "這是一個使用 Next.js 建置，"
      const fact2 = "並利用 Express serve 的網站。 "
      // Test by 3G network. It will display 'server' in the first, 
      // then turn into 'client' as soon as the javascript is fully loaded.
      // ref: https://blog.theodo.fr/2018/04/react-server-side-rendering/
      
      //const fact3 = `This site is rendered by ${isClientOrServer()}!`

      const fact3 = `This page is rendered by server.`
      const facts = [fact1, fact2, fact3]
      return (
         <div className="">
            <Head>
               <title>ssrtest/index</title>
               
            </Head>
            <style jsx global>
            {  /* Unfortunately nesting is not supported by styled-jsx. */ 
               ` `
            }
            </style>
            <div className="content p-5">
               
               <h1 className="text-danger">測試一下 Next.js</h1>
               {[...facts].map( (fact,i) => 
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
               <div className="sasstest">
                  <p> jsx sass block </p>
               </div>
            </div>
            
         </div>
      )
   }
}

export default Home