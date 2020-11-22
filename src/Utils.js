/**
 * 
 * @param {string} url 
 */

export const fetchInfo = (url) => {
    return fetch(url)
        .then(response => response.json())
}

/**
 * 
 * @param {array} data 
 * @param {array} array 
 * @param {function} callback 
 */

export const extractNeededData = (data, array, callback) => { // can be optimized for more reusability
    return data.map((res, i) => {
        const {
            name,
            username,
            email,
            phone,
            website,
            address: {
                street,
                suite,
                city
            }
        } = res;

        const information_collection = {  // EXTRACT ONLY THE NEEDED DATA FOR EACH USER TO DISPLAY
            'name': name,
            'username': username,
            'email': email,
            'phone': phone,
            'website': website,
            'street': street,
            'suite': suite,
            'city': city,
        }

        array.push({ // assaign user [id] as key
            [res.id]: information_collection
        })

        if (i === (data.length - 1)) { // wait to collect all users data
            return callback(array)
        }
    })
}
