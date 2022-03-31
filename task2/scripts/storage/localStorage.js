define([], function () {
    return {
        getData: (key) => JSON.parse(localStorage.getItem(key)),
        setData: (key, value) => localStorage.setItem(key, JSON.stringify(value))
    }
})
