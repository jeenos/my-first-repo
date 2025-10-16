async function getData(url) {
    try {
        const result = await fetch(url);
        console.log('Fetch data:', result);

        const json = await result.json();
        processData(json);
    }

    catch (error) {
        console.log('ERROR request:', error);
    }
}

function processData(json) {
    console.log('catch error');
    console.log(json);
}

getData('https://jsonplaceholder.typicode.com/todos/10');
