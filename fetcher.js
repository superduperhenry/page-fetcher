const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localPath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    throw error;
  }
  fs.writeFile(localPath, body, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
  });
});