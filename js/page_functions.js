//logo function
$('body').on('click', '#logo-auris', function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
});

// video functions
$('body').on('click', '#play-presentation', function(){
    video = '<iframe id="video-present" src="https://www.youtube.com/embed/NsOnkL8hog0?autoplay=1&showinfo=0&controls=0&version=3&loop=1&playlist=NsOnkL8hog0"></iframe>';
    text = '<div id="first-text"><button id="stop-presentation" class="btn btn-default btn-lg btn-block"><i class="fa fa-stop-circle fa-5 iconcolor" aria-hidden="true"></i></button></div>';
    button = '<button></button>'

    $('#first-text').replaceWith(text);
    $('#video-present').replaceWith(video);
    $('#scroll-down').replaceWith(button);
});

$('body').on('click', '#stop-presentation', function(){
    $('#home').load(document.URL +  ' #home');
});

// navbar functions
var aux_nav = 0;

$('.navbar-toggle').on('click', function() {
    aux_nav = 1;
});
$('.nav a').on('click', function() {
    if (aux_nav === 1) {
        $('.navbar-toggle').click(); //bootstrap 3.x by Richard
    }
});

var i = 0, sec_sum = 0;

//scroll button functions

// jQuery.fn.extend({
//   scrollTo : function(speed, easing) {
//     return this.each(function() {
//       var targetOffset = $(this).offset().top;
//       $('html,body').animate({scrollTop: targetOffset}, speed, easing);
//     });
//   }
// });

// $('#scroll-down').click(function(e){
//     e.preventDefault();
//     var $this = $(this),
//         $next = $this.parent().next();
    
//     $next.scrollTo(400, 'linear');
// });

$("#scroll-down").click(function() {
    $('html, body').animate({scrollTop: 0}, 1500);
});

//navbar buttons functions

$("#projeto").click(function() {
    $('html, body').animate({scrollTop: $("#description").offset().top - $('#head').height()}, 1500);
    return false;
});

$("#objetivos").click(function() {
    $('html, body').animate({scrollTop: $("#objectives-auris").offset().top - $('#head').height()}, 1500);
    return false;
});

$("#experimentos").click(function() {
    $('html, body').animate({scrollTop: $("#experiments").offset().top - $('#head').height()}, 1500);
    return false;
});

$("#git").click(function() {
    $('html, body').animate({scrollTop: $("#github").offset().top - $('#head').height()}, 1500);
    return false;
});

$("#equipe").click(function() {
    $('html, body').animate({scrollTop: $("#team").offset().top - $('#head').height()}, 1500);
    return false;
});

$("#publicacoes").click(function() {
    $('html, body').animate({scrollTop: $("#publications").offset().top - $('#head').height()}, 1500);
    return false;
});

$("#parceiros").click(function() {
    $('html, body').animate({scrollTop: $("#partners").offset().top - $('#head').height()}, 1500);
    return false;
});

$("#contato").click(function() {
    $('html, body').animate({scrollTop: $("#contact").offset().top - $('#head').height()}, 1500);
    return false;
});

//button functions
$(document).ready(function(){
    $("#scroll-down").delay(1000).show(1000);
});

// $(window).scroll(function() {
//    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
//        $('#scroll').removeClass('fa-chevron-down').addClass('fa-chevron-up');
//    } else {
//         $('#scroll').removeClass('fa-chevron-up').addClass('fa-chevron-down');
//    }
// });

//carousel function
$(document).ready(function() {
   $("#carousel-experiments, carousel-publications").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#carousel-experiments, carousel-publications").swipeleft(function() {
      $(this).carousel('next');
   });
});