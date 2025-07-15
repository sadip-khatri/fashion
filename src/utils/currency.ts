export const formatNPR = (amount: number): string => {
  return `NPR ${amount.toLocaleString('en-NP')}`;
};

export const formatPrice = (price: number, originalPrice?: number): { current: string; original?: string } => {
  return {
    current: formatNPR(price),
    original: originalPrice ? formatNPR(originalPrice) : undefined
  };
};