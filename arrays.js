var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  array = [1]
  
  newArray = ["foo", ...array]
  
  return newArray
}

<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(array) {
  
  array.unshift("foo")

  return array
}

detructivelyAddElementToBeginningOfArray(array)

=======
function destructivelyAddElementToBeginningOfArray() {
  array = [1]
  
  array.unshift("foo")
  
  return array
}

>>>>>>> 1d6c69d213c70af5bdb904a890eabbf7b325063f
function addElementToEndOfArray() {
  array = [1]
  
  newArray = [...array, "foo"]
  
  return newArray
}

<<<<<<< HEAD
function destructivelyAddElementToEndOfArray(array) {
  
  array.push("foo")
=======
function destructivelyAddElementToEndOfArray() {
  const array = [1]
  
 var element = "foo"
  
  array.push(element)
>>>>>>> 1d6c69d213c70af5bdb904a890eabbf7b325063f
  
  return array
 
}

<<<<<<< HEAD
destructivelyAddElementToEndOfArray(array)

function accessElementInArray() {
  
  array = [1, 2, 3]

  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
=======
function accessElementInArray() {
  array = [1, 2, 3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray() {
  array = [1, 2, 3]
>>>>>>> 1d6c69d213c70af5bdb904a890eabbf7b325063f
  
  array.shift()
  
  return array
}

<<<<<<< HEAD
destructivelyRemoveElementFromBeginningOfArray(array)

=======
>>>>>>> 1d6c69d213c70af5bdb904a890eabbf7b325063f
function removeElementFromBeginningOfArray() {
  array = [1, 2, 3]
  
  array.slice(1)
  
<<<<<<< HEAD
  array = [2, 3]
  
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  
  array.pop() // returns the removed element, in this case 3
  
  return array
}

destructivelyRemoveElementFromEndOfArray(array)

=======
  return array
}

function destructivelyRemoveElementFromEndOfArray() {
  array = [1, 2, 3]
  
  array.pop() // returns the removed element, in this case 3

  return array
}

>>>>>>> 1d6c69d213c70af5bdb904a890eabbf7b325063f
function removeElementFromEndOfArray() {
  array = [1, 2, 3] 
  
  array.slice(0, array.length - 1)
  
<<<<<<< HEAD
  array = [1, 2]
  
  return array
=======
  return array
  
>>>>>>> 1d6c69d213c70af5bdb904a890eabbf7b325063f
}

