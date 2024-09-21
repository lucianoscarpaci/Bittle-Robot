const SerialPort = require('serialport').SerialPort;
/*
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
*/
class UART {
	constructor(port, baudRate, dataBits, stopBits, parity) {
		this.comPortB = new SerialPort(port, {
			baudRate: baudRate,
			dataBits: dataBits,
			stopBits: stopBits,
			parity: parity,
		});

		this.comPortB.on('open', function () {
			console.log('Serial Port connected');
			this.comPortB.on('data', function (data) {
				console.log('>:^.^:>\n' + data);
			});
		});
		
	}
}