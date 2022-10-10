<script>
    import { push } from 'svelte-spa-router'


    const handleBack = () => {
        push('#/');
    }
</script>

<div class="container text-center">
    <h1>404 Pagina no encontrada</h1>
    <button class="btn btn-primary" on:click={handleBack}>
        Go to Home
    </button>

</div>