<script>
  import { firebase } from "./firebase/config";
  import { onMount } from "svelte";
  import { routes } from "./router/router";
  import { user } from "./stores/authStore";

  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import CartCount from "./components/CartCount.svelte";

  onMount(() => {
    firebase.auth().onAuthStateChanged((userLog) => {
      if (userLog) {
        user.set(userLog);
      } else {
        user.set(null);
      }
    });
  });
</script>

<div>
  <Navbar />
  <div class="container text-center">
    <CartCount />
  </div>
  <Router {routes} />
</div>
