export const formatData = (data: Date = new Date()): string => {
  const pad = (n: number) => n.toString().padStart(2, "0");

  const charData = {
    day: pad(data.getDate()),
    month: pad(data.getMonth() + 1),
    year: data.getFullYear(),
    hour: pad(data.getHours()),
    minute: pad(data.getMinutes()),
  };

  return `${charData.year}-${charData.month}-${charData.day}T${charData.hour}:${charData.minute}`;
};

export const unformatData = (data: string): Date => {
  const [dateStr, timeStr] = data.split("T");
  const [day, month, year] = dateStr.split("-");
  const [hour, minute] = timeStr.split(":");

  return new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hour),
    parseInt(minute)
  );
};
