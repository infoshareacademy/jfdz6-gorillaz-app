export const mapObjectToArrayData = objectData =>
    Object.entries(objectData)
        .map(([id, payload]) => ({id, ...payload}))