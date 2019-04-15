// 1.  Select the H1
var heading = $('h1');
console.log(heading)

// 2.  Select all of the list items
var listItems = $('li');
console.log(listItems)

// 3.  Select only the last list item
var listItem = $('ul li').eq(2);

/* or */

var listItem = $('li').last();

/* or */

var listItem = $('li:nth-of-type(3)');

console.log(listItem)