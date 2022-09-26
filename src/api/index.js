
const FetchApi = async (url) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'get' 
        })
            .then(function (response) {
                resolve(response.json());
            })
            .catch(function (err) {
                reject(err)
            });
    })
        .then((data) => data)
        .catch((error) => error)
}

export default FetchApi;