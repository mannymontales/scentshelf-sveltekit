// import { BASE_URL } from '$lib/constants';
// const API_BASE_URL = "http://localhost:8080/api"


// Single (') and Double (") Quotes:

// Used for defining standard string literals.
// Variables and expressions inside them are not evaluated.


// Backticks (`):

// Introduced in ES6, they define template literals.
// Allow for embedded expressions. These expressions inside the ${} syntax in the template literal get evaluated and concatenated with the rest of the string.
// Can span multiple lines without needing any special character.

// Use single or double quotes for regular strings.
// Use backticks when you need to embed variables or 
// expressions within a string or when you need a multiline string.

import { PUBLIC_BASE } from "$env/static/public";


// import { PUBLIC_BASE } from "$lib/constants"
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    
    //console.log(PUBLIC_BASE);
    // console.log('env.base');
    const res = await fetch(`${PUBLIC_BASE}/fragrance`);
    const item = await res.json();

    return { item };
};