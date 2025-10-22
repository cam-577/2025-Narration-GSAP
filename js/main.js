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

tl.to('.patte',{x:100, stagger: 0.1,})
.to('.patte',{y:100, stagger: 0.1,})
.to('.patte',{x:-100, stagger: 0.1,})
.to('.patte',{y:0, opacity : 0, stagger: 0.1,}),         //on peut gére l'opacité aussi.






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

