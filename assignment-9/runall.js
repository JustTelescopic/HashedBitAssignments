const { exec } = require('child_process');

// Array of file names
const files = [
  '9.1.js',
  '9.2.js',
  '9.3.js',
  '9.4.js',
  '9.5.js',
  '9.6.js',
  '9.7.js',
  '9.8.js',
  '9.9.js',
  '9.10.js'
];

// Execute all files
files.forEach((file) => {
  exec(`node .\\${file}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ${file}:`, error);
      return;
    }
    if (stderr) {
      console.error(`stderr for ${file}:`, stderr);
      return;
    }
    console.log(`Output of ${file}:`, stdout);
  });
});
