const fs = require("fs");

fs.readFile("./operations/data.txt", (err, data) => {
  if (err) console.log(err.message);
  else {
    fs.unlinkSync("./operations/data.txt", (err, data) => {
      console.log('file deleted', data, err);
    })
  }
})

