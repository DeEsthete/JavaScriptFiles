var dateNow = new Date()
function showDate(date)
{
    alert(date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear());
 }
showDate(dateNow);
