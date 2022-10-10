<script>
  import { link, replace } from "svelte-spa-router";
  import { user } from "../stores/authStore";
  import { cart } from "../stores/productoStore";

  let price = 0;

  $cart.map((product) => {
    price += product.precio
  })

  const handlePay = () => {
    replace("/paid");
  }

</script>

<div class="text-left my-5">
  {#if $user}
    <div class="container row">
        <div class="text-left col-12 col-md-8">
          <h5>Products Cart</h5>
          <ul>
            {#each $cart as prod }
              <li>{ prod.nombre }</li>
            {/each}
          </ul>
          <hr>
            <h4>SubTotal : ${(price - price * 0.18).toFixed(2)}</h4>
            <h4>ITBIS : ${(price * 0.18).toFixed(2)}</h4>
            <h4>Envio : ${(price * 0.10).toFixed(2)}</h4>
            <hr>
            <h3>Total a Pagar : ${(price * 1.1).toFixed(2)}</h3>
            <button class="btn btn-success" on:click={handlePay}>Realizar pago</button>
        </div>
    </div>
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
