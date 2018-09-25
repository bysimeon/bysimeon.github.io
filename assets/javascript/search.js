var selectedSearch = "";
var selectedSearchLength = 0;
var selectedBookmark = "";

// all my searchengines
var searchEngines = {
  "s:": [
    "soundcloud",
    "https://soundcloud.com/search?q=",
    "(to right, #fe8c00, #f83600)",
    "#fe8c00"
  ],
  "l:": [
    "lyrics @ genius",
    "https://genius.com/search?q=",
    "(to right, #FAD961 , #F7F21C)",
    "#FAD961"
  ],
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

// all my bookmarks
var bookmarks = {
  "showdown": ["showdown", "https://play.pokemonshowdown.com/"],
  "simple": ["simple", "https://bank.simple.com/"],
  "subs": ["subs", "https://horriblesubs.info/"],
  "amex": ["american express", "https://www.americanexpress.com/"],
  "music": ["plus premieres", "https://www.pluspremieres.in/"],
  "caesar": ["caesar", "http://caesar.northwestern.edu"],
  "canvas": ["canvas", "http://canvas.northwestern.edu"],
  "myhr": ["myhr", "http://myhr.northwestern.edu"],
  "work": ["whentowork", "https://whentowork.com"],
  "calendar": ["calendar", "https://calendar.google.com"],
  "photos": ["photos", "http://photos.google.com"],
  "teah": ["teah", "http://teahkbrands.com"],
  "notion": ["notion", "http://notion.so"],
  "albums": ["albums", "https://photos.google.com/albums"],
  "high": ["the highly", "https://www.thehighly.co/"],
  "messages": ["messages", "https://messages.android.com"]
};

// clear everything except text
function clear() {
  selectedSearch = "";
  selectedSearchLength = 0;
  selectedBookmark = "";
  document.getElementById("search-field").style.background = "#000";
  document.getElementById("search-mode").innerHTML = "google";
  document.getElementById("search-mode").style.color = "black ";
}

function search(e) {
  currentText = document.getElementById("search-field").value;
  key = currentText
    .trim()
    .substr(0, 2)
    .toLowerCase();

  // first check for bookmarks and searchengines
  if (key in searchEngines || currentText.trim().toLowerCase() in searchEngines) {
    if (!(key in searchEngines) && selectedSearchLength == 0) {
      selectedSearch = currentText.trim().toLowerCase();
      selectedSearchLength = currentText.trim().length;
    } else if (key in searchEngines) {
      selectedSearch = key;
      selectedSearchLength = key.length;
    }
    document.getElementById("search-field").style.background =
      "-webkit-linear-gradient" + searchEngines[selectedSearch][2];
    document.getElementById("search-field").style.background =
      "linear-gradient" + searchEngines[selectedSearch][2];
    document.getElementById("search-mode").style.color =
      searchEngines[selectedSearch][3];
    document.getElementById("search-mode").style.color =
      searchEngines[selectedSearch][3];
    document.getElementById("search-mode").innerHTML =
      searchEngines[selectedSearch][0];
  } else if (currentText.trim().toLowerCase() in bookmarks) {
    selectedBookmark = currentText.trim().toLowerCase();
    document.getElementById("search-field").style.background = "";
    document.getElementById("search-mode").innerHTML = "bookmark";
    document.getElementById("search-mode").style.color = "#ee0979 ";
    document.getElementById("search-field").style.background =
      "linear-gradient" + "(to right, #ee0979, #ff6a00)";
  } else if (!(key in searchEngines) && !(currentText.trim() in bookmarks)) {
    if (
      currentText.substr(0, selectedSearchLength) != selectedSearch ||
      selectedSearchLength == 0
    ) {
      clear();
    }
  }

  // then search on spacebar
  if (e.keyCode == 13) {
    if (selectedSearch != "") {
      window.open(
        searchEngines[selectedSearch][1] +
          currentText
            .trim()
            .substr(selectedSearch.length)
            .trim(),
        "_self"
      );
      document.getElementById("search-mode").innerHTML =
        searchEngines[selectedSearch][0] + '<span class="loading"></span>';
    } else if (selectedBookmark != "") {
      window.open(bookmarks[selectedBookmark][1], "_self");
    } else if (
      currentText.includes(".com") ||
      currentText.includes(".net") ||
      currentText.includes(".co") ||
      currentText.includes(".io") ||
      currentText.includes(".xyz") ||
      currentText.includes(".gov") ||
      currentText.includes(".org") ||
      currentText.includes(".se") ||
      currentText.includes(".fm") ||
      currentText.includes(".de") ||
      currentText.includes(".uk") ||
      currentText.includes(".gg") ||
      currentText.includes(".info") ||
      currentText.includes(".ai") ||
      currentText.includes(".ch") ||
      currentText.includes(".edu") ||
      currentText.includes(".gl") ||
      currentText.includes(".na") ||
      currentText.includes(".nz") ||
      currentText.includes(".so")
    ) {
      if (currentText.trim().includes(" ")) {
      } else {
        document.getElementById("search-mode").innerHTML =
          "url" + '<span class="loading"></span>';
        if (currentText.includes("http")) {
          window.open(currentText.trim(), "_self");
        } else {
          try {
            window.open("http://" + currentText.trim(), "_self");
          } catch (err) {
            document.getElementById("search-mode").innerHTML =
              "google" + '<span class="loading"></span>';
            window.open(
              "https://google.com/search?q=" + currentText.trim(),
              "_self"
            );
          }
        }
      }
    } else {
      document.getElementById("search-mode").innerHTML =
        "google" + '<span class="loading"></span>';
      window.open("https://google.com/search?q=" + currentText.trim(), "_self");
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
  document.getElementById("search-field").focus();
}

function closeall() {
  document.getElementById("search-field").value = "";
  document.getElementById("search-field").blur();
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
