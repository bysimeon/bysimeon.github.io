var searchengine = "";

var searchmod = {
  "s:": [
    "soundcloud",
    "https://soundcloud.com/search?q=",
    "(to right, #fe8c00, #f83600)",
    "#fe8c00"
  ],
  // "m:": [
  //   "genius",
  //   "https://genius.com/search?q=",
  //   "(to right, #000 , #ffff65)",
  //   "#000"
  // ],
  "::": [
    "localhost",
    "http://localhost:",
    "(135deg, #8BC6EC 0%, #9599E2 100%)",
    "#8BC6EC "
  ],
  "y:": [
    "youtube",
    "https://www.youtube.com/results?search_query=",
    "(to right, #e52d27, #b31217)",
    "#e52d27"
  ],
  "t:": [
    "twitch",
    "https://www.twitch.tv/directory/game/",
    "(to right, #6441a5, #2a0845)",
    "#6441a5"
  ],
  "a:": [
    "myanimelist",
    "https://myanimelist.net/search/all?q=",
    "(to right, #1488cc, #2e51a2)",
    "#1488cc"
  ],
  "r:": [
    "reddit",
    "https://www.reddit.com/search?q=",
    "(to right, #5f99cf, #cee3f8)",
    "#5f99cf",
    "#1488cc"
  ],
  "r/": [
    "subreddit",
    "https://www.reddit.com/r/",
    "(to right, #5f99cf, #cee3f8)",
    "#5f99cf"
  ],
  "d:": [
    "google drive",
    "https://drive.google.com/drive/u/0/search?q=",
    "(to right, #4285f4, #fbbc05)",
    "#4285f4"
  ],
  "l:": [
    "lastfm",
    "https://www.last.fm/search?q=",
    "(to right, #d51007, #d32d27)",
    "#d51007"
  ],
  "g:": [
    "github",
    "https://github.com/search?utf8=%E2%9C%93&q=",
    "(to right, #767676, #999)",
    "#767676"
  ],
  "u:": [
    "unsplash",
    "https://unsplash.com/search/photos/",
    "(to right, #485563, #29323c)",
    "#485563"
  ],
  "n:": [
    "netflix",
    "https://www.netflix.com/search?q=",
    "(to right, #e50914, #e50914)",
    "#e50914"
  ]
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
  return num2;
}

function search(e) {
  var val = document.getElementById("search-field").value;
  var key = val
    .substr(0, cutoff(3, val))
    .trim()
    .toLowerCase();

  if (val.length <= cutoff(3, val)) {
    if (key in searchmod) {
      searchengine = key;
      document.getElementById("search-field").style.background =
        "-webkit-linear-gradient" + searchmod[key][2];
      document.getElementById("search-field").style.background =
        "linear-gradient" + searchmod[key][2];
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
      window.open(
        searchmod[key][1] + val.substr(cutoff(3, val)).trim(),
        "_self"
      );
      document.getElementById("search-mode").innerHTML =
        searchmod[searchengine][0] + '<span class="loading"></span>';
    } else if (
      val.includes(".com") ||
      val.includes(".net") ||
      val.includes(".co") ||
      val.includes(".io") ||
      val.includes(".xyz") ||
      val.includes(".gov") ||
      val.includes(".org") ||
      val.includes(".se") ||
      val.includes(".fm") ||
      val.includes(".de") ||
      val.includes(".uk") ||
      val.includes(".gg") ||
      val.includes(".info") ||
      val.includes(".ai") ||
      val.includes(".ch") ||
      val.includes(".edu") ||
      val.includes(".gl") ||
      val.includes(".nz") ||
      val.includes(".so")
    ) {
      document.getElementById("search-mode").innerHTML =
        "url" + '<span class="loading"></span>';
      if (val.includes("http")) {
        window.open(val.trim(), "_self");
      } else {
        window.open("http://" + val.trim(), "_self");
      }
    } else {
      document.getElementById("search-mode").innerHTML =
        "google" + '<span class="loading"></span>';
      window.open("https://google.com/search?q=" + val.trim(), "_self");
    }
    document
      .getElementById("search-field")
      .setAttribute("class", "move-off-right");
    document
      .getElementById("search-mode")
      .setAttribute("class", "move-off-right");
  }
}

document.addEventListener("keydown", event => {
  if (event.keyCode == 32) {
    // Spacebar code to open search
    opensearchbox();
  } else if (event.keyCode == 27) {
    // Esc to close search
    closeall();
  }
});

function commands() {
  document.getElementById("command").style.visibility = "visible";
  document.getElementById("command").style.opacity = 1;
  document.getElementById("command-list").focus();
}

function opensearchbox() {
  document.getElementById("search").style.visibility = "visible";
  document.getElementById("search").style.opacity = 1;
  document.getElementById("search-field").focus();
}

function closeall() {
  document.getElementById("search-field").value = "";
  document.getElementById("search-field").blur();
  document.getElementById("search").style.visibility = "hidden";
  document.getElementById("search").style.opacity = 0;
  document.getElementById("command").style.visibility = "hidden";
  document.getElementById("command").style.opacity = 0;
  document.getElementById("command-list").blur();
  clear();
}

window.onload = () => {
  document.getElementById("search").focus();
  // Clear Everything on Load
  document.getElementById("search-field").value = "";
  clear();
};
