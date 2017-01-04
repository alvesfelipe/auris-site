$('#play-presentation').click(function(){
    video = '<iframe id="video-present" src="https://www.youtube.com/embed/NsOnkL8hog0?autoplay=1&showinfo=0&controls=0"></iframe>';
    text = '<div id="first-text"><button id="stop-presentation" class="btn btn-default btn-lg btn-block"><i class="fa fa-stop-circle fa-5 iconcolor" aria-hidden="true"></i></button></div>';
    button = '<button></button>'

    $('#first-text').replaceWith(text);
    $('#video-present').replaceWith(video);
    $('#scroll-down').replaceWith(button);
});

$('body').on('click', '#stop-presentation', function(){
    location.href = 'https://alvesfelipe.github.io/auris-site/';
});

var i = 0, sec_sum = 0;
var sections = [($('#home').height() - $('#head').height()), 
                ($('#description').height()),
                ($('#objectives-auris').height()),
                ($('#experiments').height()),
                ($('#github').height()),
                ($('#team').height()),
                ($('#publications').height()),
                ($('#partners').height()),
                ($('#contact').height()),
                ];


$('#scroll-down').click(function () {
    
    if ((sections[i-1]) != null && sections[i] != null) {
        sec_sum += sections[i];
        $('html, body').animate({scrollTop: sec_sum}, 'slow');
    }else{
        sec_sum = sections[i];
        $('html, body').animate({scrollTop: sections[i]}, 'slow');
    }

    i++;
    return false;
});

function summ(i) {
    var aux = 0;
    var s = sections[aux];
    
    while(aux < i) {
        aux++;
        s += sections[aux];
    }

    return s;
}

function project(id) {
    $('html, body').animate({scrollTop: summ(0)}, 'slow');
    return false;
}

function objectives(id) {
    $('html, body').animate({scrollTop: summ(1)}, 'slow');
    return false;
}

function experiment(id) {

    $('html, body').animate({scrollTop: summ(2)}, 'slow');
    return false;
}

function git(id) {
    $('html, body').animate({scrollTop: summ(3)}, 'slow');
    return false;
}

function team(id) {
    $('html, body').animate({scrollTop: summ(4)}, 'slow');
    return false;
}

function publications(id) {
    $('html, body').animate({scrollTop: summ(5)}, 'slow');
    return false;
}

function partners(id) {
    $('html, body').animate({scrollTop: summ(6)}, 'slow');
    return false;
}

function contact(id) {
    $('html, body').animate({scrollTop: summ(7)}, 'slow');
    return false;
}