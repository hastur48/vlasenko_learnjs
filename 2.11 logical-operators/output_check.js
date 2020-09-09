console.log( null || 2 || undefined, '\n___'); // 2
console.log( console.log(1) || 2 || console.log(3), '\n___'); // 1 2
console.log( 1 && null && 2, '\n___'); // null
console.log( console.log(1) && console.log(2), '\n___'); // 1 undefined
console.log( null || 2 && 3 || 4, '\n___'); // 3