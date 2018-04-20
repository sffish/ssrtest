import style from '../assets/styles/index.scss';
import Head from 'next/head'
console.log(style._getCss())
const home = ()=>{
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
         </div>
         
      </div>
   )
}

export default home