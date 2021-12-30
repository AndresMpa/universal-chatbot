import { logoHandler } from "./src/eventHandler.js";
import { messageHandler } from "./src/handleMessage.js";
import { addLinks } from "./src/creationHandler.js";

(() => {
  //addBot();
  addLinks();
})();
messageHandler();
logoHandler();
