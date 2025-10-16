function getData(url) {
    return fetch(url)
        .then(result => {
            console.log('Fetch data: ', result);
            return result.json();
        })
        .then((json) => processData(json))
        .catch((error) => console.log('ERROR requst: ', error));
}

function processData(json) {
    console.log('catch error');
    console.log(json);
}

console.log('______Response OK__________');
getData('https://jsonplaceholder.typicode.com/todos/10');

console.log('______Error__________');
getData('https://api.example.com:8443/v1/reports');
