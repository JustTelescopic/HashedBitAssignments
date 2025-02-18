
function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

let sentence = "I love my Inida";
console.log(correctfn(sentence, "Inida", "India"));
  