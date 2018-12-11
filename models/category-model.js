
import { fetchGet } from "./../utilities/api";


function extractDisplay(display) {
    if(display === 'products') {
        return true
    }
    else {
        return false
    }
}

export class CategoryDS {

    constructor() {
        this.categories = [];
    }

    getParentCategories(callback,errCallback = null) {

        fetchGet({ action: 'categories' })
        .then(categories => categories.map(c => ({
                ...c,
                isProductDisplay: extractDisplay(c.display)
            }))
        )
        .then(categories => {
            callback(categories);
        });
    }

    getCategoryByParentId(categoryId,callback) {
        
        fetchGet({ action: 'categories/parent', query: `/${categoryId}` })
        .then(response => response.map(c => ({
            ...c,
            isProductDisplay: extractDisplay(c.display)
        }))
        )
        .then( response => {
            callback(response);
        });
    }
}

export function getCategories() {
    
    let categories = require('../db.json').categories;
    
    return categories;
}

export function getCategoryById(categoryId) {

    let categories = require('../db.json').room;
    //console.log(categories);
    return categories;
    
}



