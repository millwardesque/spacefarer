export function formatAsPercentage(value: number) {
  return value.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
