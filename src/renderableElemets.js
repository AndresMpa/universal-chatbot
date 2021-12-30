const linkToAddOnHeader = `
<link
  rel="icon"
  type="image/x-icon"
  href="https://www.pngarts.com/files/1/Human-Brain-PNG-Photo.png"
/>
<link
  rel="stylesheet"
  crossorigin="anonymous"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
/>
`;

const entireBody = `
<style>
/* Basic */
:root {
  --userText: darkslateblue;
  --userBox: lightpink;

  --botText: darkolivegreen;
  --botBox: lightgray;

  --chatInput: lightgreen;
  --second: lightgray;
}

* {
  margin: 0%;
  padding: 0%;
}

/* Container */
#chatbotContainer {
  flex-direction: column;
  margin-left: auto;
  display: flex;

  position: fixed;
  z-index: 999;
  right: 50px;
  top: 10px;

  border: 1px solid var(--second);
  border-radius: 8px;
  overflow-y: auto;
  height: 90vh;
  width: 40%;
}

/* Chat */
#chatbot {
  display: flex;
  flex-direction: column;

  padding: 8px 0;
  right: 0;
}

/* Chat messages */
.message {
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding: 0.5% 2%;
}
.message figure,
.message p {
  display: inline-flex;
}
.message p {
  margin: 0 10px;
  width: 80%;
}
.message figure {
  background-color: var(--second);
  border-radius: 35%;
  padding: 0.5%;
}
.message figure img {
  height: 40px;
  width: 40px;
}

/* User messages */
.userMessage {
  justify-content: flex-end;
}
.userMessage p {
  padding: 1.2%;
  border-radius: 8px;
  color: var(--userText);
  justify-content: flex-end;
  background-color: var(--userBox);
}

/* Bot messages */
.botMessage {
  justify-content: flex-start;
}
.botMessage p {
  padding: 1.2%;
  border-radius: 8px;
  color: var(--botText);
  justify-content: flex-start;
  background-color: var(--botBox);
}

/* Chat input */
#chatInput {
  margin-top: auto;
  display: flex;
}
#chatInput article {
  width: 100%;
  padding: 0.8% 1.2%;
  background-color: var(--chatInput);
}
#chatInput article input {
  width: 88%;
  border: none;
  padding: 0.8% 0.5%;
  border-radius: 8px;
  margin-left: 5px;
}
#chatInput article button {
  border: none;
  padding: 0.5%;
  border-radius: 50%;
}

/* Bot styling */
#logo {
  position: fixed;
  z-index: 999;
  bottom: 10px;
  right: 10px;
}
#logo figure img {
  height: 35px;
  width: 40px;

  padding: 2%;
}
<style>
<!--Chat-->
<div id="chatbotContainer">
  <section id="chatbot">
    <article class="botMessage message">
      <figure>
        <img
          alt="Bot"
          src="https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png"
          srcset=""
        />
      </figure>
      <p>Hola, soy libro ¿En que puedo ayudarte?</p>
    </article>
  </section>
  <section id="chatInput">
    <article>
      <input
        type="text"
        name="message"
        id="userMessageInput"
        placeholder="Hola, escribe tu consulta"
      />
      <button id="sendButton">
        <i class="fas fa-paper-plane"></i>
      </button>
      <button id="microphoneButton">
        <i class="fas fa-microphone"></i>
      </button>
    </article>
  </section>
</div>
<!--Logo-->
<section id="logo">
  <figure>
    <img
      alt="Brain"
      src="https://www.pngarts.com/files/1/Human-Brain-PNG-Photo.png"
      srcset="https://www.pngarts.com/files/1/Human-Brain-PNG-Photo.png"
    />
  </figure>
</section>
`;

const botAvatar =
  "https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png";

const userAvatar =
  "https://cdn.pixabay.com/photo/2021/02/12/07/03/red-icon-6007530_1280.png";

const messageGenerator = (msg) => `
<p>${msg}</p>
`;

const avataGenerator = (avatar) => `
<figure title="Avatar">
<img
  alt="Avatar"
  src="${avatar}"
  srcset="${avatar}"
/>
</figure>`;

export {
  botAvatar,
  userAvatar,
  entireBody,
  avataGenerator,
  messageGenerator,
  linkToAddOnHeader,
};
