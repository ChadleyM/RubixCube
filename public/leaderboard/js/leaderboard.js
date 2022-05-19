
window.onload = function init() {
    getLeaderboard()
};

function getLeaderboard() {
    console.log("PING!!!!");
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
        return second.score - first.score;
    });

    for (const entry of data) {
        console.log("Data " + entry);
        const tr = document.createElement("tr");
        let userName = entry["user"]
        let userNameTN = document.createTextNode(userName);
        let td = document.createElement("td");
        td.appendChild(userNameTN)
        tr.appendChild(td)

        let score = entry["score"]
        let scoreTN = document.createTextNode(score);
        td = document.createElement("td");
        td.appendChild(scoreTN)
        tr.appendChild(td)

        let bestTime = entry["bestTime"]
        let bestTimeTN = document.createTextNode(bestTime);
        td = document.createElement("td");
        td.appendChild(bestTimeTN)
        tr.appendChild(td)
        
        let moves = entry["moves"]
        let movesTN = document.createTextNode(moves);
        td = document.createElement("td");
        td.appendChild(movesTN)
        tr.appendChild(td)
        leaderboardTable.appendChild(tr)
    }
}