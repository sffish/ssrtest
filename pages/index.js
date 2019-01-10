import {Component} from 'react';
import '../assets/styles/index.scss';


import Head from 'next/head'
import ReactMarkdown from 'react-markdown';
//import Link from 'next/link'
import {Link} from '../routes'

import {MD} from '../markdown'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub)

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
         <div className="__wrapper__">
            <Head>
                  <title>ssrtest/index</title>
               </Head>
            <style jsx global>
            {  /* Unfortunately nesting is not supported by styled-jsx. */ 
               ` `
            }
            </style>
            {/* Banner Container */}
            <div className="banner-container">
               <div className="top">
                  <a href="https://github.com/sffish/ssrtest" target="_blank">
                     <FontAwesomeIcon icon={['fab', 'github']}/> <span> github project page</span>
                  </a>
               </div>
               <div id="tenten"></div>
               
               <div className="title-box flex-row">
                  <div className="title">
                     <p className="h1">Negligible</p>
                     <p className="h1">Matters</p>
                  </div>
                  
                  <div className="flex-row">
                     <div className="title-local dib">
                        <div className="logo dib"><div className="circle">
                           <div className="line">貓不</div>
                           <div className="line">理我</div>
                        </div>
                        </div>
                        <div className="separator-vertical dib"></div>
                        <div className="name dib">SFF的廢文基地</div>
                     </div>

                     <div className="note dib">
                        <p>This site is built with <strong>Next.js.</strong></p>
                        <p>It’s rendered on server!</p>
                     </div>
                  </div>
               </div> 
            </div> 
            {/* Container */} 
            <div className="container">
               <div className=" content p-5">
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
         </div>
      )
   }
}

export default Home