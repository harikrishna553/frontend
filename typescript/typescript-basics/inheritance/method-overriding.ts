// Base class
class Teacher {
  teach(): void {
    console.log("Teaching students using a whiteboard.");
  }

  takeAttendance(): void {
    console.log("Marking attendance from register.");
  }

  conductExam(): void {
    console.log("Conducting exam in classroom.");
  }
}

// Child class - Overrides 'teach'
class MathTeacher extends Teacher {
  teach(): void {
    console.log("Teaching mathematics using a projector.");
  }
}

// Child class - Overrides 'teach'
class MusicTeacher extends Teacher {
  teach(): void {
    console.log("Teaching music using harmonium and tabla.");
  }
}

// Child class - Inherits 'teach' without overriding
class HistoryTeacher extends Teacher {
  // No override — uses base class implementation of 'teach'
}

// Child class - Overrides 'teach' with optional parameter
class ScienceTeacher extends Teacher {
  teach(topic?: string): void {
    if (topic) {
      console.log(`Teaching science topic: ${topic} with experiments.`);
    } else {
      console.log("Teaching science with general models and experiments.");
    }
  }
}

const krishna = new MathTeacher();
krishna.teach();              // Output: Teaching mathematics using a projector.
krishna.takeAttendance();     // Output: Marking attendance from register.
krishna.conductExam();        // Output: Conducting exam in classroom.

const harini = new MusicTeacher();
harini.teach();               // Output: Teaching music using harmonium and tabla.
harini.takeAttendance();      // Output: Marking attendance from register.

const thulasi = new HistoryTeacher();
thulasi.teach();              // Output: Teaching students using a whiteboard.
thulasi.takeAttendance();     // Output: Marking attendance from register.

const ram = new ScienceTeacher();
ram.teach();                  // Output: Teaching science with general models and experiments.
ram.teach("Biology");         // Output: Teaching science topic: Biology with experiments.
