var path = require('path') 
const _MD = (function(){
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
   return md;
})();

export const MD = _MD;