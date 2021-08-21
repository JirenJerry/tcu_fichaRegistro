import { componentes } from "./javascript/componentes";
    funcion = ()=>{
     console.lsaog();

   }
  const UTIL = {
    
    fire : function(func,funcname, args){
    
      var namespace = componentes;  // indicate your obj literal namespace here
      console.log("FIRING ", func,funcname);
      funcname = (funcname === undefined) ? 'init' : funcname;
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
        namespace[func][funcname](args);
      }
  
    },
  
    loadEvents : function(){
  
      var bodyId = document.body.id;
      
      // hit up common first.
      UTIL.fire('common');

      // do all the classes too.
      $.each(document.body.className.split(/\s+/),function(i,classnm){
        UTIL.fire(classnm);
        UTIL.fire(classnm,bodyId);
      });
  
      UTIL.fire('common','finalize');
  
    }
  
  };
  
  // kick it all off here 
  document.addEventListener("DOMContentLoaded", function(event) {
    UTIL.loadEvents()
    
});

