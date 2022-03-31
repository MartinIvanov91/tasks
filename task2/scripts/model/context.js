define([
    'storage/localStorage'
], function (storage) {
    const key = '__current_ticket'

    return {
        setContext: (id) => storage.setData(key, id),
        getContext: () => storage.getData(key)
    }
})
