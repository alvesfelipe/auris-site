$('#video-present').click(function(){
    video = '<iframe src="'+ $('#video-present').attr('data-video') +'"></iframe>';
    text = '<div></div>'
    $('#first-text').replaceWith(text);
    $('#video-present').replaceWith(video);
});