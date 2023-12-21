function myEach(collection, callback) {
    if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
    callback(collection[i])
    }
}   else if (typeof collection === 'object') {
    const values = Object.values(collection)
    for (let i = 0; i < values.length; i++) {
        callback(values[i])
    }
} 
return collection
}

function myMap(collection, callback) {
    let newArray = []
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]))
        }
    }   else if (typeof collection === 'object') {
        const values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
            newArray.push(callback(values[i]))
        }
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    let result;
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        if (result === undefined) {
          result = acc !== undefined ? callback(acc, element, i) : element;
        } else {
          result = callback(result, element, i);
        }
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (result === undefined) {
          result = acc !== undefined ? callback(acc, collection[key], key) : collection[key];
        } else {
          result = callback(result, collection[key], key);
        }
      }
    }
  
    return result;
  }

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                    return collection[i]
                }
            }
        }   else if (typeof collection === 'object' && collection !== null) {
            for (let key in collection) {
                if (predicate(collection[key])) {
                    return collection[key]
            }
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    let newArray = []

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
            newArray.push(collection[i])
            }
        }
        return newArray
    }   else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (predicate(collection[key])) {
                newArray.push(collection[key])
            }
            return newArray
        }
    }
    return newArray
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
        }
        return collection.length
    }   else if (typeof collection === 'object') {
        const values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
        }
        return values.length
    }
}

function myFirst(array, n) {
    let newArray = []

    if (n) {
        for (let i = 0; i < n && i < array.length; i++) {
        newArray.push(array[i]) 
        }
        return newArray
    }    
    return array[0]
}

function myLast(array, n) {
    let newArray = []

    if (n) {
        return array.slice(-n)
    }
    return array[array.length - 1]
}

function myKeys(object) {
    let newArray = []

    for (let key in object) {
        newArray.push(key)
    }
    return newArray
}

// function myValues(object) {
//     let newArray = []

//     for (let value in object) {
//         newArray.push(value)
//     }
//     return newArray
// }

// function myValues(object) {
//     let newArray = []

//     const values = Object.values(object)
//     for (let i = 0; i < values.length; i++) {
//     newArray.push(values[i]())
//     }
//     return newArray
// }

function myValues(object) {
    let newArray = [];
  
    for (let key in object) {
      if (typeof object[key] === 'function') {
        newArray.push(object[key]());
      } else {
        newArray.push(object[key]);
      }
    }
  
    return newArray;
  }