const currencyFormatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  style: "currency",
  maximumFractionDigits: 0,
})

export { currencyFormatter }
