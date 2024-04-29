export const yearPeriod = (
  initialDate: Date | string,
  finalDate: Date | string | null,
  finalText = 'now',
) => {
  const initialYear =
    initialDate instanceof Date
      ? initialDate.getFullYear()
      : new Date(initialDate).getFullYear()
  const finalYear = finalDate
    ? finalDate instanceof Date
      ? finalDate.getFullYear()
      : new Date(finalDate).getFullYear()
    : finalText
  return `${initialYear} - ${finalYear}`
}
