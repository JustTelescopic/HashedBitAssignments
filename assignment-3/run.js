const fs = require('fs');
const { exec } = require('child_process');

// List of the files in the sequence you want to run
const files = [
  '3-1.js',
  '3-2.js',
  '3-3.js',
  '3-4.js',
  '3-5.js',
  '3-6.js',
  '3-7.js',
  '3-8.js',
  '3-9.js',
  '3-10.js',
  '3-11.js'
];

// Function to run a file using Node.js
function runFile(file) {
  return new Promise((resolve, reject) => {
    exec(`node ${file}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error running ${file}: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`stderr from ${file}: ${stderr}`);
        return;
      }
      console.log(`Output from ${file}:`);
      console.log(stdout);
      resolve();
    });
  });
}

// Run all files sequentially
async function runFilesSequentially() {
  for (let file of files) {
    try {
      await runFile(file);
    } catch (error) {
      console.error(error);
    }
  }
  console.log("All files executed successfully.");
}

runFilesSequentially();
