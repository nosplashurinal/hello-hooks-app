export const hasData = (key) => {
    return !!localStorage[key] && !!localStorage[key].length;
}
export const get = (key) => {
    if (!hasData(key)) {
        return false;
    }
    var data = localStorage[key];
    try {
        return JSON.parse(data);
    }
    catch (e) {
        return data;
    }
}
export const set = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch (e) { localStorage.setItem(key, value); }
}
export const remove = (key) => {
    localStorage.removeItem(key);
}