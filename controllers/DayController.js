const moment = require('moment');

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
});

function DayController() {

  this.getNumberOfDays = (req, res) => {
    const query = req.query;
    const dateIsActual = Number(query.year) > 0;

    const year = dateIsActual ? query.year.slice(1) : moment().year();
    const month = dateIsActual ?
      query.month.length > 2 ? query.month.slice(1) : `0${query.month.slice(1)}`
      : moment().format('DD.MM.YYYY').slice(3, 5);

    const startOfWeek = moment(`01.${month}.${year}`, 'DD.MM.YYYY').startOf('month').startOf('week').subtract(1, 'day');
    const calendarDays = [...Array(42)].map(() => {
      const day = startOfWeek.add(1, 'day').clone();
      const dayFormat = day.format('DD.MM.YYYY');
      const dayMonth = day.month() + 1;
      const isWeekend = day.day() === 6 || day.day() === 0 ? true : false;

      const isNextMonth = (dayMonth > Number(month) && day.year() >= year) ||
        (day.year() > year) ? true : false;

      const isPrevMonth = (isNextMonth === false && dayMonth !== Number(month)) ? true : false;

      const isToday = moment().format('DD.MM.YYYY') === dayFormat ? true : false;
      return {
        date: {
          full: day.format('x'),
          formate: dayFormat,
        },
        day: dayFormat.slice(0, 2),
        month: dayFormat.slice(3, 5),
        year: dayFormat.slice(6),
        isWeekend,
        isPrevMonth,
        isNextMonth,
        isToday,
      }
    });

    return res.send({
      calendarDays,
      year: Number(year),
      month: Number(month),
    })
  };
}

module.exports = new DayController();