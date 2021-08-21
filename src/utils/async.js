import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Function to get value from asyn storage
 * @param {String} key 
 * @returns 
 */
export const _getAsync = (key) => {
    return new Promise(async(resolve, reject)=>{
        await AsyncStorage.getItem(key)
        .then((value)=>{
            resolve(value);
        })
        .catch((err)=>{
            reject(err);
        })
    })
}

/**
 * Function to set value in asyn storage
 * @param {String} key
 * @param {String} value 
 * @returns 
 */
 export const _setAsync = (key, value) => {
    return new Promise(async(resolve, reject)=>{
        await AsyncStorage.setItem(key, value)
        .then(()=>{
            resolve();
        })
        .catch((err)=>{
            reject(err);
        })
    })
}