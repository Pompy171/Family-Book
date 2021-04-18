var i = 0
var family_Album = [
    "https://static.skillshare.com/uploads/project/29895/cover_1242_1e3c660818a00a94076f830670950e2b.gif"
    , "https://us.123rf.com/450wm/yupiramos/yupiramos1904/yupiramos190413303/121007296-little-girl-kid-character-vector-illustration-design.jpg?ver=6"
    , "https://www.pinclipart.com/picdir/middle/35-353068_mother-with-short-brown-hair-clip-art-at.png"
    , "https://www.seekpng.com/png/detail/373-3737886_man-clipart-dad-animated-picture-of-father.png"
];
var names = ["Me","My sister",
            "My mother",
            "My Dad"];
function Next() {
    document.getElementById("family_Album").src = family_Album[i];
    document.getElementById("name").innerHTML = names[i];

    i++;
    if (i == 4) {
        i = 0;
    }