const items = document.querySelectorAll('li.item'); 

console.log(`Nubers of categories: ${items.length}`);

items.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);
    const counts = category.querySelectorAll('li').length 
    console.log(`Elements: ${counts}`);
})

