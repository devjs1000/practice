import { readFileSync } from "fs";
import { spawnSync } from "child_process";
let fileData = readFileSync("cheat.c", "utf8");

setInterval(() => {
  const newFileData = readFileSync("cheat.c", "utf8");
  if (fileData !== newFileData) {
	  const res = spawnSync("bash", ['run.sh']);
	  const parseBuffer = (buffer) => {
		  if (buffer) {
			  return buffer.toString().trim();
		  }
		  return "";
	  };
	  console.log(parseBuffer(res.stdout));
	  
	  console.log();
  } else {
  }
  fileData = newFileData;
}, 1000);
