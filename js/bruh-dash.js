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

      if (Array.isArray(arr)) {

        return arr[0]

      } else {

        return 'Not an array!'
      }
  },

  // returns the last element of an array
  last: function (arr) {

    if (Array.isArray(arr)) {

      return arr[arr.length-1]

    } else {

      return 'Not an array!'
    }
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, search) {

    if (Array.isArray(arr)) {

      for (var i = 0; i < arr.length; i++) {

        if (arr[i] === search) {

          return i
        }
      } 

      return -1

    } else {

      return 'Not an array!'
    }
  },

  // returns the index of the first matching element from left to right
  lastIndexOf: function (arr, search) {

    if (Array.isArray(arr)) {

      for (var i = arr.length; i >= 0; i--) {

        if (arr[i] === search) {

          return i
        }
      }

      return -1

    } else {

      return 'Not an array!'
     }
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {

    if (Array.isArray(arr)) {

      var arrDash = []

      for (var i = 0; i < arr.length-1; i++) {

        arrDash[i] = arr[i]

      }

      return arrDash

    } else {

      return 'Not an array!'
    }
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {

    if (Array.isArray(arr)) {

      var arrDash = []

      for (var i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'number' && arr[i] > 0) {

            arrDash[arrDash.length] = arr[i]

        }
      }

      return arrDash

    } else {

      return 'Not an array!'
    }
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {

    var arrDash = []

    if (Array.isArray(arr)) {

      for (var i = start; i < end; i++) {

        arrDash[arrDash.length] = arr[i]
      }

      return arrDash

    } else {

      return 'Not an array!'
    }
  },

  // returns a slice of array with n elements dropped from the beginning
  drop: function(arr, drop){

    var arrDash = []

    if (Array.isArray(arr)) {

      if (drop === undefined) {

        for (var i = 1; i < arr.length; i++) {

          arrDash[arrDash.length] = arr[i]

        } 

        return arrDash

      } else if (drop > 0) {

        for (var i = drop; i < arr.length; i++) {

          arrDash[arrDash.length] = arr[i]
        }

        return arrDash

      } else if (drop === 0) {

        return arr

      }

    } else {

      return 'Not an array!'

    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, drop) {

    var arrDash = []

    if (Array.isArray(arr)) {

      if (drop === undefined) {

        for (var i = 0; i < arr.length-1; i++) {

          arrDash[arrDash.length] = arr[i]

        } 

        return arrDash

      } else if (drop > 0) {

        for (var i = 0; i < arr.length-drop; i++) {

          arrDash[arrDash.length] = arr[i]
        }

        return arrDash

      } else if (drop === 0) {

        return arr

      }

    } else {

      return 'Not an array!'

    }

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, slice) {

    var arrDash = []

    if (Array.isArray(arr)) {

      if (slice === undefined) {

        arrDash[arrDash.length] = arr[0]
        return arrDash

      } else if (slice > 0 && slice <= arr.length) {

        for (var i = 0; i < slice; i++) {

          arrDash[arrDash.length] = arr[i]

        }

        return arrDash

      } else if (slice > arr.length) {

        return arr

      } else if (slice === 0) {

        return arrDash

      }

    } else {

      return 'Not an array!'

    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, slice) {

    var arrDash = []

    if (Array.isArray(arr)) {

      if (slice === undefined) {

        arrDash[arrDash.length] = arr[arr.length-1]
        return arrDash

      } else if (slice > 0 && slice <= arr.length) {

        for (var i = slice-1; i < arr.length; i++) {

          arrDash[arrDash.length] = arr[i]

        }

        return arrDash

      } else if (slice > arr.length) {

        return arr

      } else if (slice === 0) {

        return arrDash

      }

    } else {

      return 'Not an array!'

    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, char, start, end) {

    if (Array.isArray(arr)) {

      if (start === undefined && end === undefined) {

        for (var i = 0; i < arr.length; i++) {

          arr[i] = char

        }

      } else {

        for (var i = start; i < end; i++) {

          arr[i] = char

        }
      }

      return arr

    } else {

      return 'Not an array!'

    }
  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};