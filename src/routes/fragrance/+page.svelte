<script>

    export let data;

    // const { item } = data;
    // console.log(data);
    
</script>

{#each data.item as fragrance }

    <h1><a href={`/fragrance/${fragrance.id}`}> {fragrance.brand} {fragrance.name} </a></h1>

{/each}

  

