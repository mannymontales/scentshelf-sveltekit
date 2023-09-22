<script>

    export let data;
    const { item } = data;
    console.log(data);

</script>

{#each item as scent }
    <h1> { scent.id } { scent.name }</h1>
    
{/each}

  

