import * as actions from "./actions";

export default function reducer(state, action) {
    switch (action.type) {
        case actions.SAVE_TOKEN: {
            return { ...state, tokenID: action.payload.tokenID };
        }
        default:
            return state;
    }
}