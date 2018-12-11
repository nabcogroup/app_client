const httpUrl = "http://b204385c.ngrok.io";

export function fetchGet(req) {
    
    let action = (req.action) ? req.action : "";
    let query = (req.query) ? req.query : "";

    const url = httpUrl + (req == null ? "" : "/" + action + query);
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err))
}

export function fetchGetUrl(req) {

    const url = httpUrl + "/" + req.url;
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err));
}

export function prefetchGet(req) {
    
}