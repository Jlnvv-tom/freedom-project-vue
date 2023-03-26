// interface KeyboardInputManager {
//   eventTouchstart: string;
//   eventTouchmove: string;
//   eventTouchend: string;
// }

class KeyboardInputManager {
  public events: any;
  public eventTouchstart: string;
  public eventTouchmove: string;
  public eventTouchend: string;
  constructor() {
    this.eventTouchstart = "touchstart";
    this.eventTouchmove = "touchmove";
    this.eventTouchend = "touchend";
    this.events = {};
  }

  on(event: string, callback: Function) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    console.log(event, callback);
  }

  emit(event: string, data: any): void {
    let callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach((callback: Function) => {
        callback(data);
      });
    }
  }

  listen() {}
}
const keyboardInputManager = new KeyboardInputManager();
export default keyboardInputManager;
