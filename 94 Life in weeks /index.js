function lifeInWeeks(age){
    var year = 90;
    var yearLeft = 90 - age;
    var monthLeft = (90 - age)*12;
    var weekLeft = (90-age)*52;
    var dayLeft = (90-age)*365;
    alert("you'll have " + dayLeft + " days " + weekLeft + " weeks " + monthLeft + " months left");
    console.log("you'll have " + dayLeft + " days " + weekLeft + " weeks " + monthLeft + " months left");
}
lifeInWeeks(56);