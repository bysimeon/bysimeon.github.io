apikey = "a7f8dd0989ae6f42d1be2c4427767c6f";
apibase = "https://ws.audioscrobbler.com/2.0/";
user = "theblindlookout";
paused = true;

function recenttrack() {
  let xhr2 = new XMLHttpRequest();
  xhr2.open('GET', apibase + "?method=user.getrecenttracks&user=" + user + "&api_key=" + apikey + "&format=json");
  xhr2.onload = () => {
    if (xhr2.readyState === 4) {
      if (xhr2.status === 200) {
        let json2 = JSON.parse(xhr2.responseText);
        songname = json2.recenttracks.track[0].name;
        artistname = json2.recenttracks.track[0].artist['#text'];
        noscrobble = "<span class='loading'></span>";
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
          paused = false;
          document.getElementById('song').innerHTML = songname + " - " + artistname;
          document.getElementById('song').setAttribute("href", json2.recenttracks.track[0].url);
          sessionStorage.setItem('song', songname + " - " + artistname);
          sessionStorage.setItem('songurl', json2.recenttracks.track[0].url);
        } else {
          if (!paused) {
            document.getElementById("song").innerHTML = noscrobble;
          }
          paused = true;
          document.getElementById('song').setAttribute("href", "https://www.last.fm/user/theblindlookout");
          sessionStorage.setItem("song", noscrobble);
          sessionStorage.setItem("songurl", "https://www.last.fm/user/theblindlookout");
        }
      } else {
        console.log('error msg: ' + xhr.status);
      }
    }
  }
  xhr2.send();
}

window.onload = () => {
  if (localStorage.getItem('song') === null) {
    document.getElementById("song").innerHTML = "<span class='loading'></span>"
  }
  document.getElementById('song').innerHTML = sessionStorage.getItem('song');
  document.getElementById('song').setAttribute("href", sessionStorage.getItem('songurl'));
  recenttrack();
  setInterval(recenttrack, 500);
}
