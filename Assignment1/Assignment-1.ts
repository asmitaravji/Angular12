


// which contains one function named as Maximum. That function accepts array of numbers and returns the largest number from array.

var Arraynum : number[]=[23, 89, 6, 29, 56, 45, 77, 32]

function Maximun(){
   Arraynum.sort(
       function(a, b)
       {
           return b-a
        }
    );
}


Maximun();
var maxvalue= Arraynum[0];
console.log("maximum value is", maxvalue)



// typescript program which contains one function named as Summation. That function accepts array of numbers and returns the summation of each number from array.

var sumarray: number[]=[23, 6, 7, 4, 5, 7];
var sum: number = 0;
sumarray.forEach(a => sum += a);
console.log("sum of array is", sum );
//console.log(summation);



