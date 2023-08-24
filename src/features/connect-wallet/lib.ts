export const checkMetaTaskSupport = (): boolean => {
  return 'ethereum' in window
}
