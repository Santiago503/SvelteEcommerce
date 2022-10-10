<script>

  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import { routes } from "./router/router";

</script>

<div>
  <Navbar />
  <Router {routes}/>
</div>