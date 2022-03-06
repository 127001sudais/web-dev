let fs = require("fs");

// readFile()
/** fs.readFile(__dirname + "/example.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error" + err);
  } else {
    console.log(data);
  }
});*/

// writeFile()
/** fs.writeFile(
  __dirname + "/write.txt",
  "this is sudais learning to code ",
  (err) => {
    if (err) {
      console.log("error: " + err);
    }
  }
);*/

//fs.createReadStream()
let readStream = fs.createReadStream(__dirname + "/example.txt","utf-8");
/*
readStream.on("data", (chunk) => {
  console.log(chunk);
});*/

//reading a file  and writing the exact same content in differet file
 let writeStream = fs.createWriteStream(__dirname+"/write.txt","utf-8");
/*
 readStream.on("data",(chunk)=>{
  writeStream.write(chunk)
})*/

// example of pipe
readStream.pipe(writeStream)