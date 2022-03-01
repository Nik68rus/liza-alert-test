export const getDateString = (timestamp) => {
  const date = new Date(+timestamp * 1000);
  return date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'});
};