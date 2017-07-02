export const warn = values => {
  const warnings = {}
  if (values.age < 30) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}
