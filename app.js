$(document).ready(function(){
    let breakCounter = parseInt($('#breakNum').html());
    let sessionCounter = parseInt($('#sessionNum').html());

    // break length
    $('#breakPlus').click(() => {
        breakCounter++;
        $('#breakNum').html(breakCounter);
    });
    $('#breakMinus').click(() => {
        if (breakCounter > 0) {
            breakCounter--;
            $('#breakNum').html(breakCounter);
        }
    });

    // session length
    $('#sessionPlus').click(() => {
        sessionCounter++;
        $('#sessionNum').html(sessionCounter);
        $('#sessionTime').html(sessionCounter);
    });
    $('#sessionMinus').click(() => {
        if(sessionCounter > 0) {
            sessionCounter--;
            $('#sessionNum').html(sessionCounter);
            $('#sessionTime').html(sessionCounter);
        }
    });

    // start clock
    $('#startButton').click((() => {
        let counter = breakCounter * 60;
        let minutes = sessionCounter - 1;
        let seconds = 60;
        let time;

        var sessionTimer = setInterval(timer, 1000);
        
        function timer() {
            if (seconds > 0) {
                seconds--;
                counter--;
            } 
            if (seconds == 0) {
                seconds = 59;
                minutes--;
                counter--;
            }
            // start break.
            if (counter == 0) {
                clearInterval(sessionTimer);
                var breakTimer = setInterval(brkTimer, 1000);

                let brkMinutes = breakCounter - 1;
                let brkSeconds = 60;
                let brkTime;

                function brkTimer() {

                    $('#workText').html('Break');

                    if (brkSeconds > 0) {
                        brkSeconds--;
                    }
                    if (brkSeconds == 0) {
                        brkSeconds = 59;
                        brkMinutes--;
                    }

                    if (brkMinutes == 0) {
                        clearInterval(breakTimer);
                        $('#workText').html('Session');
                        counter = breakCounter * 60;
                        setInterval(timer, 1000);
                    }

                    // format timer
                    if (brkSeconds >= 10) {
                        brkTime = brkMinutes + ':' + brkSeconds;
                    } else {
                        brkTime = brkMinutes + ':' + 0 + brkSeconds;
                    }
                    $("#sessionTime").html(brkTime);
                }
            }   

            // once minutes equal 0, timer stops
            if (minutes < 0) {
              clearInterval(sessionTimer);
            }

            // format the timer display
            if (seconds >=10) {
                time = minutes + ':' + seconds;
            } else {
                time = minutes + ':' + 0 + seconds;
            }
            
            $("#sessionTime").html(time);

        }
        $('#sessionTime').html(time);

        // timer stops when session time is clicked
        $('#sessionPlus').click(() => {
            clearInterval(sessionTimer);
        });
        $('#sessionMinus').click(() => {
            clearInterval(sessionTimer);
        });
    }));
});