$('#play-presentation').click(function(){
    video = '<iframe src="'+ $('#video-present').attr('data-video') +'"></iframe>';
    text = '<div><button id="play-presentation" class="btn btn-default btn-lg btn-block" style="float: right; top: 39vh;"><i class="fa fa-stop-circle fa-4x blackiconcolor" aria-hidden="true"></i></button></div>'
    $('#first-text').replaceWith(text);
    $('#video-present').replaceWith(video);
});