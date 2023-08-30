// redux/actions/tickets.js
import {
  BOOK_TICKET,
  DELETE_TICKET,
  GET_TICKET,
  UPDATE_TICKET,
  GET_TICKETS,
  SET_EVENT,
} from "../constants/tickets";
import axios from "axios";
import API from "../../api";
// redux/actions/tickets.js
export const bookTicket = (event, availableTickets, user, selectedDate) => async (dispatch) => {
  try {
    const currentTime = new Date(); // Get the current time
    const updatedEvent = {
      ...event,
      ticketCount: parseInt(availableTickets),
      eventStatus: "غير مفعلة",
      user: user,
      bookingTime: currentTime, // Add the booking time
      selectedDate: selectedDate
    };

    dispatch({
      type: BOOK_TICKET,
      payload: updatedEvent,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getTickets = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`${API}/tickets`);
//     dispatch({
//       type: GET_TICKETS,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getTicket = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(`${API}/tickets/${id}`);
//     dispatch({
//       type: GET_TICKET,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteTicket = (id) => async (dispatch) => {
//   try {
//     await axios.delete(`${API}/tickets/${id}`);
//     dispatch({
//       type: DELETE_TICKET,
//       payload: id,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateTicket = (id, ticket) => async (dispatch) => {
//   try {
//     const res = await axios.put(`${API}/tickets/${id}`, ticket);
//     dispatch({
//       type: UPDATE_TICKET,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createTicket = (ticket) => async (dispatch) => {
//   try {
//     const res = await axios.post(`${API}/tickets`, ticket);
//     dispatch({
//       type: CREATE_TICKET,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getTicketStats = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`${API}/tickets/stats`);
//     dispatch({
//       type: GET_TICKET_STATS,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
