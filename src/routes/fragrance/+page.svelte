<script>
    import { onMount } from 'svelte';
    import { fetchScents } from '$lib/ScentService';

    let scents = [];
    let error;

    onMount(async () => {
        try {
            scents = await fetchScents();
        } catch (e) {
            error = e.message;
        }
    });
</script>

{#if error}
    <p>Error: {error}</p>
{:else}
    <ul>
        {#each scents as scent}
            <li>{scent.id}: {scent.name}</li>
        {/each}
    </ul>
{/if}


  

