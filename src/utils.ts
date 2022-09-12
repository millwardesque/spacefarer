export function formatAsPercentage(value: number) {
  return value.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
export function clamp(value: number, min: number = 0, max: number = 1.0) {
  return Math.min(max, Math.max(value, min));
}
