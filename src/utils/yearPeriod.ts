export const yearPeriod = (
  initialDate: Date,
  finalDate: Date | null,
  finalText = 'now',
) => {
  const initialYear = initialDate.getFullYear()
  const finalYear = finalDate ? finalDate.getFullYear() : finalText
  return `${initialYear} - ${finalYear}`
}
