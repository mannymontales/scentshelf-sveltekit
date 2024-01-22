import { PUBLIC_BASE } from '$env/static/public';


/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const fragranceRes = await fetch(`${PUBLIC_BASE}/fragrance`);
    const fragranceData = await fragranceRes.json();
    
    const reviewRes = await fetch(`${PUBLIC_BASE}/review`);
    const reviewData = await reviewRes.json();

    // console.log(fragranceData);
    // console.log(brandData);
    
    return {
        props: {
            fragrance: fragranceData,
            review: reviewData
        }
    };
};