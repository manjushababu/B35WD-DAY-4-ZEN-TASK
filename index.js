// 4 steps inlovled for XMLHTTP request

// Establish and XMLHTTP request that will create an object to interact between client and server via APIs
const request = new XMLHttpRequest();

// Open the request using open method that takes in 2 parameters
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');

// Sending the request
request.send();

// Once data is loaded successfully from the server the response is triggered back with status code of 200
request.onload = () => {
    // The data in the server is stored in string format
    // inorder to perform a set of operations with the data we need to parse the response 
    // to object format using JSON.parse
    const data = JSON.parse(request.response);
    data.forEach((val) => {
        console.log(`Flag: ${val.flag}, Country name: ${val.name}, region: ${val.region}, sub-region: ${val.subregion}, population: ${val.population}`);
    });
}

// To compare if the two JSON have the same properties without order we can make use of Lodash utility library

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log( _.isEqual(obj1, obj2) ? 'Object is equal' : 'Object is not equal' );
