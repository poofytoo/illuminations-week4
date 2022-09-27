import prompt from "prompt";
import { SerialPort } from "serialport";

const port = new SerialPort({
  path: "/dev/cu.usbmodem14401",
  baudRate: 9600,
});

prompt.start();

while (true) {
  const { command } = await prompt.get("command");
  await port.write(command);
}

