

export const addFeature = (newFeature) => {
    console.log(true)
    return {
        type: "ADD_FEATURE", 
        payload: newFeature, 
    }
}

export const removeFeature = (feature) => {

    return {
        type: "REMOVE_FEATURE", 
        payload: feature, 
    }
}