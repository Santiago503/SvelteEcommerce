<script>
  import { firebase } from "../firebase/config";
  import { link, push } from "svelte-spa-router";
  import { user } from '../stores/authStore'


    const handleLogin = () => {
        push('/login');
    }

    const handleRegister = () => {
        push('/register');
    }
    
    const handleLogOut = async () => {
      await firebase.auth().signOut();
      user.set(null);
      push('/login');
    }
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <span class="text-white">E-Commerce</span>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a use:link class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
         <li class="nav-item">
          <a use:link class="nav-link active" aria-current="page" href="/products">Products</a>
        </li>
      </ul>
      <div class="d-flex">
        {#if $user}
          <button class="btn btn-danger mx-2" on:click={handleLogOut}>LogOut</button>
        {:else}
          <button class="btn btn-success mx-2" on:click={handleLogin}>Login</button>
          <button class="btn btn-info" on:click={handleRegister}>Register</button>
        {/if}
      </div>
    </div>
  </div>
</nav>
