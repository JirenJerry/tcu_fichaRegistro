import { FirebaseINIT } from "./firebaseInit";
import { scriptsLoader } from "./scriptsLoader";
import { linksLoader } from "./linksLoader";

export const COMMON = {
  init: async () => {
    let listaDeScripts = [
      "https://code.jquery.com/jquery-3.6.0.slim.min.js",
      "https://cdn.jsdelivr.net/npm/fullcalendar/main.js",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js",
      "https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js",
      "https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js",
      "https://www.gstatic.com/firebasejs/8.6.7/firebase-firestore.js",
    
    ];

    let listaDeLinks = [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css",
      "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css",
      "https://cdn.jsdelivr.net/npm/fullcalendar/main.css",
      "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.css",
    ];

    let promises = [];



    listaDeLinks.map(async (element) => {
      linksLoader.loaded = new Set();
    
      promises.push(linksLoader([element]));
    });

    listaDeScripts.map(async (element) => {
 
      scriptsLoader.loaded = new Set();
      promises.push(scriptsLoader([element]));
    });

    await Promise.all(promises).then(
      (result) => {
         scriptsLoader.loaded = new Set();
        scriptsLoader(  "https://cdn.jsdelivr.net/npm/fullcalendar/locales/es.js")
      },
      (error) => {
        console.log(error,"Error al cargar algo")
      }
    );
    // Now do stuff with those scripts.
    console.log("LOADING FIRESTORE");
    FirebaseINIT();
    console.log("FINISH COMMON");
  },
};
