const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("hello", () => {
  console.log("Event triggered");
});

emitter.emit("hello");


console.log(module.exports);
