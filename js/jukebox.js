/*eslint-env browser*/

// GETS ELEMENT FROM DOM
var $ = function (id) {
    "use strict";
    var obj = document.getElementById(id);
    if (obj === null) {
        window.console.log(id + " is null");
    }
    return obj; 
};

var albums = [
    ["Tool", "Lateralus"],
    ["Jinjer", "Cloud Factory"],
    ["Holy Grail", "Times of Pride and Peril"]
];

var Jukebox = function () {
    "use strict";
    var albums = [], self;
    
    self = {
        //ADD EACH ALBUM TO THE ALBUMS ARRAY
        addAlbum: function (album) {
            albums.push(album);
        },
        getAlbum: function (index) {
            return albums[index];
        },
        //RETURN THE ALBUM THAT'S BEEN PLAYED THE MOST
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};
//CREATE AN ALBUM CLASS
var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        //INCREASE THE AMOUNT OF TIMES AN ALBUM HAS BEEN PLAYED
        play: function () {
            self.played += 1;
        },
        //DISPLAY THE AMOUNT OF TIMES ALBUM HAS BEEN PLAYED
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};
//POPULATE JUKEBOX
var jbox;
function popJukeBox() {
    "use strict";
    jbox = new Jukebox();
    var i;
    for (i = 0; i < albums.length; i += 1) {
        jbox.addAlbum(new Album(albums[i][0], albums[i][1])); 
    }
}


//POPULATE DROPDOWN
function popDropDown() {
    "use strict";
    var i, s, dropDown;
    dropDown = $('dropdown');
    //var i, s;
    for (i = 0; i < albums.length; i += 1) {
        s = albums[i][0] + " - " + albums[i][1];
        dropDown[dropDown.length] = new Option(s, s);
    }
}
//DISPLAYS THE NAME OF ALBUM
//CALL PLAY FUNCTION
function playAlbum() {
    "use strict";
    var dropDown, i, s, currentlyPlaying;
    dropDown = $('dropdown');
    i = dropDown.selectedIndex;
    s = "Currently playing: " + albums[i][0] + " - " + albums[i][1];
    currentlyPlaying =  $('currentlyPlaying');
    currentlyPlaying.innerHTML = s;
    jbox.getAlbum(i).play();
}

function showFavoriteAlbum() {
    "use strict";
    var showFav = $('showFavDiv');
    showFav.innerHTML = jbox.favoriteAlbum();
}

//HANDLES ALL EVENT LISTENERS
function init() {
    "use strict";
    popDropDown();
    popJukeBox();
    $('playBtn').addEventListener("click", playAlbum);
    $('showFavBtn').addEventListener("click", showFavoriteAlbum);
    
}
window.addEventListener("load", init);
