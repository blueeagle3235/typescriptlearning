import { Greeter } from "./Greeter";

window.onload = () => {
  let title = document.querySelector("#title");
  const greeter = new Greeter("world");
  if (title) title.innerHTML = greeter.greet();
};
