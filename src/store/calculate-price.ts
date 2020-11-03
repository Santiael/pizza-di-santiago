export function calculatePrice(
  size: string,
  crustType: string,
  toppings: number,
): number {
  let price = 0

  switch (size) {
    case 'small':
      price += 8
      break
    case 'medium':
      price += 10
      break
    case 'large':
      price += 12
      break
    // no default
  }

  switch (crustType) {
    case 'thin':
      price += 2
      break
    case 'thick':
      price += 4
      break
    // no default
  }

  const toppingsValue = (toppings - 3) * 0.5
  if (toppingsValue > 0) price += toppingsValue

  return price
}
