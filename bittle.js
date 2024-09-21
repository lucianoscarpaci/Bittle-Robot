const SerialPort = require('serialport').SerialPort;

class UART {
	constructor(path, baudRate, dataBits, stopBits, parity) {
		this.comPortB = new SerialPort({
			path: path,
			baudRate: baudRate,
			dataBits: dataBits,
			stopBits: stopBits,
			parity: parity,
		});

		this.comPortB.on('open', () => {
			console.log('Serial Port connected');
			this.comPortB.on('data', (data) => {
				console.log('>:^.^:>\n' + data);
			});
		});
	}
}

const comPortB = new UART('/dev/cu.usbmodem56D00039821', 115200, 8, 1, 'none');
