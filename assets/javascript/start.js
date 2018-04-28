var searchengine = "";

var searchmod = {
  "s:": ["soundcloud", "https://soundcloud.com/search?q=", "(to right, #fe8c00, #f83600)", "#fe8c00"],
  "y:": ["youtube", "https://www.youtube.com/results?search_query=", "(to right, #e52d27, #b31217)", "#e52d27"],
  "t:": ["twitch", "https://www.twitch.tv/directory/game/", "(to right, #6441a5, #2a0845)", "#6441a5"],
  "a:": ["myanimelist", "https://myanimelist.net/search/all?q=", "(to right, #1488cc, #2e51a2)", "#1488cc"],
  "r:": ["reddit", "https://www.reddit.com/search?q=", "(to right, #5f99cf, #cee3f8)", "#5f99cf", "#1488cc"],
  "r/": ["subreddit", "https://www.reddit.com/r/", "(to right, #5f99cf, #cee3f8)", "#5f99cf"],
  "d:": ["google drive", "https://drive.google.com/drive/u/0/search?q=", "(to right, #4285f4, #fbbc05)", "#4285f4"],
  "l:": ["lastfm", "https://www.last.fm/search?q=", "(to right, #d51007, #d32d27)", "#d51007"],
  "g:": ["github", "https://github.com/search?utf8=%E2%9C%93&q=", "(to right, #767676, #999)", "#767676"],
  "u:": ["unsplash", "https://unsplash.com/search/photos/", "(to right, #485563, #29323c)", "#485563"],
  "n:": ["netflix", "https://www.netflix.com/search?q=", "(to right, #e50914, #e50914)", "#e50914"]
};

function clear() {
  document.getElementById("search-field").style.background = "#000";
  searchengine = "";
  document.getElementById("search-mode").innerHTML = "google";
  document.getElementById("search-mode").style.color = "black ";
}

function cutoff(num, str) {
  if (str.substring(0, 1) != " ") {
    num2 = num - 1;
  }
  num2 = num;
  return num2
}

function search(e) {
  var val = document.getElementById("search-field").value;
  var key = val.substr(0, (cutoff(3, val))).trim().toLowerCase();
  console.log(key);

  if (val.length <= cutoff(3, val)) {
    if (key in searchmod) {
      searchengine = key;
      document.getElementById("search-field").style.background = "-webkit-linear-gradient" + searchmod[key][2];
      document.getElementById("search-field").style.background = "linear-gradient" + searchmod[key][2];
      document.getElementById("search-mode").style.color = searchmod[key][3];
      document.getElementById("search-mode").style.color = searchmod[key][3];
      document.getElementById("search-mode").innerHTML = searchmod[key][0];
    }
  }

  if (!val.includes(":") && !val.includes("/")) {
    clear();
  }

  if (e.keyCode == 13) {
    if (searchengine != "") {
      window.open((searchmod[key][1]) + val.substr(cutoff(3, val)).trim(), "_self");
    } else if (val.includes('.com') || val.includes('.net') || val.includes('.co') ||
      val.includes('.io') || val.includes('.xyz') || val.includes('.gov') || val.includes('.org') || val.includes('.se') ||
      val.includes('.fm') || val.includes('.de') || val.includes('.uk') || val.includes('.gg') || val.includes('.info') ||
      val.includes('.ai') || val.includes('.ch') || val.includes('.edu') || val.includes('.gl') || val.includes('.nz') || val.includes('.so')) {
      if (val.includes('http')) {
        window.open(val.trim(), "_self");
      } else {
        window.open("http://" + val.trim(), "_self");
      }
    } else {
      window.open("https://google.com/search?q=" + val.trim(), "_self");
    }
  }
}

const monthNames = ["january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];

const dayNames = ["", "first", "second", "third", "fourth", "fifth", "sixth",
  "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth",
  "fiftheenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentyith", "twentyfirst",
  "twenysecond", "twentythird", "twenyfourth", "twenyfifth", "twenysixth", "twenysevenph", "twenyayth",
  "twenyninth", " thirtyith", "thirtyfirst"
];

function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hour = date.getHours();

  return "" +
    (hour < 10 ? ("0" + hour) : hour) + ":" +
    (min < 10 ? ("0" + min) : min) + ":" +
    (sec < 10 ? ("0" + sec) : sec);
}

function getDay() {
  let date = new Date(),
    day = dayNames[date.getDate()];
  month = monthNames[date.getMonth()];

  return "" + month + " " + day;
}

apikey = "a7f8dd0989ae6f42d1be2c4427767c6f";
apibase = "https://ws.audioscrobbler.com/2.0/";
user = "theblindlookout";

window.onload = () => {
  // Clear Everything on Load
  document.getElementById('search-field').value = '';
  clear();

  function theweather() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=60201,us&units=Imperial&appid=4119dfca25e96bf1f10f35a975835f6c');
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let json = JSON.parse(xhr.responseText);
          document.getElementById("temp").innerHTML = json.main.temp.toFixed(0) + "&#176 f";
          document.getElementById("weather-description").innerHTML = json.weather[0].description;
        } else {
          console.log('error msg: ' + xhr.status);
        }
      }
    }
    xhr.send();
  }

  function recenttrack() {
    let xhr2 = new XMLHttpRequest();
    xhr2.open('GET', apibase + "?method=user.getrecenttracks&user=" + user + "&api_key=" + apikey + "&format=json");
    xhr2.onload = () => {
      if (xhr2.readyState === 4) {
        if (xhr2.status === 200) {
          let json2 = JSON.parse(xhr2.responseText);
          songname = json2.recenttracks.track[0].name;
          artistname = json2.recenttracks.track[0].artist['#text'];
          noscrobble = "nothing scrobbling"
          if (typeof json2.recenttracks.track[0]['@attr'] === 'undefined') {
            playing = false;
          } else {
            playing = json2.recenttracks.track[0]['@attr'].nowplaying;
          }
          if (songname.length >= 50) {
            if (songname.includes('(f')) {
              songname = (songname.substr(0, songname.indexOf(' (f')));
            } else {
              songname = (songname.substr(0, 50)) + "...";
            }
          }
          if (playing) {
            document.getElementById('song').innerHTML = songname + " - " + artistname;
            document.getElementById('song').setAttribute("href", json2.recenttracks.track[0].url);
          } else {
            document.getElementById('song').innerHTML = noscrobble;
            document.getElementById('song').setAttribute("href", "https://www.last.fm/user/theblindlookout");
          }
        } else {
          console.log('error msg: ' + xhr.status);
        }
      }
    }
    xhr2.send();
  }

  recenttrack();
  setInterval(recenttrack, 500);

  theweather();
  setInterval(theweather, 6000000);

  document.getElementById("clock").innerHTML = getTime();
  document.getElementById("date").innerHTML = getDay();

  setInterval(() => {
    document.getElementById("clock").innerHTML = getTime();
    document.getElementById("date").innerHTML = getDay();
  }, 100);
}

document.addEventListener("keydown", event => {
  if (event.keyCode == 32) { // Spacebar code to open search
    opensearchbox();
  } else if (event.keyCode == 27) { // Esc to close search
    closeall();
  }
});

function commands() {
  document.getElementById('command').style.display = 'flex';
  document.getElementById('command-list').focus();
}

function opensearchbox() {
  document.getElementById('search').style.display = 'flex';
  document.getElementById('search-field').focus();
}

function closeall() {
  document.getElementById('search-field').value = '';
  document.getElementById('search-field').blur();
  document.getElementById('search').style.display = 'none';
  document.getElementById('command').style.display = 'none';
  document.getElementById('command-list').blur();
  clear();
}
