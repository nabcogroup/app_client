
import { fetchGet } from "./../utilities/api";


export class CategoryDS {

    constructor() {
        this.categories = [];
    }

    getParentCategories(callback) {

        fetchGet({ action: 'categories', query: '?parent=0' }).then(categories => {
            this.categories = categories;
            callback(this.categories);
        });
    }

    getCategoryByParentId(categoryId,callback) {
        
        fetchGet({ action: 'categories', query: `?parent=${categoryId}` }).then( response => {
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



