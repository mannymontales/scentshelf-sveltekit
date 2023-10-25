import { PUBLIC_BASE } from "$env/static/public";
// import { PUBLIC_BASE } from "$lib/constants"
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    
    const id = parseInt(params.slug);

    const fragranceResponse = await fetch(`${PUBLIC_BASE}/fragrance/${id}`);
    const fragranceData = await fragranceResponse.json();

    const reviewRes = await fetch(`${PUBLIC_BASE}/review`);
    const reviewData = await reviewRes.json();
    // console.log(item);

    return { 
        props: {
            fragrance: fragranceData,
            review: reviewData
        }
     };
    // return { props: { item } };
    // return { props: { data: item } };
    // return { item };


};
