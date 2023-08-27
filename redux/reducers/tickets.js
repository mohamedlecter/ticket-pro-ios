// redux/reducers/tickets.js
import { BOOK_TICKET } from "../constants/tickets";

const initialState = {
  bookedTickets: [],
  // other initial state properties
};

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_TICKET:
      return {
        ...state,
        bookedTickets: [...state.bookedTickets, action.payload],
      };
    // ... other cases
    default:
      return state;
  }
}
