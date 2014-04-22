var weight;

function printavg() {

    var select = document.getElementById("sulyozas");
    weight = select.options[select.selectedIndex].value;
    var raw;
    raw = document.getElementById("notes").value;
    var avg = average(raw.split(" "));
    if (avg !== "NaN") {
        document.getElementById("atlag").innerHTML = avg;
    }

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

    return parseInt(str.substring(1, 2));

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
