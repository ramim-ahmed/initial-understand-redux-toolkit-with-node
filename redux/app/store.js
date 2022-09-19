const { configureStore } = require('@reduxjs/toolkit');
const counterReducer = require('../slices/counter');
const userReducer = require('../slices/users');
const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer
    }
});

module.exports = store;