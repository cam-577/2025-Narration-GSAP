/* GSAP Plugins */
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);              //implémenter des plugins



/* Draggable - Section2 : .element */

Draggable.create(".element",{         // création d'élément draggable, ici ce sont les .element
  type: "x,y",                        // on pourra les bouger dans toutes les directions
  bounds: "#section2",                //les .element ne pourront pas être sortis de la section2
  cursor: 'grab',                     //le curseur change en 'grab' lors du survole des .element

})



/* Timeline - Section3 : .nuage */

let tlNuages = gsap.timeline({       // définir la timeline tlNuage 
  repeat : -1,                       // tourne en boucle
  yoyo : true                        // pour repartir en sens inverse
})

tlNuages.to('.nuage', {y: 8, stagger : 0.8, duration: 2, ease: "ease", delay : 1})   //on demande aux .nuage de monter (y) de 8px pendant 2 secondes avec l'effet 'ease', les 2 nuages ont 0.8s de décalage, l'animation attend 1s avant de se répéter
        .to('.nuage', {x: 10, stagger : 0.5, duration: 1.5, ease: "ease"})
        .to('.nuage', {x: -6, stagger : 0.5, duration: 1.5, ease: "ease"})
        .to('.nuage', {y: -12, stagger : 1, duration: 2, ease: "ease"})
        .to('.nuage', {x: -4, stagger : 0.7, duration: 0.5, ease: "ease"})
        .to('.nuage', {y: -6, stagger : 0.2, duration: 0.5, ease: "ease"})          
        .to('.nuage', {y: 10, stagger : 0.5, duration: 1, ease: "ease"})
                      
        

/* GSAP.to / ScrollTrigger / MotionPath - Section3-4 : mouvement de l'avion (#new-york) */

gsap.to("#new-york", {                // création d'un gsap.to pour changer l'emplacement d'un élément, ici #new-york.

  scrollTrigger:{                     // au scroll
    trigger: '#section3-4',           // sur la section3-4
    start: 'top top',                 // dès que la section apparait en entière
    end: "+=1200",                    // pendant 2000px de scroll
    //markers : true,
    id:"trajet NY-Paris",
    toggleActions:'play none reverse reset',     // quand start est ok l'animation se joue, pendant que l'animation se joue il ne se passe rien, l'animation se rejoue à l'inverse quand on remonte, l'animation se reset quand je quitte la section.
    scrub:1,                                     // l'animation se relie au scroll avec un delay de 1s qui adoucit l'animation                           
    },

  motionPath:{                        // une courbe indiquée par des coordonnées (ci-dessous)
    path : "M217.034 630.317C136.744 602.425 -37.5672 569.711 9.40593 442.496C59.1147 344.152 189.376 317.008 225.406 293.339C323.155 253.668 281.62 163.324 248.592 177.993C209.778 195.23 208.288 251.55 239.584 273.67C253.262 283.338 324.99 293.339 397.718 293.339C470.446 293.339 609.898 230.998 619.906 219.997C629.914 208.996 709.712 180.288 751.351 177.993C896.473 169.992 662.79 502.969 405.906 630.317C545.691 576.089 860.452 389.291 1003.51 201.002C1155.08 1.4998 1265.01 1.5003 1330.01 1.50015",
    align: "#new-york",               // de début de la courbe s'aligne à l'emplacement de #new-york
      autoRotate : false,             // #new-yotk reste dans la même position, ne tourne pas en fonction de la courbe
    },
})



/* GSAP.to / ScrollTrigger - Section3-4 : Scroll horizotal */

const sections = gsap.utils.toArray("#section3-4 > div");   // prendre tous les élément <div> de la #section3-4, et les mettres en tableau (src : Julien Saouas et Fiora Meloni https://m.youtube.com/watch?v=QlApLiVlLAw )

gsap.to(sections, {                    // création d'un gsap.to pour changer l'emplacement d'un élément, ici la constante 'sections'.
  
  xPercent: "-100",                    // déplacement horizontal de 100 vw vers la gauche
  ease: "power1.out",                  // animation du défilement (src : https://gsap.com/docs/v3/Eases/)
  scrollTrigger: {                     // au scroll
    trigger: "#section3-4",            // sur la section3-4
    pin: true,                         // on fixe la section3-4 le temps de l'animation au scroll
    scrub: 1,                          // l'animation se relie au scroll avec un delay de 1s qui adoucit l'animation  
    end: "+=2000",                     // l'animation s'étale sur 2000px de scroll vertical
    //markers: true,
  }
});



/* Draggable - section 5 */

const sonValide = document.getElementById('validationSound')          // la constante 'sonValide' va chercher l'élément .validationSound
sonValide.volume ='0.2'                                               // modifier le volume de base de l'audio (src : https://notes-de-cours.com/web/blogue/65/jouer-du-son-et-le-controler-en-javascript)

const zones = document.getElementsByClassName('rep');                 // la constante 'zones' va chercher les éléments .rep

let valides = 0;                                                      // on initialise la valiable 'valide' à 0


Draggable.create(".petitCoupon",{              // création d'élément draggable, ici ce sont les .petitCoupon
  type: "x,y",                                 // mouvements possible dans toutes les directions
  bounds: "#section5",                         // les .petitCoupon ne pourront pas sortir de la #section5
  cursor: 'grab',                              // au survol, le curseur passe en 'grab'

  onDragEnd : function(){                                                                 // création d'une fonction qui se joue à la fin du drag        
    if (this.target.id === 'coupon1' && this.hitTest(carte1, "20")){                      // ajout des conditions. 'this' fait référence à l'object draggé (src: https://www.codeheroes.fr/2018/01/10/javascript-le-mot-cle-this/), hitTest permet de gérer les collisions entres éléments (src: https://gsap.com/docs/v3/Plugins/Draggable/static.hitTest()/), "20" pour a distance à laquelle les objets sont en collision, soit 20px.
      valides++,                                                                          // ajouter 1 à 'valides' 
      
      document.getElementById('grandCoupon1').classList.add ('valide'),                   // ajouter .valide à #grandCoupon1
      document.getElementById('coupon1').classList.add ('valide'),                        // ajouter .valide à #coupon1
      //console.log(valides);
      bravo();                                                                            // jouer la fonction bravo()
      sonValide.play();                                                                   // jouer sonValide

    } else if (this.target.id === 'coupon2' && this.hitTest(carte2, "20")){                
        valides++,
        document.getElementById('grandCoupon2').classList.add ('valide'),   
        document.getElementById('coupon2').classList.add ('valide'),                      // même code que le précédent avec #grandCoupon2 et #coupon2
        //console.log(valides);
        bravo();
        sonValide.play();
        
    } else if (this.target.id === 'coupon3' && this.hitTest(carte3, "20")){
        valides++,
        document.getElementById('grandCoupon3').classList.add ('valide'),   
        document.getElementById('coupon3').classList.add ('valide'),                      // même code que le précédent avec #grandCoupon3 et #coupon3
        //console.log(valides);
        bravo();
        sonValide.play();



      }else if (this.target.id === 'coupon1' && this.hitTest(quizz, "20")){               // si je grag #coupon1 et que je suis en collision avec #quizz alors
        valides--                                                                         // enlever 1 à 'valide'
        document.getElementById('grandCoupon1').classList.remove ('valide')               // enlever .valide à #grandCoupon1
        document.getElementById('coupon1').classList.remove ('valide')                    // enlever .valide à #coupon1
        //console.log(valides);
        bravo();                                                                          // jouer la fonction bravo()

      }else if (this.target.id === 'coupon2' && this.hitTest(quizz, "20")){
        valides--
        document.getElementById('grandCoupon2').classList.remove ('valide')               // même code que le précédent avec #grandCoupon2 et #coupon2
        document.getElementById('coupon2').classList.remove ('valide')
        //console.log(valides);
        bravo()

      }else if (this.target.id === 'coupon3' && this.hitTest(quizz, "20")){
        valides--
        document.getElementById('grandCoupon3').classList.remove ('valide')
        document.getElementById('coupon3').classList.remove ('valide')                    // même code que le précédent avec #grandCoupon3 et #coupon3
        //console.log(valides);
        bravo()

      }
  }
})



/* Validation du quizz */                        

function bravo(){                                                  // initialisation de la fonction bravo()
  if (valides === 3) {                                             // si 'valide' est égal à 3 alors
    document.getElementById('bravoCard').style.opacity = 1;        // on passe l'opacité de #bravoCard à 1
  } else                                                           // sinon
    document.getElementById('bravoCard').style.opacity = 0;        // on passe l'opacité à 0
}




/*Responsive ****************************************/

/* matchMedia */

let mm = gsap.matchMedia();                                        // création de la constante 'mm' qu'on définit comme matchMedia()

mm.add ({                                                          // définition de 'mm'
  isMobile : "(max-width: 799px)",                                 
  isDesktop : "(min-width: 800px)",                                // 2 conditions sont créées
}, (contexte) => {                                                 // choisit automatiquement laquelle de scondition est vrai pour chaque animation mise en-dessous
  let { isMobile, isDesktop } = contexte.conditions;               // si la largeur est plus gronde ou égale à 800px, on est en desktop et si la largeur est plus petite ou égale à 799px, on est en mobile

  /* GSAP.to - section1 : flèche*/

gsap.to('#fleche', {                // on met en mouvement #flèche
  y : isMobile? 10 : 30,            // si on est en mobile y:10, sinon y:30
  ease : 'sine.in',                 // animation du défilement (src : https://gsap.com/docs/v3/Eases/)
  duration :0.5,                    // l'animation dur 0.5s
  repeat : -1,                      // infini
  yoyo : true                       // l'animation fait l'aller-retour
})

})


/* ESSAIS - NE FONCTIONNENT PAS ****************************************************************************************************************************************



OBJECTIF : Dans la section 2, automatiser le changement de taille des pièces (.element) en fonction de la taille donnée au prototype (#assemblage__maquette).


  1) Trouver la valeur de référence (ici celle de l'image "assemblage__maquette") 

  const prototype = document.getElementById('assemblage__maquette');            // chercher l'élément ciblé
  const style = window.getComputedStyle(prototype, null);                       // prendre les propriétés css de cet élement (src : https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp)
  const minHeight = style.getPropertyValue('min-height');                       // ressortir l'information déclaré pour "min-heigt" dans le css  (src : https://stackoverflow.com/questions/56586320/is-there-a-difference-between-getpropertyvalue-and-the-bracket-notation-for)
  var ref = parseInt(minHeight);                                                // convertir l'écriture texte en nombre (src : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
  

function tailleRef(){

  console.log(ref);
  console.log(147.39/(996.24/ref));            // hauteur d'un element divisé par coeff de proportionnalité (hauteur réel de l'image / hauteur demandé dans le css)

}

  2) Chercher la taille de chaque "element"

  const parties = document.getElementsByClassName('element');                   // chercher tous les 'element'
  const style__parties = window.getComputedStyle(parties, null);                // prendre la propriétés css de la class 'element' (src : https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp)
  const minHeight__parties = style__parties.getPropertyValue('min-height');     // ressortir l'information déclaré pour "min-heigt" dans le css  (src : https://stackoverflow.com/questions/56586320/is-there-a-difference-between-getpropertyvalue-and-the-bracket-notation-for)
  var heightB = parseInt(minHeight__parties);                                   // convertir l'écriture texte en nombre (src : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt)


function newHeight(){
  document.getElementsByClassName('element').style.minHeight = heightB/(996.24/ref) + "px";
  console.log('la taille est de '+ heightB/(996.24/ref) + 'px' );
}


*/