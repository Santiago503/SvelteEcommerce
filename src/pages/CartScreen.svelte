<script>
  import { link } from "svelte-spa-router";
  import { user } from "../stores/authStore";
</script>

<div class="text-center my-5">
  {#if $user}
    <h1>Bienvenido Xd</h1>
  {:else}
    <h2>Login Required</h2>
    <div class="row m-5">
      <div class="col-12 col-md-6 text-center ">
        <a href="/login" class="btn btn-success w-100" use:link>Login</a>
      </div>
      <div class="col-12 col-md-6 text-center ">
        <a href="/register" class="btn btn-warning w-100" use:link>Register</a>
      </div>
    </div>
  {/if}
</div>
