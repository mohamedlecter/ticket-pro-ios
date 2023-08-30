// redux/actions/tickets.js
import {
  BOOK_TICKET,
  DELETE_TICKET,
  GET_TICKET,
  UPDATE_TICKET,
  GET_TICKETS,
  SET_EVENT,
  ACTIVATE_TICKET
} from "../constants/tickets";
import axios from "axios";
import API from "../../api";

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

export const activateTicket = (ticketId) => (dispatch, getState) => {
  try {
    const updatedTickets = getState().ticketsReducer.bookedTickets.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, status: "activated" } : ticket
    );

    dispatch({
      type: ACTIVATE_TICKET,
      payload: updatedTickets,
    });
  } catch (error) {
    console.log(error);
  }
};
