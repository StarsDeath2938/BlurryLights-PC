let getDate = []
let date = new Date();
let Str = ""

getDate[0] = date.getFullYear();
getDate[1] = date.getMonth() + 1;
getDate[2] = date.getDay();
getDate[3] = date.getHours();
getDate[4] = date.getMinutes();

for (let i = 0; i < getDate.length; i++) {

    if (getDate[i] < 10) {
        Str += "0";
    }

    Str += getDate[i]

    if (i == 2) {
        Str += " "
        continue;
    }

    if (i == 4) {
        break;
    }

    Str += "."
}

document.getElementById("displayDate").innerHTML = Str;