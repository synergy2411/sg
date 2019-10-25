//ES6
// import {} from '';

//ES5
const redux = require("redux");

// Initail State

let initialState = {
  counter : 0
}

// Create Reducer
function counterReducer(state = initialState , action){
  if(action.type === "INCREMENT"){
    return {...state, counter : state.counter + 1}
  } else if(action.type === "ADD"){
    return {... state, counter : state.counter + action.payload}
  }
  return state;
}

// Create Store
const store = redux.createStore(counterReducer);

// Get the State
console.log(store.getState());

// Subscribing the Store

store.subscribe(() => {
  console.log("[SUBS]", store.getState());
})

// Dispatching Actions
store.dispatch({type : "INCREMENT"})
store.dispatch({type : "ADD", payload : 10})



