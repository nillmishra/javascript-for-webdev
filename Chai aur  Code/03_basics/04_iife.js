//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTed`);
})();

(function chai(){
    console.log(`DB CONNECTED TWO`);
})();

(() => {
    console.log(`DB CONNECTED THREE`);
})();

((name) => {
    console.log(`DB CONNECTED FOUR ${name}`);
})('Nill')
