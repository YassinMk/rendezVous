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

  