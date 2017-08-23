var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0]
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1]
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, match) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === match) {
        return i
      }
    }
    return -1
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, match) {
    for (var i = arr.length-1; i > 0; i--) {
      if (arr[i] === match) {
        return i
      }
    }
    return -1
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var popArr = arr
      popArr.pop()                       // destructive
    return popArr                      
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var truthyArr = []

    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && arr[i] > 0) {
        truthyArr.push(arr[i])
      }
    }
    return truthyArr
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    var sliceArr = []

    for (var i = start; i < end; i++) {
      sliceArr.push(arr[i])
    }

    return sliceArr
  },

  // returns a slice of array with n elements dropped from the beginning
  drop: function(arr, drop) {
    var dropArr = []

    if (drop === undefined) {
      dropArr = arr
        dropArr.shift()
    } else {
      for (var i = drop; i < arr.length; i++) {
        dropArr.push(arr[i])
      }
    }
    return dropArr
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, drop) {
    var dropArr = []

    if (drop === undefined) {
      dropArr = arr
        dropArr.pop()
    } else {
      for (var i = 0; i < arr.length-drop; i++) {
        dropArr.push(arr[i])
      }
    }
    return dropArr
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, take) {
    var takeArr = []

    if (take === undefined) {
      takeArr.push(arr[0])
    } else if (take >= arr.length) {
      takeArr = arr
    } else if (take > 0 && take < arr.length) {
      for (var i = 0; i < take; i++) {
        takeArr.push(arr[i])
      }
    } 
    return takeArr
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, take) {
    var takeArr = []

    if (take === undefined) {
      takeArr.push(arr[arr.length-1])
    } else if (take >= arr.length) {
      takeArr = arr
    } else if (take > 0 && take < arr.length) {
      for (var i = take-1; i < arr.length; i++) {
        takeArr.push(arr[i])
      }
    }
    return takeArr
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    var fillArr = []

    if (start === undefined && end === undefined) {
      for (var i = 0; i < arr.length; i++) {
        fillArr.push(value)
      }
    } else {
      fillArr = arr
      for (var i = 0; i < arr.length; i++) {
        if (i >= start && i < end) {
          fillArr.splice(i, 1, value)
        }
      } 
    }
    return fillArr
  },

  // removes all given values from an array
  pull: function (arr, valueOne, valueTwo) {
    var arrDash = []

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== valueOne && arr[i] !== valueTwo) {
        arrDash.push(arr[i])
      }
    }
    return arrDash
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, idx) {
    var arrDash = []

    for (var i = 0; i < arr.length; i++) {
      if (idx.indexOf(i) === -1) {
        arrDash.push(arr[i])
      }
    }
    return arrDash
  },

  // creates an array excluding all the specified values
  without: function(arr, idx) {
    var arrDash = []

    for (var i = 0; i < arr.length; i++) {
      if (idx.indexOf(arr[i]) === -1) {
        arrDash.push(arr[i])
      }
    }
    return arrDash
  },

  // returns an array with specified values excluded
  difference: function(arrOne, arrTwo) {
    var arrDash = []

    for (var i = 0; i < arrOne.length; i++) {
      if (arrTwo.indexOf(arrOne[i]) === -1) {
        arrDash.push(arrOne[i])
      }
    }
    return arrDash
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arrOne, arrTwo) {
    var zipArr = []

    for (var i = 0; i < arrOne.length; i++) {
      var tempArr = []
        tempArr.push(arrOne[i], arrTwo[i])
      zipArr.push(tempArr)
    }
    return zipArr
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var unzipArr = []
    var arrOne = []
    var arrTwo = []

    for (var i = 0; i < arr.length; i++) {
      arrOne[i] = arr[i][0]
      arrTwo[i] = arr[i][1]
    }
    unzipArr.push(arrOne, arrTwo)
    return unzipArr
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size){
    var chunkArr = []
    if (arr.length === 0 || size === 0) {
      return chunkArr
    } else {
      for (var i = 0; i < arr.length;) {
      var tempArr = []
        for (var j = 0; j < size; j++) {
          if (arr[i]) {
            tempArr.push(arr[i])
            i++
          }
        }
      chunkArr.push(tempArr)
      }
    }
    return chunkArr
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, iteratee) {
    for (var i in collection) {
      iteratee(collection[i])
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(collection, iteratee) {
    var arrDash = []
    for (var i in collection) {
      arrDash.push(iteratee(collection[i]))
    }
    return arrDash
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(collection, iteratee) {
    var arrDash = []
    var objDash = {}

    if (Array.isArray(collection)) {
      for (var i in collection){
        if (iteratee(collection[i])) {
          arrDash.push(collection[i])
        }
      }
      return arrDash

    } else if (!Array.isArray(collection)) {
      for (var j in collection) {
        if (iteratee(collection[j])) {
          objDash[j] = collection[j]
        }
      }
      return objDash
    }
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(collection, iteratee) {
    var sum = 0

    for (var i in collection) {
      sum = iteratee(sum, collection[i])
    }
    return sum
  }
};