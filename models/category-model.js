


export function getCategories() {
    
    let categories = require('../db.json').categories;
    
    return categories;
}

export function getCategoryById(categoryId) {

    let categories = require('../db.json').room;
    console.log(categories);
    return categories;
}

