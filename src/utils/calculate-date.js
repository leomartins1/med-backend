function calculateAge(birthday) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function validateAge(value, helpers) {
  const age = calculateAge(value);
  if (age < 18) {
    return helpers.error('age.invalid', { age });
  }
  return value;
}

module.exports = { calculateAge, validateAge }