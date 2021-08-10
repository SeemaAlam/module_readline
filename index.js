//core module
//emitting and event
const EventEmitter = require("events");
const eventEmit = new EventEmitter();

const {sendVarE,sendWelcome}=require("./varEmai");
const register=()=>{
    eventEmit.on("user registered", sendVarE);
    eventEmit.on("user registered", sendWelcome);//no need to invoke function
    eventEmit.emit("user registered",{ email :"abx@d.com"})
}

register()

//listening to that event


//name shall be same as following
// eventEmit.on("Taking lecture", ({name}) => {
//   console.log(`Listener 1 ${name}`);
// });

// eventEmit.on("Taking lecture", (nameobj) => {
//     console.log(`Listener 2 ${nameobj.name}`);
//   });

// //name of the event
// eventEmit.emit("Taking lecture",{name:"Seema"});
