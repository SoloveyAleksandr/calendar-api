# calendar-api

получение списка из 42 дней выбранного месяца и даты
'https://calendar-api.cyclic.app', {
  params: {
    month: нужный месяц | 0 для текущего,
    year: нужный год | 0 для текущего
  }
  
 response {
  calendarDays[],
  year,
  month,
 }
