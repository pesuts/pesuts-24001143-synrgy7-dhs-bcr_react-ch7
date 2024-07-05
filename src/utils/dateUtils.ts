export const formatDate = (date: Date, dateOnly = true) => {
  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  if (dateOnly) return `${day} ${month} ${year}`;
  return `${day} ${month} ${year}, ${hours}.${minutes}`
}

export const formatDateInput = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}