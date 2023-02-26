const object={a: 10, b: 20, c: 30};

for (const property in object){
    console.log(`${property}: ${object[property]}`);
}

// Expected output:
// a: 10
// b: 20
// c: 30