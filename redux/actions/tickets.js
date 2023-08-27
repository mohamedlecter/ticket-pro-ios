// redux/actions/tickets.js
import { BOOK_TICKET } from '../constants/tickets';

export const bookTicket = (ticket) => ({
  type: BOOK_TICKET,
  payload: ticket,
});
