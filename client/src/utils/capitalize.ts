/**
 * Function for capitalize text
 */
export const capitalizeText = (str: string)  => {
  const lowerText: string = str.toLowerCase();

  return str.charAt(0).toUpperCase() + lowerText.slice(1)
}