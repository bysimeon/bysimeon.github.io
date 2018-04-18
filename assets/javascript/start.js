soundcloud = false;
youtube = false;
twitch = false;
myanimelist = false;
reddit = false;
redditlink = false;
gdrive = false;
lastfm = false;
github = false;

function clear() {
  document.getElementById("search-field").style.background = "#000"
  soundcloud = false;
  youtube = false;
  twitch = false;
  myanimelist = false;
  reddit = false;
  redditlink = false;
  gdrive = false;
  lastfm = false;
  github = false;
}

function cutoff(num, str) {
  if (str.substring(0,1) != " ") {
    num2 = num - 1;
    return num2;
  }
  num2 = num;
  return num2
}

function search(e) {
  var val = document.getElementById("search-field").value;

  if (val.length <= cutoff(3, val)) {
    if (val.endsWith('s:') || val.endsWith('S:')) {
      if (! val.endsWith('tps:')) {
        console.log("soundcloud");
        clear();
        soundcloud = true;
        document.getElementById("search-field").style.background = "-webkit-linear-gradient(to right, #fe8c00, #f83600)";
        document.getElementById("search-field").style.background = "linear-gradient(to right, #fe8c00, #f83600)";
      }
    }
    if (val.endsWith('y:') || val.endsWith('Y:')) {
      console.log("youtube");
      clear();
      youtube = true;
      document.getElementById("search-field").style.background = "-webkit-linear-gradient(to right, #e52d27, #b31217)";
      document.getElementById("search-field").style.background = "linear-gradient(to right, #e52d27, #b31217)";
    }
    if (val.endsWith('t:') || val.endsWith('T:')) {
      console.log("twitch");
      clear();
      twitch = true;
      document.getElementById("search-field").style.background = "-webkit-linear-gradient(to right, #6441a5, #2a0845)";
      document.getElementById("search-field").style.background = "linear-gradient(to right, #6441a5, #2a0845)";
    }
    if (val.endsWith('a:') || val.endsWith('A:')) {
      console.log("myanimelist");
      clear();
      myanimelist = true;
      document.getElementById("search-field").style.background = "-webkit-linear-gradient(to right, #1488cc, #2e51a2)";
      document.getElementById("search-field").style.background = "linear-gradient(to right, #1488cc, #2e51a2)";
    }
    if (val.endsWith('r:') || val.endsWith('R:')) {
      console.log("reddit");
      clear();
      reddit = true;
      document.getElementById("search-field").style.background = "-webkit-linear-gradient(to right, #5f99cf, #cee3f8)";
      document.getElementById("search-field").style.background = "linear-gradient(to right, #5f99cf, #cee3f8)";
    }
    if (val.endsWith('r/') || val.endsWith('R/')) {
      console.log("redditlink");
      clear();
      redditlink = true;
      document.getElementById("search-field").style.background = "-webkit-linear-gradient(to right, #5f99cf, #cee3f8)";
      document.getElementById("search-field").style.background = "linear-gradient(to right, #5f99cf, #cee3f8)";
    }
    if (val.endsWith('d:') || val.endsWith('D:')) {
      console.log("google drive");
      clear();
      gdrive = true;
      document.getElementById("search-field").style.background = "-webkit-linear-gradient(to right, #4285f4, #fbbc05)";
      document.getElementById("search-field").style.background = "linear-gradient(to right, #4285f4, #fbbc05)";
    }
    if (val.endsWith('l:') || val.endsWith('L:')) {
      console.log("lastfm");
      clear();
      lastfm = true;
      document.getElementById("search-field").style.background = "-webkit-linear-gradient(to right, #d51007, #d32d27)";
      document.getElementById("search-field").style.background = "linear-gradient(to right, #d51007, #d32d27)";
    }
    if (val.endsWith('g:') || val.endsWith('G:')) {
      console.log("github");
      clear();
      github = true;
      document.getElementById("search-field").style.background = "-webkit-linear-gradient(to right, #767676, #999)";
      document.getElementById("search-field").style.background = "linear-gradient(to right, #767676, #999)";
    }
  }

  if (! val.includes(":") && ! val.includes("/")) {
    clear();
    if (soundcloud || twitch || youtube || reddit || myanimelist || redditlink || gdrive || lastfm || github) {
      if (redditlink) {
        clear();
      }
      else {
        clear();
      }
    }
  }

  if (e.keyCode == 13) {
    if (soundcloud) {
      window.open("https://soundcloud.com/search?q=" + val.substr(cutoff(3, val)).trim());
      clear();
    }
    else if (youtube) {
      window.open("https://www.youtube.com/results?search_query=" + val.substr(cutoff(3, val)).trim());
      clear();
    }
    else if (twitch) {
      window.open("https://www.twitch.tv/directory/game/" + val.substr(cutoff(3, val)).trim());
      clear();
    }
    else if (myanimelist) {
      window.open("https://myanimelist.net/search/all?q=" + val.substr(cutoff(3, val)).trim());
      clear();
    }
    else if (reddit) {
      window.open("https://www.reddit.com/search?q=" + val.substr(cutoff(3, val)).trim());
      clear();
    }
    else if (redditlink) {
      window.open("https://www.reddit.com/r/" + val.substr(cutoff(3, val)).trim());
      clear();
    }
    else if (gdrive) {
      window.open("https://drive.google.com/drive/u/0/search?q=" + val.substr(cutoff(3, val)).trim());
      clear();
    }
    else if (lastfm) {
      window.open("https://www.last.fm/search?q=" + val.substr(cutoff(3, val)).trim());
      clear();
    }
    else if (github) {
      window.open("https://github.com/search?utf8=%E2%9C%93&q=" + val.substr(cutoff(3, val)).trim());
      clear();
    }
    else if (val.includes('.com') || val.includes('.net') || val.includes('.co') ||
    val.includes('.io') || val.includes('.xyz') || val.includes('.gov') || val.includes('.org') || val.includes('.se') ||
    val.includes('.fm') || val.includes('.de') || val.includes('.uk') || val.includes('.gg') || val.includes('.info') ||
    val.includes('.ai') || val.includes('.ch') || val.includes('.edu') || val.includes('.gl')) {
      if (val.includes('http')) {
        window.open(val.trim());
      } else {
        window.open("http://" + val.trim());
      }
    }
    else {
     window.open("https://google.com/search?q=" + val.trim());
    }
    document.getElementById('search-field').value = '';
    document.getElementById('search-field').blur();
    document.getElementById('search').style.display = 'none';
  }
}

const monthNames = ["january", "february", "march", "april", "may", "june",
"july", "august", "september", "october", "november", "december" ];

const dayNames = ["", "first", "second", "third", "fourth", "fifth", "sixth",
"seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth",
"fiftheenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentyith", "twentyfirst",
"wentysecond", "twentythird", "twentyfourth", "twentyfifth", "twentysixth", "twenyseventh", "twentyeight",
"twentyninth", "thirtyith", "thirtyfirst"];

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
    xhr2.open('GET', apibase + "?method=user.getrecenttracks&user=" + user +  "&api_key=" + apikey + "&format=json");
    xhr2.onload = () => {
      if (xhr2.readyState === 4) {
        if (xhr2.status === 200) {
          let json2 = JSON.parse(xhr2.responseText);
          songname = json2.recenttracks.track[0].name;
          artistname = json2.recenttracks.track[0].artist['#text'];
          noscrobble = "currenly listening to nothing"
          if (typeof json2.recenttracks.track[0]['@attr'] === 'undefined') {
            playing = false;
          } else {
            playing = json2.recenttracks.track[0]['@attr'].nowplaying;
          }
          if (songname.length >= 50) {
            if (songname.includes('(f')) {
              songname = (songname.substr(0,songname.indexOf(' (f')));
            }
            else {
              songname = (songname.substr(0,50)) + "...";
            }
          }
          if (playing) {
            document.getElementById('song').innerHTML = songname  + " - " + artistname;
            document.getElementById('song').setAttribute("href", json2.recenttracks.track[0].url);
          }
          else {
            document.getElementById('song').innerHTML = noscrobble;
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

  setInterval( () => {
    document.getElementById("clock").innerHTML = getTime();
    document.getElementById("date").innerHTML = getDay();
  },100);
}

document.addEventListener("keydown", event => {
  if (event.keyCode == 32) {          // Spacebar code to open search
    document.getElementById('search').style.display = 'flex';
    document.getElementById('search-field').focus();
  } else if (event.keyCode == 27) {   // Esc to close search
    document.getElementById('search-field').value = '';
    document.getElementById('search-field').blur();
    document.getElementById('search').style.display = 'none';
    document.getElementById('command').style.display = 'none';
    document.getElementById('command-list').blur();
    clear();
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
