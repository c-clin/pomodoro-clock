$(document).ready(function(){
    let breakCounter = parseInt($('#breakNum').html());
    let sessionCounter = parseInt($('#sessionNum').html());

    // break length
    $('#breakPlus').click(() => {
        breakCounter++;
        $('#breakNum').html(breakCounter);
    })
    $('#breakMinus').click(() => {
        if (breakCounter > 0) {
            breakCounter--;
            $('#breakNum').html(breakCounter);
        }
    })

    // session length
    $('#sessionPlus').click(() => {
        sessionCounter++;
        $('#sessionNum').html(sessionCounter);
    })
    $('#sessionMinus').click(() => {
        if(sessionCounter > 0) {
            sessionCounter--;
            $('#sessionNum').html(sessionCounter);
        }
    })

});