

const httpUrl = "http://e0dbb966.ngrok.io";

export function fetchGet(req) {
    
    let action = (req.action) ? req.action : "";
    let query = (req.query) ? req.query : "";

    const url = httpUrl + (req == null ? "" : "/" + action + query);
    console.log(url);
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err))
}