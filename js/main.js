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






/*Mouvement du trajet au scroll */

gsap.to("#new-york", {

  scrollTrigger:{
    trigger: '#section4',
    //pin: true,
    start: 'top 100%',
    end: 'top 50%',
    markers : true,
    id:"trajet NY-Paris",
    toggleActions:'play none reverse reset',
    scrub:1,
    },

  motionPath:{
      path: "M287.953 955.871C167.619 914.038 -55.4475 782.671 14.9525 591.871C89.4525 444.371 179.953 403.371 233.953 367.871C380.453 308.371 264.453 172.871 214.953 194.871C156.782 220.725 154.548 305.195 201.453 338.371C221.953 352.871 329.453 367.871 438.453 367.871C547.453 367.871 756.453 274.371 771.453 257.871C786.453 241.371 906.047 198.314 968.453 194.871C1185.95 182.871 984.953 744.371 599.953 935.371C809.453 854.038 1282.05 620.771 1496.45 338.371C1764.45 -14.6288 1778.45 -15.1288 1874.45 11.8712C1970.45 38.8712 2227.95 285.371 2251.95 413.871C2289.45 338.371 2554.95 457.371 2581.45 681.871C2674.95 601.371 2996.45 906.371 3012.45 1136.87",
      align: "#new-york",
      autoRotate : true,
    },
})



/*Pin section 3*/

let st3 = ScrollTrigger.create({
  trigger: "#section3",
  pin: true,
  start: "top top",
  end: "+=800",
});





/*Scroll horizotal : apogé =>déclin */




/*Pin section 4*/
