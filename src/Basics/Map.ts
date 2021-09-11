let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);

//set(key, value) is upsert
myMap.set("key1", "updated value1"); //update as key1 exists
myMap.set("key3", "value3"); // insert as key3 not exist

//get(key)
console.log(myMap.get("key3"));
console.log(myMap.get("key4")); //undefined

//.delete(key)
//.clear()

//1. Iterate over map keys
for (let key of Array.from(myMap.keys())) {
    console.log(key);
}

//2. Iterate over map values
for (let value of Array.from(myMap.values())) {
    console.log(value);
}

//3. Iterate over map entries
for (let entry of Array.from(myMap.entries())) {
    console.log(entry);
}

//4. Using object destructuring
for (let [key, value] of Array.from(myMap)) {
    console.log(key, value);
}

//5. use forEach
myMap.forEach((value) => { console.log(value) });

myMap.forEach((value, key) => { console.log(key, value) });


//console.log(myMap);
