import { delay } from './helper'

const required = (value: string) => {
  return !value ? 'Required' : true
}

const maxLength = (maxlengthValue: number) => {
  return (value: string) => {
    return value.length > maxlengthValue ? 'Max character limit exceeded' : true
  }
}

const alwaysInvalid = (_value: string) => {
  console.log('Always invalid function was called')
  return true
}

const asyncRule = async () => {
  console.log('async rule function was called')
  await delay(5000)
  console.log('async rule function was resolved')
  return 'Async Validation Failed'
}

export { required, maxLength, alwaysInvalid, asyncRule }
