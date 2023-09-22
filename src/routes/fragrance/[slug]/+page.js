import { PUBLIC_BASE } from "$env/static/public";
// import { PUBLIC_BASE } from "$lib/constants"
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    
    //console.log(params);

    const id = parseInt(params.slug);
    //console.log(id);
    //console.log(PUBLIC_BASE);
    // console.log('env.base');
    const res = await fetch(`${PUBLIC_BASE}/scent/${id}`);
    const item = await res.json();

    // return { item };
    return { props: { data: item } };
};
