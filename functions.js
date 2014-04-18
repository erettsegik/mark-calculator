function printavg() {

    var raw;
    raw = document.getElementById("notes").value;
    document.getElementById("atlag").innerHTML = average(raw.split(" "));

}

function average(tomb) {

    var i;
    var sum = 0;

    for (i = 0; i < tomb.length; i++) {

        sum += parseInt(tomb[i]);

    }

    alert("sum: " + sum + " len: " + tomb.length);

    return (sum/tomb.length).toFixed(2);

}
