setTimeout('location.reload()', 3000);
let songs = {
    0: "Moon, 12:04AM Offonoff",
    1: "1AM FREESTYLE Joji",
    2: "2AM Astrid S",
    3: "3AM Halsey",
    4: "4AM Bastille",
    5: "5AM Galdive",
    6: "6AM Max Pope",
    7: "7am Thiago Duque",
    8: "8:01 If Enough",
    9: "9AM (Feat. yelloasis, jack) Bravo",
    10: "10 am holocene",
    11: "11:00 Trent Hawthorne",
    12: "12:00 PM 오만",
    13: "13:00 Walk In The Park Jonathan Ogden",
    14: "2pm Underwater",
    15: "3PM Stephanie Poetri",
    16: "Moon, 12:04AM",
    17: "5시 53분의 하늘에서 발견한 너와 나 TXT",
    18: "6PM Misce!",
    19: "7시에 들어줘 부석순",
    20: "8:45 Heaven TigerJK",
    21: "Nine in the Afternoon Panic! At The Disco",
    22: "22:22 Ghali",
    23: "11:11 태연",
};

function getSongForHour(hour) {
    // Customize this function to get songs based on the current hour
    // For simplicity, I'm just returning a hardcoded song for each hour

    return songs[hour] || "Default song";

}

let now = new Date();
let currentHour = now.getHours();
let songForHour = getSongForHour(currentHour);
let spanElements = document.querySelectorAll('span#myspan');

// Update text content of all span elements with id "myspan"
spanElements.forEach(span => {
    span.textContent = songForHour;
});

document.getElementById("musicPlayer").src = "https://www.youtube.com/watch?v=gLdcnWhJNLw";

function playSong() {
    let now = new Date();
    let currentHour = now.getHours();
    let songForHour = getSongForHour(currentHour);
    alert(`Playing: ${songForHour}`);
    // Add logic to play the song using an audio element or another appropriate method
}

function updateCurrentHour() {
    let now = new Date();
    let currentHour = now.getHours();
    let formattedHour = currentHour < 10 ? `0${currentHour}` : currentHour;
    document.getElementById("current-hour").innerText = `Current Hour: ${formattedHour}`;
}

// Update the current hour every minute
setInterval(updateCurrentHour, 60000);

// Initial update
updateCurrentHour();
