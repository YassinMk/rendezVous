 export const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add 1 because months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const isWeekend = (dateString) => {

    const date = new Date(dateString);
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      console.log(date,'Selected date is a weekend (Sunday or Saturday).');
      return true; // It's a weekend
    }
    return false; // It's not a weekend
};

export const transformDateFormat = (formatted_date_rv) => {
  // Split the date string into day, month, and year
  var dateParts = formatted_date_rv.split("-");
  // Create a new Date object in the correct format (month is 0-based in JavaScript)
  var transformedDate = new Date(Date.UTC(
    parseInt(dateParts[2]),
    parseInt(dateParts[1]) - 1,
    parseInt(dateParts[0])
  )) 
  // Format the date into 'YYYY-MM-DD' format
  var formattedDate = transformedDate.toISOString().slice(0, 10);
  return formattedDate;
};

  