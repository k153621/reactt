import { Dishes } from '../sharedDishes/dishes';
import { COMMENTS } from '../sharedDishes/COMMENTS';
import { PROMOTIONS } from '../sharedDishes/PROMOTIONS';
import { LEADERS } from '../sharedDishes/LEADERS';

export const initialState = {
    dishes: Dishes,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};