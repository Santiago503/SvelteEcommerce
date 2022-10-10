<script>
  import { onMount } from "svelte";
  import { db } from "../models/db";
  import { products } from "../stores/productoStore";
  import Product from "../components/Product.svelte";

  onMount(() => {
    products.set(db);
  });
</script>

<div class="container">
 
  <h1>Productos</h1>
  <hr />
  <div class="row">
    {#each $products as product}
      <div class="col-12 col-md-4">
        <Product {product} />
      </div>
    {/each}
  </div>
</div>
