$(function(){
  'use strict';
});

//timer function//
// this code provided in a Stackoverflow forum. user nhahtdh provided this response. http://stackoverflow.com/questions/6341774/keep-track-of-how-much-time-is-spent-showing-certain-elements-on-the-page.

// var start = newDate();
// var end = newDate();
//
// var elapsedMins = end - start;
//
// var seconds = Math.round (elapsedMins/1000);
// var minutes = Math.round (seconds/60);
//
// var sec = TrimSecondsMinutes (seconds);
// var mins = TrimSecondsMinutes (minutes);
//
// function TrimSecondsMinutes (elapsed); {
//     if (elapsedMins >= 60)
//     return (elapsed);
// }

// Did not work. Need to define newDate
//Realized should be 'new Date()' because date is a built in JS tool.

//Attempt 2

// $(".time-count").load(function()
// this.getTime
// $("div").append(getTime);

//
// $('.card-container').on('click',function(){
//   $('.card-face, .icon').addClass('showing');
//   // $('.icon').addClass('showing');
//
// });

var track = 0;

$('li').click (function(){
track++
if (track <= 2){
  $(this).addClass('flipped')
  $(this).children().css('opacity', '1');
  console.log(track);
  }

  // else if (track === 2) {
  // $(this).addClass('flipped')
  // $(this).children().css('opacity', '1');
  // console.log(track)
  // }
  //
  // else if ($(this).val() == ($('li').val ())){
  // $(this).removeClass('flipped')
  // $(this).addClass('permanent');

else if (track === 2 && ($(this).val() === ($('li').val()))){
  $(this).removeClass('flipped');
  $(this).addClass('permanent')

}

else{
  $(this).removeClass('flipped')
  $(this).addClass('card')
  $(this).children().css('opacity', '0');
}
});
// });
//
//
// $('li').click (function(){
//
//     if ($(this).val() == ($('li').val ()){
//     $(this).removeClass('flipped')
//     $(this).addClass('permanent');
// }
//   else {
//     $(this).removeClass('flipped');
//     $(this).childre().css('opacity', '0');
//   }
// });

var hi = 'hello'
console.log(hi);
