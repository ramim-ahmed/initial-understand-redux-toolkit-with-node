const store = require('./app/store');
const { counterActions } = require('./slices/counter')
const { fetchUsers } = require('./slices/users');
// subscribe store
store.subscribe(() => {
    console.log(store.getState().users.user);
})

// dispatch actions
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());
store.dispatch(fetchUsers())