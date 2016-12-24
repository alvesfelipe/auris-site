$('#play-presentation').click(function(){
    video = '<iframe id="video-present" src="https://www.youtube.com/embed/NsOnkL8hog0?autoplay=1&showinfo=0&controls=0"></iframe>';
    text = '<div id="first-text"><button id="stop-presentation" class="btn btn-default btn-lg btn-block"><i class="fa fa-stop-circle fa-5 iconcolor" aria-hidden="true"></i></button></div>';
    
    $('#first-text').replaceWith(text);
    $('#video-present').replaceWith(video);
});

$('body').on('click', '#stop-presentation', function(){
    location.href = 'http://192.168.0.8:8080';
});
