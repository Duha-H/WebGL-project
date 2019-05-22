// Utility/Helper functions

/**
 * Returns a random color in a 3-element (RGB) array
 */
export function randomColor() {
    return [Math.random(), Math.random(), Math.random()];
}


/**
 * Returns array copied numCopies times and spread into a single array "result"
 * @param {array} array 
 * @param {number} numCopies 
 */
export function copyArray(array, numCopies) {
    var result = [];
    for(let i = 0; i < numCopies; i++) {
        result.push(...array);
    }
    return result;
}

/**
 * Returns true if two arrays are identical
 * @param {array} arr1 
 * @param {array} arr2 
 */
export function isEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    else {
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i])
                return false;
        }
    }
    return true;
}

/**
 * Converts angle from degrees to radians
 * @param {number} x Angle in degrees
 */
export function degToRad(x) {
    return x * Math.PI / 180;
}

/**
 * Converts angle from radians to degrees
 * @param {number} x Angle in radians
 */
export function radToDeg(x) {
    return x * 180 / Math.PI;
}

/**
 * Returns the result of multiplying a 4 x 4 matrix by a 4D vector
 * @param {mat4} mat 4 x 4 matrix to be multiplied
 * @param {vec4} vec 4D vector to be multiplied
 */
export function multMatVec4(mat, vec) {
    var result = vec4.create();
    for(var i = 0; i < 4; i++) {
        result[i] = vec[i] * mat[4 * 0 + i] +
            vec[i] * mat[4 * 1 + i] +
            vec[i] * mat[4 * 2 + i] +
            vec[i] * mat[4 * 3 + i];
    }
    return result;

}

export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}