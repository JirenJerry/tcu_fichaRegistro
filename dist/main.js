(()=>{"use strict";const e={common:{init:(()=>{let e=document.createElement("script");e.setAttribute("src","https://code.jquery.com/jquery-3.6.0.slim.min.js"),e.setAttribute("integrity","sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="),e.setAttribute("crossorigin","anonymous"),document.head.prepend(e);let t=document.createElement("script");t.setAttribute("src","https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"),t.setAttribute("integrity","sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"),t.setAttribute("crossorigin","anonymous"),document.head.prepend(t);let i=document.createElement("script");i.setAttribute("src","https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"),document.head.prepend(i);let n=document.createElement("script");n.setAttribute("src","https://www.gstatic.com/firebasejs/8.6.7/firebase-firestore.js"),document.head.prepend(n);let s=document.createElement("script");s.setAttribute("src","https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"),document.head.prepend(s),setTimeout((()=>{firebase.initializeApp({apiKey:"AIzaSyAgg0nJjChQ2R7TrmiRKT-wGcCVGM5ct7Y",authDomain:"tcu-374-486-7712e.firebaseapp.com",projectId:"tcu-374-486-7712e",storageBucket:"tcu-374-486-7712e.appspot.com",messagingSenderId:"725202363337",appId:"1:725202363337:web:74d3e3d1da770c0f0e7e18"})}),3e3),console.log("DONE")})(),finalize:function(){}},shopping:{init:function(){},cart:function(){},category:function(){}}},t={fire:function(t,i,n){var s=e;console.log("FIRING ",i),i=void 0===i?"init":i,""!==t&&s[t]&&"function"==typeof s[t][i]&&s[t][i](n)},loadEvents:function(){var e=document.body.id;t.fire("common"),$.each(document.body.className.split(/\s+/),(function(i,n){t.fire(n),t.fire(n,e)})),t.fire("common","finalize")}};document.addEventListener("DOMContentLoaded",(function(e){t.loadEvents(),console.log("DONE")}))})();