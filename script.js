



// code starts for slider

var right= document.getElementById("right");
var left = document.getElementById("left");

var wrapper =document.getElementById("wrapper");

right.addEventListener('click',() => {
    wrapper.style.left="-100%";
    right.style.display="none";
    left.style.display="block";

  
});


left.addEventListener('click',() => {
  wrapper.style.left="0";
  right.style.display="block";
  left.style.display="none";
})

// code ends for slider


// code for best of entertianment section start here
    var best_ent_left = document.getElementById("best-ent-left");
    var best_ent_right = document.getElementById("best-ent-right");

    var best_ent_slider = document.getElementById("best-ent-slider");

    best_ent_right.addEventListener('click',()=>{
      best_ent_slider.style.left="-103%";
      best_ent_right.style.display="none";
      best_ent_left.style.display="block";
    })

    best_ent_left.addEventListener('click',()=>{
      best_ent_slider.style.left="0";
      best_ent_right.style.display="block";
      best_ent_left.style.display="none";
    })
// code for best of entertainment section end here


// premiere slider code starts here
var premiere_slider_left_btn = document.getElementById("premiere-slider-left-btn");
var premiere_slider_right_btn = document.getElementById("premiere-slider-right-btn");

var premiere_slider = document.getElementById("premiere-slider");

premiere_slider_right_btn.addEventListener('click',()=>{
  premiere_slider.style.left="-61%";
  premiere_slider_right_btn.style.display="none";
  premiere_slider_left_btn.style.display="block";
})

premiere_slider_left_btn.addEventListener('click',()=>{
  premiere_slider.style.left="0";
  premiere_slider_right_btn.style.display="block";
  premiere_slider_left_btn.style.display="none";
})

//premiere slider code ends here


//Events happening near you section code starts here
var events_slider_left_btn = document.getElementById("events-slider-left-btn");
var events_slider_right_btn = document.getElementById("events-slider-right-btn");

var events_slider = document.getElementById("events-slider");

events_slider_right_btn.addEventListener('click',()=>{
  events_slider.style.left="-61%";
  events_slider_right_btn.style.display="none";
  events_slider_left_btn.style.display="block";
})

events_slider_left_btn.addEventListener('click',()=>{
  events_slider.style.left="0";
  events_slider_right_btn.style.display="block";
  events_slider_left_btn.style.display="none";
})
//Events happening near you section code ends here

//online straming events section code starts here

var online_events_slider_left_btn = document.getElementById("online-events-slider-left-btn");
var online_events_slider_right_btn = document.getElementById("online-events-slider-right-btn");

var online_events_slider = document.getElementById("online-events-slider");

online_events_slider_right_btn.addEventListener('click',()=>{
  online_events_slider.style.left="-61%";
  online_events_slider_right_btn.style.display="none";
  online_events_slider_left_btn.style.display="block";
})

online_events_slider_left_btn.addEventListener('click',()=>{
  online_events_slider.style.left="0";
  online_events_slider_right_btn.style.display="block";
  online_events_slider_left_btn.style.display="none";
})


//online streaming events section code ends here

// outdoor events section code starts here
var outdoor_events_slider_left_btn = document.getElementById("outdoor-events-slider-left-btn");
var outdoor_events_slider_right_btn = document.getElementById("outdoor-events-slider-right-btn");

var outdoor_events_slider = document.getElementById("outdoor-events-slider");

outdoor_events_slider_right_btn.addEventListener('click',()=>{
  outdoor_events_slider.style.left="-61%";
  outdoor_events_slider_right_btn.style.display="none";
  outdoor_events_slider_left_btn.style.display="block";
})

outdoor_events_slider_left_btn.addEventListener('click',()=>{
  outdoor_events_slider.style.left="0";
  outdoor_events_slider_right_btn.style.display="block";
  outdoor_events_slider_left_btn.style.display="none";
})



// outdoor events section ends here

// Laughter Therapy section styling starts here
var laughter_slider_left_btn = document.getElementById("laughter-slider-left-btn");
var laughter_slider_right_btn = document.getElementById("laughter-slider-right-btn");

var laughter_slider = document.getElementById("laughter-slider");

laughter_slider_right_btn.addEventListener('click',()=>{
  laughter_slider.style.left="-61%";
  laughter_slider_right_btn.style.display="none";
  laughter_slider_left_btn.style.display="block";
})

laughter_slider_left_btn.addEventListener('click',()=>{
  laughter_slider.style.left="0";
  laughter_slider_right_btn.style.display="block";
  laughter_slider_left_btn.style.display="none";
})
// Laughter Therapy section styling ends here

// popular events section code start here
var popular_events_slider_left_btn = document.getElementById("popular-events-slider-left-btn");
var popular_events_slider_right_btn = document.getElementById("popular-events-slider-right-btn");

var popular_events_slider = document.getElementById("popular-events-slider");

popular_events_slider_right_btn.addEventListener('click',()=>{
  popular_events_slider.style.left="-61%";
  popular_events_slider_right_btn.style.display="none";
  popular_events_slider_left_btn.style.display="block";
})

popular_events_slider_left_btn.addEventListener('click',()=>{
  popular_events_slider.style.left="0";
  popular_events_slider_right_btn.style.display="block";
  popular_events_slider_left_btn.style.display="none";
})
// popular events section code ends here

//Latest Plays section code starts here
var latest_plays_slider_left_btn = document.getElementById("latest-plays-slider-left-btn");
var latest_plays_slider_right_btn = document.getElementById("latest-plays-slider-right-btn");

var latest_plays_slider = document.getElementById("latest-plays-slider");

latest_plays_slider_right_btn.addEventListener('click',()=>{
  latest_plays_slider.style.left="-61%";
  latest_plays_slider_right_btn.style.display="none";
  latest_plays_slider_left_btn.style.display="block";
})

latest_plays_slider_left_btn.addEventListener('click',()=>{
  latest_plays_slider.style.left="0";
  latest_plays_slider_right_btn.style.display="block";
  latest_plays_slider_left_btn.style.display="none";
})

//Latest plays section code ends here

// Top Games and Sports section code starts here
var top_games_slider_left_btn = document.getElementById("top-games-slider-left-btn");
var top_games_slider_right_btn = document.getElementById("top-games-slider-right-btn");

var top_games_slider = document.getElementById("top-games-slider");

top_games_slider_right_btn.addEventListener('click',()=>{
  top_games_slider.style.left="-61%";
  top_games_slider_right_btn.style.display="none";
  top_games_slider_left_btn.style.display="block";
})

top_games_slider_left_btn.addEventListener('click',()=>{
  top_games_slider.style.left="0";
  top_games_slider_right_btn.style.display="block";
  top_games_slider_left_btn.style.display="none";
})
// Top Games and Sports section code ends here

// explore fun Activities section code starts here
var explore_slider_left_btn = document.getElementById("explore-slider-left-btn");
var explore_slider_right_btn = document.getElementById("explore-slider-right-btn");

var explore_slider = document.getElementById("explore-slider");

explore_slider_right_btn.addEventListener('click',()=>{
  explore_slider.style.left="-61%";
  explore_slider_right_btn.style.display="none";
  explore_slider_left_btn.style.display="block";
})

explore_slider_left_btn.addEventListener('click',()=>{
  explore_slider.style.left="0";
  explore_slider_right_btn.style.display="block";
  explore_slider_left_btn.style.display="none";
})
// explore fun activites section code ends here