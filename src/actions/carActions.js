export const addNewFeature = feature => {
    return { type: "ADD_FEATURE", payload: feature }
}

export const removeFeature = feature => {
    return { type: "REMOVE_FEATURE", payload: feature }
}