/*
  Simple Node App to Listen to the Serial Port
*/

import { SerialPort, ReadlineParser } from "serialport";

// Use a `\r\n` as a line terminator
const parser = new ReadlineParser({
  delimiter: "\r\n",
});

const port = new SerialPort({
  path: "/dev/cu.usbmodem14401",
  baudRate: 9600,
});

port.pipe(parser);
port.on("open", () => {
  console.log("Port open");
});
parser.on("data", (data) => {
  console.log(data);
});



