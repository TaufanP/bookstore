export default function (value: string | number | undefined, currency = '$') {
  if (!value) return `0`;
  const decimals = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return `${currency}${decimals}`;
}
