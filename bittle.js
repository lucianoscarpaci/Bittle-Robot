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

	async standUp(delay) {
		try {
			setTimeout(() => {
				this.comPortB.write('kup');
			}, delay);
		} catch (error) {
			console.error('An error occurred: ', error);
		}
	}

	async highFive(delay) {
		try {
			setTimeout(() => {
				this.comPortB.write('kfiv');
			}, delay);
		} catch (error) {
			console.error('An error occurred: ', error);
		}
	}

	async standDown(delay) {
		try {
			setTimeout(() => {
				this.comPortB.write('d');
			}, delay);
		} catch (error) {
			console.error('An error occurred: ', error);
		}
	}
}

const comPortB = new UART('/dev/cu.usbmodem56D00039821', 115200, 8, 1, 'none');
const raijin = comPortB.robotMoves;
raijin.standUp(4000);
raijin.highFive(7000);
raijin.standDown(11000);