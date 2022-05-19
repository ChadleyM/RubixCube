window.onload = function init() {
    getLeaderboard()
};

function getLeaderboard() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://mudla6g3ejcwhoergdmeycrp4a0gtovs.lambda-url.us-east-1.on.aws/");
    xhr.onload = () => {
        constructLeaderboard(JSON.parse(xhr.response))
    };
    xhr.send();
}

function constructLeaderboard(data) {
    const leaderboardTable = document.getElementById("leaderboard-table");

    data.sort(function(first, second) {
        let minSec1 = first.bestTime.split(":")
        let minSec2 = second.bestTime.split(":")
        let firstTime = parseInt(minSec1[0]) + parseInt(minSec1[1]) / 60
        let secondTime = parseInt(minSec2[0]) + parseInt(minSec2[1]) / 60
        return firstTime - secondTime;
    });

    let rank = 1;
    for (const entry of data) {        
        let tr = document.createElement("tr");
        let movesTN = document.createTextNode(rank);
        let td = document.createElement("td");
        td.appendChild(movesTN)
        tr.appendChild(td)
        leaderboardTable.appendChild(tr)

        let userName = entry["user"]
        let userNameTN = document.createTextNode(userName);
        td = document.createElement("td");
        td.appendChild(userNameTN)
        tr.appendChild(td)

        let bestTime = entry["bestTime"]
        let bestTimeTN = document.createTextNode(bestTime);
        td = document.createElement("td");
        td.appendChild(bestTimeTN)
        tr.appendChild(td)
        rank++;
    }
}
