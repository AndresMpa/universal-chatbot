import * as html from "./renderableElemets.js";

const userMessageInput = document.querySelector("#userMessageInput");

const createMessage = (msg, avatar, messageClass, from = 1) => {
  const chatbot = document.querySelector("#chatbot");
  let newMessage = document.createElement("article");
  newMessage.classList.add(messageClass);
  newMessage.classList.add("message");
  from
    ? (newMessage.innerHTML =
        html.messageGenerator(msg) + html.avataGenerator(avatar))
    : (newMessage.innerHTML =
        html.avataGenerator(avatar) + html.messageGenerator(msg));

  chatbot.appendChild(newMessage);
};

const getAnswer = (dataToBeFetched) => {
  let botResponse = [`Para "${dataToBeFetched}" encontre:`];
  botResponse.forEach((resAsMsg) => {
    createMessage(resAsMsg, html.botAvatar, "botMessage", 0);
  });
};

export const messageHandler = () => {
  const sendButton = document.querySelector("#sendButton");

  userMessageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      createMessage(userMessageInput.value, html.userAvatar, "userMessage");
      getAnswer(userMessageInput.value);
      userMessageInput.value = "";
    }
  });
  sendButton.addEventListener("click", () => {
    createMessage(userMessageInput.value, html.userAvatar, "userMessage");
    getAnswer(userMessageInput.value);
    userMessageInput.value = "";
  });
};
