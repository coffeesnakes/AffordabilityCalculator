export const calculateAmountDown = (homePrice, percentDown) => Math.floor(homePrice * percentDown);

export const calculatePercentDown = (homePrice, amountDown) => amountDown / homePrice;

export const calcPropTax = (homePrice) => Math.floor(homePrice * 0.00056);

export const calcPrinciple = (homePrice, downPayment, interestRate, mortgageType) => {
  const amountOwed = homePrice - downPayment;
  const totalWithInterest = amountOwed * (1 + (interestRate / 100));
  return Math.floor(totalWithInterest / mortgageType);
};

// eslint-disable-next-line max-len
export const calcPayment = (principle, propertyTax, mortgageInsurance = 0) => Math.floor(principle + propertyTax + mortgageInsurance + 75);
