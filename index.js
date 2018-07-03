import readingTime from "reading-time";

var bodyContent = document.getElementById("readingText");

var stats = readingTime(bodyContent.innerText).text;

document.getElementById("readingTimeElem").innerText = stats;
