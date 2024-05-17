import "./app.css";
import App from "./App.svelte";
import { mount } from "svelte";
function mountApp(target1) {
  const app = mount(App, { target: document.getElementById("app") });
  return app;
}
mountApp();

// const app = new App({
//   target: document.getElementById("app"),
// });

export default app;
