const required = (value: string) => {
  return !value ? 'Required' : true
}

const maxLength = (maxlengthValue: number) => {
  return (value: string) => {
    return value.length > maxlengthValue ? 'Max character limit exceeded' : true
  }
}

const alwaysInvalid = (value: string) => {
  console.log('Always invalid function was called')
  return true
}

export { required, maxLength, alwaysInvalid }
