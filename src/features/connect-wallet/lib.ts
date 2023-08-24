export const checkMetaTaskSupport = (): boolean => {
  if (!('ethereum' in window)) {
    console.log('MetaTask is not supported.')
    return false
  }
  return true
}
