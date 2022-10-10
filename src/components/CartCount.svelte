<script>
    import { link } from 'svelte-spa-router';
    import { cart } from '../stores/productoStore'
</script>

<h4 class="title">Cart: {$cart.length} Products</h4>
{#if $cart.length > 0}
    <a use:link href="/cart" class="btn btn-primary btn-sm">Go to Cart</a>
{/if}