<script>

    export let data;

    console.log(data.props.fragrance);
    console.log(data.props.review);
</script>

{#each data.props.fragrance as scent }
    <h1> { scent.id } { scent.name }</h1>
    
{/each}

{#each data.props.review as review }

    <h2> {review.review_text}</h2>
    
{/each}

