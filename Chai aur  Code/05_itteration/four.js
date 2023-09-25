const myObj = {
    js: "Javascript",
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ['js', "rb", "py", "java", "cpp"]

for (const key of programming) {
    console.log(key);
}

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }