/* GSAP Plugins */
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);



/* Gsap Animation Timeline Nuages */

let tlNuages = gsap.timeline({                                //tlNuage : nom de ma timeline
  repeat : -1,                                                //tourne en boucle, sinon on peut mettre un chiffre qui correspond au nombre de répétitions
  yoyo : true                                                 //yoyo : pour repartir en sens inverse
})

tlNuages.to('.nuage', {y: 5, stagger : 0.8, duration: 2, ease: "ease"})                  
        .to('.nuage', {x: 7, stagger : 0.5, duration: 1.5, ease: "ease"})
        .to('.nuage', {x: -3, stagger : 0.5, duration: 1.5, ease: "ease"})
        .to('.nuage', {y: -6, stagger : 1, duration: 2, ease: "ease"})
        .to('.nuage', {x: "random(-5, 5)", stagger : 0.2, duration: 3, ease: "ease"})          // (src : https://gsap.com/docs/v3/GSAP/Timeline/)
        .to('.nuage', {y: 4, stagger : 0.5, duration: 1, ease: "ease", delay : 1})
                                

/*
let tlNuages = gsap.timeline({
    scrollTrigger:{
      trigger : "#section5", 
      markers : true, 
      start : "top 40%",
      end :"top 0%",
      id : "animNuage",
      toggleActions : "play none reverse reset"               // qu'est ce que je fait quand je passe start, none tjrs, se rejout à l'inverse quand je remonte, se reset quand je quitte la section.
    }

})
*/




/* Draggable - Section 2 : 'element' */


Draggable.create(".element",{
  type: "x,y",
  bounds: "#section2",
  cursor: 'grab',                                 //liste cursor

 /* onDrag: function(){
    document.getElementById('altitude').textContent ="heyyy"
  }*/

})


// Rotation element

/*function rotation(){
  document.getElementById('moteurs').transform.rotate(90)
}


*/

/*Responsive */

/*
let mm = gsap.matchMedia();

mm.add({
  isMobile:"(max-width:799px)",
  isDesktop:"(min-width:800px)",
}, (context)=> {
    let { isMobile, isDesktop } = context.conditions;

    tl.to('.patte',{x: isMobile ? 30 : 100, stagger: 0.1,})
    .to('.patte',{y: isMobile ? 30 : 100, stagger: 0.1,})
    .to('.patte',{x: isMobile ? -30 : -100, stagger: 0.1,})
    .to('.patte',{y: isMobile ? -30 : 0, opacity : 0, stagger: 0.1,})   

})

*/



/*Mouvement de l'avion pour le trajet New-York - Paris au scroll */

gsap.to("#new-york", {

  scrollTrigger:{
    trigger: '#section3-4',
    start: 'top top',
    end: "+=3000",
    markers : true,
    id:"trajet NY-Paris",
    toggleActions:'play none reverse reset',
    scrub:1,
    inertia : false
    },

  motionPath:{
    path : "M192.631 637.819C112.341 609.927 -36.4963 522.34 10.4768 395.125C60.1856 296.781 120.57 269.444 156.6 245.775C254.35 206.104 176.951 115.76 143.923 130.429C105.11 147.666 103.619 203.986 134.915 226.106C148.594 235.774 220.321 245.775 293.049 245.775C365.778 245.775 505.229 183.434 515.237 172.433C525.246 161.432 605.043 132.724 646.682 130.429C791.805 122.428 657.691 496.803 400.807 624.151C540.592 569.923 855.926 414.394 998.98 226.106C1177.8 -9.25394 1187.14 -9.58731 1251.19 8.41472C1315.25 26.4168 1487.06 190.769 1503.07 276.445C1528.09 226.106 1705.24 305.448 1722.93 455.132C1785.31 401.459 1999.83 604.815 2010.5 758.5",
    align: "#new-york",
      autoRotate : false,
    },
})



/*Pin section 3*/

/*let st3 = ScrollTrigger.create({
  trigger: "#section3",
  pin: true,
  start: "top top",
  end: "+=1000",

});
*/




/*Scroll horizotal : apogé =>déclin */


const sections = gsap.utils.toArray("#section3-4 > div");

gsap.to(sections, {
  
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#section3-4",
    pin: true,
    scrub: 1,
    end: "+=2000",
    //markers: true,
  }
});



/* ESSAI - NE FONCTIONNE PAS 
objectif : Dans la section 2, automatiser le changement de taille des pièces en fonction de la taille donnée au prototype 


// 1) Trouver la valeur de référence (ici celle de l'image "assemblage__maquette") 

  const prototype = document.getElementById('assemblage__maquette'); // chercher l'élément ciblé
  const style = window.getComputedStyle(prototype, null); // prendre les propriétés css de cet élement (src : https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp)
  const minHeight = style.getPropertyValue('min-height'); // ressortir l'information déclaré pour "min-heigt" dans le css  (src : https://stackoverflow.com/questions/56586320/is-there-a-difference-between-getpropertyvalue-and-the-bracket-notation-for)
  var ref = parseInt(minHeight);  // convertir l'écriture texte en nombre (src : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
  

function tailleRef(){

  console.log(ref);
  console.log(147.39/(996.24/ref)); // hauteur d'un element divisé par coeff de proportionnalité (hauteur réel de l'image / hauteur demandé dans le css)

}

  // 2) Chercher la taille de chaque "element"

  const parties = document.getElementsByClassName('element'); // chercher tous les 'element'
  const style__parties = window.getComputedStyle(parties, null); // prendre la propriétés css de la class 'element' (src : https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp)
  const minHeight__parties = style__parties.getPropertyValue('min-height'); // ressortir l'information déclaré pour "min-heigt" dans le css  (src : https://stackoverflow.com/questions/56586320/is-there-a-difference-between-getpropertyvalue-and-the-bracket-notation-for)
  var heightB = parseInt(minHeight__parties); // convertir l'écriture texte en nombre (src : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt)


function newHeight(){
  document.getElementsByClassName('element').style.minHeight = heightB/(996.24/ref) + "px";

  console.log('la taille est de '+ heightB/(996.24/ref) + 'px' );
}

*/


// 2) 





function turn(){
  document.getElementsByClassName('element').element.classList.add(tourner);
}


/* Draggable - section 5 */


const zones = document.getElementsByClassName('rep');


Draggable.create(".petitCoupon",{
  type: "x,y",
  bounds: "#section5",
  cursor: 'grab',
  bounds: "#section5",

  onDragEnd : function(){
    if (this.target.id === 'coupon1' && this.hitTest(carte1, "20")){                              // Ici, 'This' fait référence à l'object draggé (src: https://www.codeheroes.fr/2018/01/10/javascript-le-mot-cle-this/)
      document.getElementById('coupon1').classList.remove ('faux'),
      document.getElementById('grandCoupon1').classList.add ('valide'),   
      document.getElementById('coupon1').classList.add ('valide'), 
      console.log('cest bien la 1');
      sonValide.play();

    } else if (this.target.id === 'coupon2' && this.hitTest(carte2, "20")){
        document.getElementById('coupon2').classList.remove ('faux'),
        document.getElementById('grandCoupon2').classList.add ('valide'),   
        document.getElementById('coupon2').classList.add ('valide'), 
        console.log('cest bien la 2');
        sonValide.play();
        
    } else if (this.target.id === 'coupon3' && this.hitTest(carte3, "20")){
        document.getElementById('coupon3').classList.remove ('faux'),
        document.getElementById('grandCoupon3').classList.add ('valide'),   
        document.getElementById('coupon3').classList.add ('valide'), 
        console.log('cest la 3');
        sonValide.play();
      }

       else{
        document.getElementById(this.target.id).classList.add ('faux')
      }

  }
  
})

const sonValide = document.getElementById('validationSound')
sonValide.volume ='0.2'                                               //https://notes-de-cours.com/web/blogue/65/jouer-du-son-et-le-controler-en-javascript
