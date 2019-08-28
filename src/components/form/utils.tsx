export const isNumberString = (str: string) :boolean => {
  if (!str) return false
  if (str.includes && str.includes(" ")) return false
  if (Number.isNaN(Number(str))) {
    return false
  }
  return true
}



export const formatLayoutFields = () => {

}



export const formatSubmitData = () => {

}

















