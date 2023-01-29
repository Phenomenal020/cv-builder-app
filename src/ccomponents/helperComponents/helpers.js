const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

export const formatFullDate = date => {
  // split the date into year, month and year
  let dateArr = date.split("-");
  // console.log("dateArr", dateArr)
  let month = months[parseInt(dateArr[1], 10)-1];
  let year = dateArr[0];
  return `${month} ${year}`;
};

export const formatMonth = date => {
  // split the date into year, month and year
  // console.log("date", date);
  let dateArr = [];
  let year = 2023;
  try {
    dateArr = date.split("-");
    let month = months[parseInt(dateArr[dateArr.length - 1], 10) - 1];
    year = dateArr[0];
    return `${month} ${year}`;
  } catch (error) {
    return `${months[date]} ${year}`;
  }
};

export const formatBirth = date => {
  // split the date into year, month and year
  let dateArr = date.split("-");
  // console.log("dateArr", dateArr)
  let month = months[parseInt(dateArr[1], 10)-1];
  let year = dateArr[0];
  let day = dateArr[2]
  return `${day} ${month}, ${year}`;
};
