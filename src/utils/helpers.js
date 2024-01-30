export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const today = new Date();

const formatDate = (value) =>
  new Intl.DateTimeFormat("en-us", {
    dateStyle: "long",
  }).format(value);

export const todaysDate = formatDate(today);
