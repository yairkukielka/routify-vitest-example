<script context="module">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import { Router, createRouter } from "@roxi/routify";
  import routes from "../.routify/routes.default.js";

  export const router = createRouter({ routes });
</script>

<Router {router} />

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
