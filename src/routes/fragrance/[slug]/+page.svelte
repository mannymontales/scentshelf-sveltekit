<!-- <script>
    /** @type {import('./$types').PageData} */

    import { page } from '$app/stores';
    export let data;
    //const { item } = data;

    
    console.log(data);
</script>

<h1> { data.id } { data.name }</h1> -->

<!-- {#each item as scent }
<h1> { scent.id } { scent.name }</h1>

{/each} -->

<script>
    export let data;
    console.log(data)
</script>

<h1>{data.id} {data.name}</h1>


