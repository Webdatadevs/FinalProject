function sortObjToKey(obj, key) {
    return obj.slice().sort((obj_1, obj_2) => {
        const keyX = obj_1[key];
        const keyY = obj_2[key];
        return keyX - keyY;
    });
}

export default sortObjToKey;
