


// # .reduce()
// Returns: Whatever you want it to! (See video for explanation)
// Purpose: Take an array of data and Reduce it into a smaller or completely different data set.

// .reduce() needs 2 arguments as well not a & b but final and current

// 1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// final is what is returned in the final array
const result1 = nums.reduce(function(final, num){
final += num
return final
})


// }, 0  )// starting point if we need it 
// you can give reduce a starting point of 0 so it starts at first num
console.log(result1)

// 2 - reduce the users to an array of strings of the user's first and last names
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]
const result = users.reduce(function(final, user){
    // we want an array of strings so we need a starting point of and array not an object IE []
    final.push(user.fName + " " + user.lName)
    return final
}, [])
// STARTING POINT ABOVE in ARRAY BRACKETS
console.log(result)




// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

const voteCount = voters.reduce(function(final, voter){
if(voter.voted){
    // final++ adds it to the count if they voted
    final++
}
return final
}, 0)
console.log(voteCount)


// Return an object that has a count of both who voted and who didnt
// { didVote: 3, didntVote: 1 }


const voterObj = voters.reduce(function(final, voter){
    if(voter.voted){
        final.didVote++
    } else {
        final.didntVote++
    }
    return final
    // starting point where final starts at 
}, { didVote: 0, didntVote: 0 })

console.log(voterObj)


// 1) Turn an array of numbers into a total of all the numbers
const num = [3, 2, 4, 4, 6, 7, 8, 10]
const result2 = nums.reduce(function(final, num){
    final += num
    return final
    })
console.log(result2)


//2 // Turn an array of numbers into a long string of all those numbers.

const numbers = [1, 2, 3, 4, 5];

const longString = numbers.reduce(function(final, number){
    return final + number.toString();
}, "");

console.log(longString);


// Turn an array of voter objects into a count of how many people voted
var voted = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voteCounts = voted.reduce(function(final, voter){
    if(voter.voted){
        // final++ adds it to the count if they voted
        final++
    }
    return final
    }, 0)
    console.log(voteCounts)


    // Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

   const wishlist = [
        { title: "Tesla Model S", price: 90000 },
        { title: "4 carat diamond ring", price: 45000 },
        { title: "Fancy hacky Sack", price: 5 },
        { title: "Gold fidgit spinner", price: 2000 },
        { title: "A second Tesla Model S", price: 90000 }
    ];
// chat gpt solution
    // const wishes = wishlist.reduce((accumulator, item) => accumulator + item.price, 0);
//     const wishes = wishlist.reduce(function(final, wish){
//  return final + item.price
//     }, 0)

// console.log(`The total cost of all wishlist items is $${wishes}.`);

// mine after looking at chat gpt


const wishes = wishlist.reduce(function(final, wish){
    return final + wish.price
}, 0)
console.log(wishes)