$('#play-presentation').click(function(){
    video = '<iframe id="video-present" src="https://www.youtube.com/embed/NsOnkL8hog0?autoplay=1&showinfo=0&controls=0"></iframe>';
    text = '<div><button id="stop-presentation" class="btn btn-default btn-lg btn-block" style="float: right; top: 39vh; left: 10vw;"><i class="fa fa-stop-circle fa-3 blackiconcolor" aria-hidden="true"></i></button></div>'
    $('#first-text').replaceWith(text);
    $('#video-present').replaceWith(video);
});

$('#stop-presentation').click(function(){
    $('#video-present').remove();
    // video = '<img id="video-present" src="img/home.png" data-video="https://www.youtube.com/embed/NsOnkL8hog0?color=white&autoplay=1&showinfo=0&controls=0">';
    // text = '<div id="first-text"><h3>veja o nosso vídeo</h3><h2>auris - música para surdos</h2></div>'
    // $('#first-text').replaceWith(text);
    // $('#video-present').replaceWith(video);
});