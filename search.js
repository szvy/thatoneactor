const searchbarsigmaprompts = [
    "Try your favorite movie!",
    "Sugar Free!",
    "// remove this from prod",
    "Enter a classic... or that one random movie you saw 5 years ago and cant forget about",
    "Action? Drama? Try it here!",
    "Type a movie title here!",
    "Who's that one actor?",
    "Instant cast reveal; try it!",
    "Looking for Oscar winners?",
    "Enter a movie, get the stars!"
];

function setthegoatedplaceholder() {
    const prompt = searchbarsigmaprompts[Math.floor(Math.random() * searchbarsigmaprompts.length)];
    document.getElementById('movieInput').placeholder = prompt;
}

window.onload = setthegoatedplaceholder;
