// Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.
// In other words, it helps two incompatible interfaces to work together.
// The Adapter pattern acts as a wrapper between two objects.

interface IPhone{
    useLightning();
}

interface Android{
    useMicroUSB();
}

class iPhone12 implements IPhone {
    useLightning() {
        console.log('Using lightning port..');
    }
}

class GooglePixel implements Android {
    useMicroUSB() {
        console.log('Using micro USB...');
    }
}

// -----
class LightningToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    useMicroUSB() {
        console.log('Want to use micro USB, converting...');
        this.iphoneDevice.useLightning();
    }
}

let iphone = new iPhone12();
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);

chargeAdaptor.useMicroUSB();