/* GSAP Plugins */
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

/* GSAP animation - section 1 - box */
gsap.to(".imageIntro",{
    y:-75,

    delay: 1,
    duration: 1,
    

  //  document.getElementById("empreintesMaison").classList.add('disparition'),
//}
})



/*

Les times lines : 

let tl = gsap.timeline({              tl : nom de ma timeline
  repeat : -1;                         tourne en boucle, sinon on peut mettre un chiffre qui correspond au nombre de répétitions
  yoyo : true                        yoyo : pour repartir en sens inverse
})

tl.to('.nomDeLaclass', {x: 100, tagger : 0.1,})   tagger : décalage (de 1 à 10 je crois)
  .to('.nomDeLaclass', {x: -100, tagger : 0.1,})                           



Draggable : 



*/


/* Gsap Animation Timeline Patte */

let tl = gsap.timeline({
    scrollTrigger:{
      trigger : "#section5", 
      //markers : true, 
      start : "top 40%",
      end :"top 0%",
      id : "zone-section5",
      toggleActions : "play none reverse reset"               // qu'est ce que je fait quand je passe start, none tjrs, se rejout à l'inverse quand je remonte, se reset quand je quitte la section.
    }

})

     //on peut gére l'opacité aussi.






/* Draggable : 

Draggable.create("monId",{
  type: "x, y",                        dragg classique (y et x) ou on peu choisir rotate, pour tourner seulement, ou juste y ou x.
  bounds: "section1",
  dragResistance : 1           entre 0 et 1

  inertie (pro)
  cursor :wait (ou meme un pnj)

  onCLick 
  onDrag
  onDraggEnd:    ce avec quoi on fait des quizz
  }

                                     bound pour ne pas sortir d'un cadre (la section par ex)
*/

Draggable.create("#altitude",{
  type: "x,y",
  bounds: "#section3",
  cursor: 'wait',                                 //liste cursor

  onDrag: function(){
    document.getElementById('altitude').textContent ="heyyy"
  }

})


/*Responsive */


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

/*Pin de la section 3 */

let pin3 = ScrollTrigger.create({
  trigger: "#section3",
  pin: true,
  start: "top top",
  end: "+=800",
});





/*Mouvement du trajet au scroll */

gsap.to("#new-york", {

  scrollTrigger:{
    trigger: '#section3',
    start: 'top top%',
    end: '+=500',
    //markers : true,
    id:"trajet NY-Paris",
    toggleActions:'play none reverse reset',
    },

  motionPath:{
      alignOrigin: [0.1, 0.5],
      path: 'M287.953 764.894C167.619 723.06 -55.4475 591.694 14.9525 400.894C89.4525 253.394 179.953 212.394 233.953 176.894C380.453 117.394 264.453 -18.1063 214.953 3.89364C156.782 29.7473 154.548 114.217 201.453 147.394C221.953 161.894 329.453 176.894 438.453 176.894C547.453 176.894 756.453 83.3935 771.453 66.8935C786.453 50.3935 906.047 7.33671 968.453 3.89364C1185.95 -8.10647 984.953 553.393 599.953 744.393', 
      align: "#new-york",
      autoRotate : true,
    },
})

/*Scroll horizotal : apogé =>déclin */



/*Pin section 4*/
