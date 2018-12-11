
import {fetchGetUrl} from '../utilities/api';



function extractFirst(arrayValue) {
    return arrayValue[0];
}

export class ProductDS {

    constructor() {
        
    }
    

    getProductByCategoryId(categoryId, cbSuccess,cbFail) {
        fetchGetUrl({ url: `categories/${categoryId}/products` }).then( products => 
            products.map(p => 
                ({
                    id: p.id,
                    name: p.name,
                    permalink: p.permalink,
                    sku: p.sku,
                    price: p.price,
                    regularPrice: p.regular_price,
                    salePrice: p.sale_price,
                    image: extractFirst(p.images)
                })
            ) 
        )
        .then(products => {
            cbSuccess(products);
        })
    }
}



