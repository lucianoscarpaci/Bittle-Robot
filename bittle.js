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

		this.robotMoves = new RobotMoves(this.comPortB);
	}

}

class RobotMoves {
	constructor(comPortB) {
		this.comPortB = comPortB;
	}

	async standUp() {
		setTimeout(() => {
			this.comPortB.write('kup');
		}, 4000);
	}

	async highFive() {
		setTimeout(() => {
			this.comPortB.write('kfiv');
		}, 7000);
	}

	async standDown() {
		setTimeout(() => {
			this.comPortB.write('d');
		}, 11000);
	}
}

const comPortB = new UART('/dev/cu.usbmodem56D00039821', 115200, 8, 1, 'none');
const raijin = comPortB.robotMoves;
raijin.standUp();
raijin.highFive();
raijin.standDown();