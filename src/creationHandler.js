import { linkToAddOnHeader } from "./renderableElemets.js";

export const addLinks = () => {
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", linkToAddOnHeader);
};

export const addBot = () => {
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", linkToAddOnHeader);
};
