<script>
  import { cart } from "../stores/productoStore";

  export let product;

  const handleAddCart = () => {
    cart.set([...$cart, product]);
    console.log($cart);
  };
</script>

<div class="card m-3 " style="width: 18rem; ">
    <img
      src={product.img}
      alt={product.nombre}
      class="card-img-top"
      loading="lazy"
    />

    <div class="card-body text-center">
      <h5 class="card-title"> {product.nombre} </h5>
      <div class="card-text">
        ${product.precio} MXN
      </div>
      <button class="btn btn-success" on:click={handleAddCart}
        >Agregar al Carrito</button
      >
    </div>
</div>
