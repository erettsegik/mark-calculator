var data = {};
var input = "";

function parseInput() {

    input = document.getElementById("notes").value.trim();
    var splitarray = input.split("\n");

    for (var i = 0; i < splitarray.length; i++) {

        parseLine(splitarray[i]);

    }

    display();

    //cookiemagic();

}

function parseLine(instring) {

    var splitarray = instring.split(":");
    var subject = splitarray[0].trim();
    var marks = splitarray[1].trim().split(" ");
    data[subject] = marks;

}

function addSubject() {

    var subjectname = prompt("Tantárgy neve:");
    data[subjectname] = [];
    display();

}

function deleteSubject(subject) {

    delete data[subject];
    display();

}

function addMark(subject) {

    var newmark = prompt("Jegy:");
    data[subject].push(newmark);
    display();

}

function modifyMark (subject, markindex) {

    var value = prompt("A jegy új értéke (ha üres, kitörli):");
    data[subject][markindex] = value;
    display();

}

function display() {

    var select = document.getElementById("sulyozas");
    weight = select.options[select.selectedIndex].value;

    var output = "";

    for (var subject in data) {

        var avg = 0;
        var base = 0;
        var sum = 0;

        output += "<tr><td id='tantargy'>";
        output += subject;
        output += " <a href='#' onclick='deleteSubject(\"" + subject + "\");'>-törlés</a>";
        output += "</td><td id='jegyek'>";

        for (var markindex in data[subject]) {

            var mark = data[subject][markindex].trim();

            if (mark != "" && mark != " ") {

                var multiplier = 0;

                switch(mark.substring(0, 1)) {

                    case "k":
                        multiplier = parseInt(weight.substring(0, 1));
                        output += "<span class='kis' onclick='modifyMark(\"" + subject + "\", \"" + markindex + "\");'>" + mark.substring(1) + "</span>";
                        break;
                    case "n":
                        multiplier = parseInt(weight.substring(1, 2));
                        output += "<span class='normal' onclick='modifyMark(\"" + subject + "\", \"" + markindex + "\");'>" + mark.substring(1) + "</span>";
                        break;
                    case "d":
                        multiplier = parseInt(weight.substring(2, 3));
                        output += "<span class='dolgozat' onclick='modifyMark(\"" + subject + "\", \"" + markindex + "\");'>" + mark.substring(1) + "</span>";
                        break;
                    case "t":
                        multiplier = parseInt(weight.substring(3, 4));
                        output += "<span class='temazaro' onclick='modifyMark(\"" + subject + "\", \"" + markindex + "\");'>" + mark.substring(1) + "</span>";
                        break;
                    case "v":
                        multiplier = parseInt(weight.substring(4, 5));
                        output += "<span class='vizsga' onclick='modifyMark(\"" + subject + "\", \"" + markindex + "\");'>" + mark.substring(1) + "</span>";
                        break;

                }

                base += multiplier;
                sum += getMarkValue(mark) * multiplier;

            }

        }

        avg = (sum/base).toFixed(2);

        output += "</td><td id='ujjegy'><a href='#' onclick='addMark(\"";
        output += subject;
        output += "\");'>+ jegy</a></td><td id='atlag'>";
        output += avg;
        output += "</td><td id='bizonyitvany'>";
        output += getFinalMark(avg);
        output += "</td></tr>";

    }

    output += "<tr><td id='tantargy'><a href='#' onclick='addSubject();'>+ tantárgy</a></td><td id='jegyek' colspan='2'></td><td id='atlag'></td><td id='bizonyitvany'></td></tr>";

    document.getElementById("tbody").innerHTML = output;

}

function getMarkValue(str) {

    switch(str.substring(1).length) {

        case 1: return parseInt(str.substring(1, 2));
        case 3: return ((parseInt(str.substring(1, 2)) + parseInt(str.substring(3, 4))) / 2);

    }

}

function cookiemagic() {

    if (input != "") {

        var date = new Date();
        date.setTime(date.getTime()+(365*24*60*60*1000));
        cookiestring = "data=" + input + "; expires=" + date.toGMTString() + "; path=/";
        document.cookie = cookiestring;

    } else {

        var date = new Date();
        date.setTime(date.getTime()-(365*24*60*60*1000));
        document.cookie = "data=; expires=" + date.toGMTString() + "; path=/";

    }

}

function getCookieData() {

    var temp = document.cookie.split(";");
    var data = temp[0].split("=")[1];
    var textarea = document.getElementById("notes");
    //textarea.value = data;

}

function getFinalMark(avg) {

    var mark;

    if (avg < 1.5) {

        mark = "elégtelen";

    } else if (avg < 2.5) {

        mark = "elégséges";

    } else if (avg < 3.5) {

        mark = "közepes";

    } else if (avg < 4.5) {

        mark = "jó";

    } else {

        mark = "jeles";

    }

    return mark;

}
