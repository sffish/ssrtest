var path = require('path') 
console.log(__dirname)
const _MD = (function(){
   console.log('md')
   let md = []
   function importAll (r) {
      r.keys().forEach( key=>{
         const ret= require(`./${key.replace('./','')}`)
         md.push({
            key:key.replace('./','').replace('.md',''),
            source: ret
         })
      });
   }
   importAll(require.context(__dirname+'/', true, /\.md$/));
   console.log(md)
   return md;
})();

export const MD = _MD;