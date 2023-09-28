<script>
    export let data;  // Directly use the item prop
    // const { item } = data;

    // If you need to console log
    console.log(data);
</script>

<h2>hello</h2>


<!-- <h1> { data.item.id } { data.item.name }</h1> -->

<h1> { data.item.id } </h1>
<h1> { data.item.brand } </h1>
<h1> { data.item.image_url } </h1>

<img src="/images/fragrance_images/acqua_di_gio.jpg" alt="My Image" />
<h1> Notes: </h1>
<u1>
    {#each data.item.notes as note (note.id) }
        <li>{ note.scent.name } { note.noteType}</li>
    {/each}
</u1>

