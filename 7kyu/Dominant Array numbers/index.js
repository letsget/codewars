/*
solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included.
*/


const solve = (arr) => {
  return arr.filter((el, i) => el > Math.max(...arr.slice(i + 1)));
};

solve([104, 18, 37, 9, 36, 47, 28]);
