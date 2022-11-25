import { BUY_CAKE } from "../actionTypes/actionTypes";
 
// state initialize
const initialState = {
    numOfItems : 10
}

//reducer made with  parameters and logic
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case BUY_CAKE :
            return {
                ...state,
                numOfItems : state.numOfItems - action.payload
            }
            default:
                return state
    }
}

export default reducer