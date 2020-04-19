var number = 37;

window.onload = function firstImages() {
    makeImages();
}

function changeId() {
    document.getElementById("person").innerHTML = number;
}

function makeImages() {
    var htmlString = "";
    for (var i = 0; i < 24; i++) {
        htmlString += "<img src=\"/database_people/" + number + "/" + i + ".jpg\">";
    }
    console.log(htmlString)
    document.getElementById("database_people").innerHTML = htmlString;
    changeId();
}

function nextPerson() {
    if (number == 47) {
        number = 60;
    } else {
        number += 1;
    }
    makeImages();
}

function previousPerson() {
    if (number == 60) {
        number = 47;
    } else {
        number -= 1;
    }
    makeImages();
}