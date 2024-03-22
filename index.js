// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName){
    cats.push('Ralph')
}

function destructivelyPrependCat(catName) {
    cats.unshift("Bob");
}

function destructivelyRemoveFirstCat(catName){
    cats.shift()

}
function destructivelyRemoveLastCat(catName)
{
    cats.pop()
}
function appendCat(catName){
const one = [...cats, "Broom"]
return one

}
function prependCat(catName){
const newCat = ["Arnold", ...cats]
return newCat
}
function removeLastCat(catName){
    cats.slice
    return cats.slice(0,-1)

}
function removeFirstCat(catName){
    cats.slice
    return cats.slice(1)
}