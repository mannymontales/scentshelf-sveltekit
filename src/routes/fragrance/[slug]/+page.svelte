<script>
    export let data;  // Directly use the item prop
    // const { item } = data;
    console.log(data);
</script>

<div class="content">
<h1> { data.props.fragrance.brand } { data.props.fragrance.name } </h1>
<img src= { data.props.fragrance.image_url } alt="My Image" />
</div>


<h1> Notes: </h1>

<u1>
    {#each data.props.fragrance.notes as note (note.id) }
        <li>{ note.scent.name } { note.noteType }</li>
    {/each}
</u1>

<h1> Reviews: </h1>

{#each data.props.review as review}

    <h2> {review.review_text}</h2>
{/each}


<style>
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px;
    }
    h1 {
      font-size: 36px;
      font-weight: bold;
      /* text-align: left; */
    }
  
    /* img {
      max-width: 30%;
      /* display: block;
      margin: 0 auto; 
    } */
  </style>

