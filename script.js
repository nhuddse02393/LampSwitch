function SwitchButton(status, lamp) {
    this.status = status;
    this.lamp = lamp;

    this.connectToLamp = function (ElectricLamp) {
        ElectricLamp.status = this.status;
    }

    this.switchOff = function () {
        this.status = false;
    }

    this.switchOn = function () {
        this.status = true;
    }
};

function ElectricLamp(status) {
    this.status = status;

    this.turnOff = function () {
        this.status = false;
    }

    this.turnOn = function () {
        this.status = true;
    }
};

let electricLamp = new ElectricLamp(false);
let switchButton = new SwitchButton(false, electricLamp);
switchButton.connectToLamp(electricLamp);

for (let i = 0; i < 10; i++){
    switchButton.switchOn();
    switchButton.connectToLamp(electricLamp);
    switchButton.switchOff();
    switchButton.connectToLamp(electricLamp);
}