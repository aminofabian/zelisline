const KES_SCALE = 100;

/** Homepage packages are stored in hundreds and displayed as KES. */
export function formatKesPrice(value: number): string {
  return `KES ${new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(value * KES_SCALE)}`;
}

/** Service-page packages are shown exactly as stored. */
export function formatRawPrice(value: number): string {
  return `$${value}`;
}
