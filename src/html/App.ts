import { User } from "./User";

window.onload = () => {
  let title = document.querySelector("#title");
  const user = new User("Elon Musk", 50);
  if (title) title.innerHTML = user.hello();
};
