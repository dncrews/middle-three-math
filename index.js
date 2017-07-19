module.exports = input => {
  const int = parseInt(input);

  if (int != input) return null;

  const digits = Math.ceil(Math.log(input) / Math.log(10));

  if (!(digits % 2)) return null;
  if (digits < 3) return null;

  const halfDigits = Math.floor(digits / 2) - 1;
  const remainingDigits = digits - halfDigits;
  const trimmedRight = Math.floor(int / Math.pow(10, halfDigits));
  const left = Math.floor(trimmedRight / 1000) * 1000;
  const trimmedLeft = trimmedRight - left;

  return trimmedLeft;
};
