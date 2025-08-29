// Parent Class
class Smartphone {
    protected isOn: boolean = false;

    turnOn(): void {
        this.isOn = true;
        console.log("Phone is now ON");
    }

    turnOff(): void {
        this.isOn = false;
        console.log("Phone is now OFF");
    }

    checkStatus(): void {
        console.log(`Phone status: ${this.isOn ? "ON" : "OFF"}`);
    }
}

// Child Class 1: IPhone
class IPhone extends Smartphone {
    private faceIDEnabled: boolean = false;

    enableFaceID(): void {
        if (!this.isOn) {
            console.log("Cannot enable Face ID. Turn on the phone first.");
            return;
        }

        this.faceIDEnabled = true;
        console.log("Face ID Enabled");
    }

    checkFaceIDStatus(): void {
        console.log(`Face ID: ${this.faceIDEnabled ? "Enabled" : "Disabled"}`);
    }
}

// Child Class 2: AndroidPhone
class AndroidPhone extends Smartphone {
    private fingerprintEnabled: boolean = false;

    enableFingerprintUnlock(): void {
        if (!this.isOn) {
            console.log("Cannot enable Fingerprint Unlock. Turn on the phone first.");
            return;
        }

        this.fingerprintEnabled = true;
        console.log("Fingerprint Unlock Enabled");
    }

    checkFingerprintStatus(): void {
        console.log(`Fingerprint Unlock: ${this.fingerprintEnabled ? "Enabled" : "Disabled"}`);
    }
}

// ------------------- Usage ------------------- //

const myiPhone = new IPhone();
console.log("Using iPhone:");
myiPhone.turnOn();                // Inherited from Smartphone
myiPhone.checkStatus();           // Inherited from Smartphone
myiPhone.enableFaceID();          // Specific to IPhone
myiPhone.checkFaceIDStatus();     // Specific to IPhone

// Uncommenting the line below would result in a TypeScript error
// myiPhone.enableFingerprintUnlock(); // Not available on IPhone

console.log("\nUsing Android Phone:");
const myAndroid = new AndroidPhone();
myAndroid.turnOn();               // Inherited from Smartphone
myAndroid.checkStatus();          // Inherited from Smartphone
myAndroid.enableFingerprintUnlock(); // Specific to AndroidPhone
myAndroid.checkFingerprintStatus();  // Specific to AndroidPhone

// Uncommenting the line below would result in a TypeScript error
// myAndroid.enableFaceID(); // Not available on AndroidPhone
