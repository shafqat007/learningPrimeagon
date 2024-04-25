function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i=0; i<n.length; ++i) {
    sum += n.charCodeAt(i);
    }
    for (let i=0; i<n.length; ++i) {
        sum += n.charCodeAt(i);
        }
    return sum;
}
//Big o notation is used to describe the performance of an algorithm 
// growth is with respect to the input
//constants are dropped 0(2N) = 0(N) thats because constants are dropped in big O notation , it wanna 
//show how the algorithm scales with respect to the input like 10x input will take 10x time n=100 
//will take 100x time n =1 will take 1x time n =5 will take 5x time 
//O of N is 
 //of n squared is the number of operations that the algorithm performs
//with respect to the input where n is the number of elements in the input
// mane n jodi 5 hoy tahole 5^2 = 25 operations hobe othoba n =100 taile Oof10N hole 1000 operations hobe duibhabei hoite paare
// for smaller input O of N squared is faster than O of N for n=5 O of N squared O(N^2) is faster than O(100N)

 function sum_char_E_codes(n: string): number {
    let sum = 0;
    for (let i=0; i<n.length; ++i) {
 const char = n.charCodeAt(i);
 //checks if the character is E
 if (char ===69){
    return sum;
 }
 sum += char;
    }
    return sum;}

//always take the worst case scenario it has to go throught all of it
// so question is what is the running time of this algortihm ? Ans: O of N
// i mean shb theke last e E thakle shb theke last e return shb gula khuja laagbe,but er agei peye gele n-1,aro age 
//pele n-2  but constants drop korte hbe so O of N

//growth is with respect to the input
//constants are dropped
//worst case scenario is considered(not average or best case)

//O(N^2)example:
function sum_char_codes_2d(n: string): number {
    let sum = 0;
    for (let i=0; i<n.length; ++i) {
    for (let j=0; j<n.length; ++j) {
        sum += n.charCodeAt(i);
    }
    }
    return sum;
}

//O(nlogn) example: quicksort
//o(logn) example: binary search

//there are also other ways to measure time complexity like omega notation, theta notation, big theta notation
//but big O notation is the most commonly used one,and least upper bound

