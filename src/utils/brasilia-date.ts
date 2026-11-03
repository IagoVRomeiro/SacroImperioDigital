// Data de hoje no fuso de Brasília, independente do fuso do servidor.
export const getBrasiliaDateParts = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).formatToParts(date);
  const partMap = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const year = Number(partMap.year);
  const month = Number(partMap.month);
  const day = Number(partMap.day);
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(partMap.weekday);
  return {
    year,
    month,
    day,
    monthIndex: month - 1,
    weekday,
    isoDate: `${partMap.year}-${partMap.month}-${partMap.day}`,
  };
};
