var weight;
var raw;

function parseString() {

    var input = document.getElementById("notes").value;
    var splitarray = input.split("\n");
    var output = "";
    var i;

    for (i = 0; i < splitarray.length; i++) {

        output += displayRow(splitarray[i]);

    }

    document.getElementById("tbody").innerHTML = output;

}

function displayRow(tomb) {

    var splitstr = tomb.split(":");
    var subject = splitstr[0];
    raw = splitstr[1].trim();
    raw = raw.split(" ");
    var select = document.getElementById("sulyozas");
    weight = select.options[select.selectedIndex].value;
    var avg = average(raw);

    if (avg !== "NaN") {

        var returnhtml = "<tr><td id='tantargy'>";
        returnhtml += subject;
        returnhtml += "</td><td id='jegyek'>";
        returnhtml += displayMarks();
        returnhtml += "</td><td id='atlag'>";
        returnhtml += avg;
        returnhtml += "</td></tr>";

    }

    return returnhtml;

}

function displayMarks() {

    var i;
    var returnstr = "";
    var temphtml;

    for (i = 0; i < raw.length; i++) {

        switch(raw[i].substring(0, 1)) {

            case "k": temphtml = "<span class='kis'>" + raw[i].substring(1) + "</span>"; break;
            case "n": temphtml = "<span class='normal'>" + raw[i].substring(1) + "</span>"; break;
            case "d": temphtml = "<span class='dolgozat'>" + raw[i].substring(1) + "</span>"; break;
            case "t": temphtml = "<span class='temazaro'>" + raw[i].substring(1) + "</span>"; break;
            case "v": temphtml = "<span class='vizsga'>" + raw[i].substring(1) + "</span>"; break;

        }

        returnstr += temphtml;

    }

    return returnstr;

}

function average(tomb) {

    var i;
    var multiplier;
    var sum = 0;
    var base = 0;

    for (i = 0; i < tomb.length; i++) {

        multiplier = getMultiplier(tomb[i].substring(0, 1));
        base += multiplier;
        sum += getValue(tomb[i]) * multiplier;

    }

    return (sum/base).toFixed(2);

}

function getValue(str) {

    switch(str.substring(1).length) {

        case 1: return parseInt(str.substring(1, 2));
        case 3: return ((parseInt(str.substring(1, 2)) + parseInt(str.substring(3, 4))) / 2);

    }

}

function getMultiplier(ch) {

    switch(ch) {

        case "k": return parseInt(weight.substring(0, 1));
        case "n": return parseInt(weight.substring(1, 2));
        case "d": return parseInt(weight.substring(2, 3));
        case "t": return parseInt(weight.substring(3, 4));
        case "v": return parseInt(weight.substring(4, 5));

    }

}
