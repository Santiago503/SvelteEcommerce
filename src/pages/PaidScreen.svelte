<script>
  import { cart } from "../stores/productoStore";
  import { replace } from "svelte-spa-router";
  import  { v4 as uuid } from 'uuid'

  const id = uuid()
  cart.set([]);

</script>

<div class="text-center ">
    <h2>Pedido #{id} - Exitoso</h2>
    <button class="btn btn-dark" on:click={() => replace("/products")}>Seguir Comprando</button>
</div>
