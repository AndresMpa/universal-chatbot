export const logoHandler = () => {
  const chatbotContainer = document.querySelector("#chatbotContainer");
  const logo = document.querySelector("#logo");

  logo.addEventListener("click", () => {
    if (chatbotContainer.style.display !== "flex") {
      chatbotContainer.style.display = "flex";
    } else {
      chatbotContainer.style.display = "none";
    }
  });
};
