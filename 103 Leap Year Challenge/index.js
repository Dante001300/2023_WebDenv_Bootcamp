/*
    a year is a leap year if it's divisble by 4
    except if it's also divisible by 100
    unless the year is also divisible by 400 then it's a leap year again
*/

function isLeap(year){

    if(by4(year) === 0 && by100(year) === 0 && by400(year) === 0){
        console.log("it's leap");
    }

    else if(by4(year) === 0 && by100(year) != 0){
        console.log("it's leap");
    }

    else if(by4(year) === 0 && by100(year)=== 0){
        console.log("it's not leap");
    }
    else if(by4(year) === 0){
        console.log("it's leap");
    }

    else{
        console.log("it's not leap");
    }
}

isLeap(2000);

function by4 (year){
    var div4 = (year % 4);
    return div4; 
}

function by100 (year){
    var div100 = (year % 100);
    return div100; 
}

function by400 (year){
    var div400 = (year % 400);
    return div400; 
}



