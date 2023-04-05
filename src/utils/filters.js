import moment from 'moment';

export default {
    formatDateTime: function (date, format='DD/MM/YYYY HH:mm') {
        if(date == null) {
            return '-';
        }
        return moment(date).format(format);
    },
}