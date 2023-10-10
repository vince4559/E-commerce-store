
const priceFormat = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency'
})

const FormatCurrency = (number) => {
  return priceFormat.format(number)    
}

export default FormatCurrency
