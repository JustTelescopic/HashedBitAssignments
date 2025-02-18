
function countWords(paragraph) {
  return paragraph.split(/s+/).length;
}

let paragraph = "This is a sample paragraph with several words.";
console.log(countWords(paragraph)); // 6
  