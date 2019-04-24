import moment from "moment";

/* 
  formatDate()
  Format Timestamp to look like
  Tuesday, 23/04/2019 03:40
*/
export const formatDate = timestamp =>
  moment(timestamp).format("dddd, DD/MM/YYYY hh:mm");
