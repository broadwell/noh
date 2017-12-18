export function getTime(element) {
  const timeString = element.getAttribute("datetime");
  const [hhmmss, millis] = timeString.trim().split(".");
  const timeFormat = `01/01/1970 ${hhmmss} GMT`;
  const time = Date.parse(timeFormat) + (millis ? parseInt(millis, 10) : 0);
  return time / 1e3 || 0.0;
}

// Converts time from hh:mm:ss to seconds
export function convertTimeToSeconds(hhmmss) {
  const timeFormat = `01/01/1970 ${hhmmss} GMT`;
  const time = Date.parse(timeFormat);
  return time / 1e3 || 0.0;
}
