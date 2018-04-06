import moment from 'moment'

export const prepareEvents = events => {
    events = events.sort((a, b) => a.start > b.start);

    let dates = [];
    let current_day;
    let current_day_events = [];
    events.forEach(event => {
        if (!(current_day && current_day.isSame(event.start, 'day'))) {
            if (current_day) {
                dates.push({
                    title: current_day.format('DD MMMM YYYY'),
                    data: current_day_events
                });
            }
            current_day = moment(event.start);
            current_day_events = [];
        }

        current_day_events.push(event);
    });
    dates.push({
        title: current_day.format('DD MMMM YYYY'),
        data: current_day_events
    });

    return dates;
};