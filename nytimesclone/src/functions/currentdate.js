export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let mo = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let dayofweek = newDate.getDay();

    var month = new Array(12);
    month[1] = "January";
    month[2] = "February";
    month[3] = "March";
    month[4] = "April";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "August";
    month[9] = "September";
    month[10] = "October";
    month[11] = "November";
    month[12] = "December";

    var weekday=new Array(7);
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
        weekday[7]="Sunday";
    
    return `${weekday[dayofweek]}, ${month[mo]} ${date}, ${year}`
    // return `${weekday[dayofweek]}, ${month[mo]} ${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }