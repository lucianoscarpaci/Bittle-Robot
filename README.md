# Raijin-Robot
Serial Communication API Frontend for Bittle Robot

### basic connection guide
read bittle data from the serial port

```javascript
const SerialPort = require('serialport').SerialPort;
const comPortB = new SerialPort({
	path: '/dev/cu.usbmodem56D00039821',
	baudRate: 115200,
	dataBits: 8,
	stopBits: 1,
	parity: 'none',
});

comPortB.on('open', function () {
	console.log('Serial Port connected');
	comPortB.on('data', function (data) {
		console.log('>:^.^:>\n' + data);
	});
});
```
### once connected write a move to the serial port
write async functions to control the robot \\
add k to the beginning of the bittle move \\
and a wait time to the end of the move

```javascript
async up() {
	setTimeout(() => {
		this.comPortB.write('kup');
	}, 3000);
}
up();
```

