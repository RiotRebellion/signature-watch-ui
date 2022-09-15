import moment from "moment/moment";

export function ConvertDateTimeToShortDate(date){
    return moment(date).subtract(10, 'days').calendar();
}

export function ConvertDateTimeToISO(date){
    return moment(date).toISOString();
}