// redux/reducers/tickets.js
import {
  BOOK_TICKET,
  DELETE_TICKET,
  GET_TICKET,
  GET_TICKETS,
  UPDATE_TICKET,
  SET_EVENT,
} from "../constants/tickets";

const initialState = {
  bookedTickets: [
    {
      id: "0",
      eventName: "راسيل مينيا ، جدة",
      eventDate: "5 نوفمبر",
      eventTime: "Event Time",
      eventLocation: "الرياض",
      eventDescription:
        "كل شي فيه فوق الخيال، بشاشاته العملاقة المضيئة اللي تستحضر روح التايم السكوير، وزواياه اللي مليانة فعاليات مثل النافورة الراقصة والحدائق، وعدد كبير من المتاجر والمطاعم العالمية والمحلية. بالإضافة لمسارح موعودين فيها بعروض من الخيال، وأكبر دار سينما في المملكة العربية السعودية. بيستقبل البوليڤارد زوّاره كل يوم بحُب وحماس، عشان يعيشون تجربة ماراح تتكرر، وخيال أكبر من الخيالات اللي تصوروها.",
      eventImage: require("../../assets/event6.png"),
      eventMinPrice: "55.00",
      eventVipTicketPrice: "300.00",
      eventWeeekDaysWorkingHours:
        "من 6م-1ص ايام الاسبوع (تغلق البوابات الساعه ١2ص) ",
      eventWeekendWorkingHours: "من 6م-٢ص نهاية الاسبوع (تغلق البوابات ١ص)",
      eventStatus: "غير مفعلة",
      ticketCount: "6",
      bookingTime:"2023-08-10T10:15:30.000Z",
      user:  {
        _id: "64aead5d13ddd4d59773fabb",
        name: "سيف العتيبي",
        phone: "9665541*****",
      },
    },
    {
      id: "1",
      eventName: "الرويشد ، الرياض",
      eventDate: "30 اكتوبر",
      eventTime: "Event Time",
      eventLocation: "الرياض",
      eventDescription:
        "كل شي فيه فوق الخيال، بشاشاته العملاقة المضيئة اللي تستحضر روح التايم السكوير، وزواياه اللي مليانة فعاليات مثل النافورة الراقصة والحدائق، وعدد كبير من المتاجر والمطاعم العالمية والمحلية. بالإضافة لمسارح موعودين فيها بعروض من الخيال، وأكبر دار سينما في المملكة العربية السعودية. بيستقبل البوليڤارد زوّاره كل يوم بحُب وحماس، عشان يعيشون تجربة ماراح تتكرر، وخيال أكبر من الخيالات اللي تصوروها.",
      eventImage: require("../../assets/event5.png"),
      eventMinPrice: "55.00",
      eventVipTicketPrice: "300.00",
      eventWeeekDaysWorkingHours:
        "من 6م-1ص ايام الاسبوع (تغلق البوابات الساعه ١2ص) ",
      eventWeekendWorkingHours: "من 6م-٢ص نهاية الاسبوع (تغلق البوابات ١ص)",
      eventStatus: "مفعلة",
      ticketCount: "6",
      bookingTime:"2023-08-27T10:15:30.000Z",
      user:  {
        _id: "64aead5d13ddd4d59773fabb",
        name: "ماجد العتيبي",
        phone: "9665541*****",
      },
    },
    {
      id: "2",
      eventName: "فيا رياض ، الرياض",
      eventDate: "25 اكتوبر",
      eventTime: "Event Time",
      eventLocation: "الرياض",
      eventDescription:
        "كل شي فيه فوق الخيال، بشاشاته العملاقة المضيئة اللي تستحضر روح التايم السكوير، وزواياه اللي مليانة فعاليات مثل النافورة الراقصة والحدائق، وعدد كبير من المتاجر والمطاعم العالمية والمحلية. بالإضافة لمسارح موعودين فيها بعروض من الخيال، وأكبر دار سينما في المملكة العربية السعودية. بيستقبل البوليڤارد زوّاره كل يوم بحُب وحماس، عشان يعيشون تجربة ماراح تتكرر، وخيال أكبر من الخيالات اللي تصوروها.",
      eventImage: require("../../assets/event2.png"),
      eventMinPrice: "55.00",
      eventWeeekDaysWorkingHours:
        "من 6م-1ص ايام الاسبوع (تغلق البوابات الساعه ١2ص) ",
      eventWeekendWorkingHours: "من 6م-٢ص نهاية الاسبوع (تغلق البوابات ١ص)",
      eventStatus: "مفعلة",
      ticketCount: "6",
      bookingTime:"2023-08-15T10:15:30.000Z",
      user:  {
        _id: "64aead5d13ddd4d59773fabb",
        name: "ماجد الجدعاني",
        phone: "9665531*****",
      },
    },
  ],
  // other initial state properties
};

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_TICKET:
      return {
        ...state,
        bookedTickets: [action.payload, ...state.bookedTickets],
      };
    default:
      return state;
  }
}
