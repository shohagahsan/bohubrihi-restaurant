import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    sample: "Hello sample"
}

export const Reducer = (state = initialState, action) => {
    return state;
}