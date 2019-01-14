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


const SITE={
   NAME:<div>
      <p className="h1">Negligible</p><p className="h1">Matters</p>
      </div>, 
   LOCAL_NAME:'SFF的文字基地',
   LOGO: <div className="logo dib">
      <div className="circle">
         <div className="line">貓不</div>
         <div className="line">理我</div>
      </div>
   </div>, 
   NOTE:<div>
      <p>This site is built with <strong>Next.js.</strong></p>
      <p>It’s rendered on server!</p>
   </div>
}

class Home extends Component {

   renderPosts(){
      const n = MD && MD.length ? ( MD.length % 3 === 0 ? MD.length :  MD.length + 3 - MD.length % 3 ) : 0    
      
      const renderPostGrid = ( _index ) => {
         const is_dummy = _index > MD.length - 1
         const postobj = is_dummy ? null : MD[_index]
         
         return <div className="grid" key={_index}>
            <div className="g-text">
               {is_dummy ? 
                  <br/ >
                  :
                  <Link route='post' params={{key:postobj.key}} >
                     <a>{postobj.key}</a>
                  </Link>
               }
            </div>
            <div className="g-rectpic">
               <div className={ is_dummy ?'g-fill':'g-mask' }></div>
            </div>
            <div className={`g-tenten-${_index+1}`}></div>
         </div>
      }

      return <div className="postgrid-container">
         {
            Array.apply(null, { length:n }).map( ( _ ,index)=>{
               return renderPostGrid(index)
            })
         }
      </div>
   }

   renderBanner(){
      return <div className="banner-container">
         {/* Desktop */}
         <div className="top">
            <a href="https://github.com/sffish/ssrtest" target="_blank">
               <FontAwesomeIcon icon={['fab', 'github']}/> <span> github project page</span>
            </a>
         </div>
         <div id="tenten"></div>
         
         <div className="title-box flex-row">
            <div className="title">
               {SITE.NAME}
            </div>
            
            <div className="flex-row">
               <div className="title-local dib">
                  {SITE.LOGO}
                  <div className="separator-vertical dib"></div>
                  <div className="name dib">{SITE.LOCAL_NAME}</div>
               </div>

               <div className="note dib">
                  {SITE.NOTE}
               </div>
            </div>
         </div>
      </div>   
      
   }
   
   render(){
      const fact1 = "這是一個使用 Next.js 建置，"
      const fact2 = "並利用 Express serve 的網站。 "

      const fact3 = `This page is rendered by server.`
      const facts = [fact1, fact2, fact3]
      return (
         <div className="__wrapper__">
            <Head>
               <title>ssrtest/index</title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <style jsx global>
            {  /* Unfortunately nesting is not supported by styled-jsx. */ 
               ` `
            }
            </style>
            {/* Banner Container */}
            {this.renderBanner()}
            {/* Container */} 
            <div className="body-container">
               
                  <div className="pad-top"></div>
                  {this.renderPosts()}
               
            </div>
            <footer>
               <div className="row mb-2">
                  <div className="separator-footer dib"></div>
               </div>
               <div className="row">
                  <div className="copyright dib">Copyright © 2019 SFFISH. All rights reserved</div>
               </div>
            </footer>   
         </div>
      )
   }
}

export default Home