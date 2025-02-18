
let str = "The quick brown fox jumps over the lazy dog";
let vowels = 'aeiouAEIOU';
let consonantsCount = 0;
let vowelsCount = 0;

for (let char of str) {
  if (vowels.includes(char)) {
    vowelsCount++;
  } else if (/[a-zA-Z]/.test(char)) {
    consonantsCount++;
  }
}

console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`);
  