<script context="module">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import { Router, createRouter } from "@roxi/routify";
  import routes from "../.routify/routes.default.js";

  export const router = createRouter({ routes });
</script>

<Router {router} />

<style>
</style>
