export const calculateAmountDown = (homePrice, percentDown) => Math.floor(homePrice * percentDown);

export const calculatePercentDown = (homePrice, amountDown) => amountDown / homePrice;

export const calcPropTax = (homePrice) => Math.floor(homePrice * 0.00056);

export const calcPrinciple = (
  homePrice,
  downPayment,
  interestRate,
  mortgageType,
) => {
  const amountOwed = homePrice - downPayment;
  const totalWithInterest = amountOwed * (1 + interestRate / 100);
  return Math.floor(totalWithInterest / mortgageType);
};

export const calcMortgageIns = (percentDown, homePrice, downPayment) => {
  const insuranceFormula = Math.floor((homePrice - downPayment) * 0.000366);
  if (percentDown < 0.05) {
    return insuranceFormula + 250;
  }
  if (percentDown < 0.1) {
    return insuranceFormula + 175;
  }
  if (percentDown < 0.15) {
    return insuranceFormula + 100;
  }
  if (percentDown < 0.2) {
    return insuranceFormula;
  }
  return 0;
};

export const calcPayment = (principle, propertyTax, mortgageInsurance = 0) => (Math.floor(principle + propertyTax + mortgageInsurance + 75)
);
