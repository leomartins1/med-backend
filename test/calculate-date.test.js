const JoiBase = require('joi')
const JoiDate = require('@joi/date')

const Joi = JoiBase.extend(JoiDate)

const { validateAge, calculateAge } = require('../src/utils/calculate-date')

describe('Age Calculation', () => {
  test('Calculate age correctly', () => {
    const birthdate = new Date('01/15/1990'); 
    const age = calculateAge(birthdate);
    expect(age).toBeGreaterThanOrEqual(18);
  });

  test('Validate age correctly', () => {
    const validAge = '01/15/1990';
    const invalidAge = '01/11/2013';
    const schema = Joi.object({
      age: Joi.date().custom(validateAge, 'custom validation').format('MM/DD/YYYY'),
    });

    const validResult = schema.validate({ age: validAge });
    const invalidResult = schema.validate({ age: invalidAge });

    expect(validResult.error).toBeUndefined();
    expect(invalidResult.error).toBeDefined();
  });
});