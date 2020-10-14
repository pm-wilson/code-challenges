function dateAdder(date, diff) {
  const diffOperator = diff.slice(diff.length - 1),
  diffNumber = Number(diff.slice(0, diff.length -1)),
  newDate = new Date(date);

  if (diffOperator === 's') return date.setSeconds(newDate.getSeconds() + diffNumber);
  if (diffOperator === 'm') return date.setMinutes(newDate.getMinutes() + diffNumber);
  if (diffOperator === 'd') return date.setDate(newDate.getDate() + diffNumber);
  if (diffOperator === 'w') return date.setDate(newDate.getDate() + diffNumber * 7);
  if (diffOperator === 'M') return date.setMonth(newDate.getMonth() + diffNumber);
  if (diffOperator === 'y') return date.setFullYear(newDate.getFullYear() + diffNumber);
}

dateAdder(date, diff)

