export function canAddTopping(size: string, toppings: number): boolean {
  switch (size) {
    case 'small':
      return toppings < 5
    case 'medium':
      return toppings < 7
    case 'large':
      return toppings < 9
    default:
      return false
  }
}
