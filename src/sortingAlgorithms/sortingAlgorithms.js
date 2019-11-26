export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
       animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }


  export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function bubbleSortHelper(
    arr,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            animations.push([j,j+1,0,0]);
            animations.push([j,j+1,0,1]);
            if (arr[j] > arr[j+1]) 
                { 
                    // swap arr[j+1] and arr[i] 
                    let temp = arr[j]; 
                    arr[j] = arr[j+1]; 
                    arr[j+1] = temp; 
                    animations.push([j,arr[j],1,0]);
                    animations.push([j+1,arr[j+1],1,1]);
                } 
        }
    }
  }
  

  export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    insertionSortHelper(array, animations);
    return animations;
  }
  
  function insertionSortHelper(arr,animations) {
        let n = arr.length; 
        for (let i = 1; i < n; ++i) { 
            let key = arr[i]; 
            let j = i - 1; 
            
            while (j >= 0 && arr[j] > key) { 
                animations.push([j,j+1,0,0]);
                animations.push([j,j+1,0,1]);
                arr[j + 1] = arr[j]; 
                animations.push([j+1,arr[j],1,0]);
                j = j - 1; 
            } 
            arr[j + 1] = key; 
            animations.push([j+1,key,1,0]);
            console.log(key)
        }


  }



  export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }

  function quickSortHelper(arr,low,high,animations) 
    { 
        if (low < high) 
        { 

            let pi = partition(arr, low, high,animations); 
  
            // Recursively sort elements before 
            // partition and after partition 
            quickSortHelper(arr, low, pi-1, animations); 
            quickSortHelper(arr, pi+1, high, animations); 
        } 
    }
    
    function partition( arr,  low, high,animations) 
    { 
        let pivot = arr[high];  
        let i = (low-1); 
        for (let j=low; j<high; j++) 
        { 
            // If current element is smaller than the pivot 
            animations.push([j,high,0,0]);
            animations.push([j,high,0,1]);
            if (arr[j] < pivot) 
            { 
                i++; 
                let temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
                animations.push([i,arr[i],1,0]);
                animations.push([j,arr[j],1,0]);
            } 
        } 
  
        // swap arr[i+1] and arr[high] (or pivot) 
        let temp = arr[i+1]; 
        arr[i+1] = arr[high]; 
        arr[high] = temp; 
        animations.push([i+1,arr[i+1],1,0]);
        animations.push([high,arr[high],1,0]);
        return i+1; 
    }   
  