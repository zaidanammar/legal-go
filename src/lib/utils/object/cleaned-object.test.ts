import { cleanedObject } from '@/lib/utils/object/cleaned-object';

describe('cleanedObject', () => {
  test('should strip empty and false values', () => {
    const result = cleanedObject({
      hi: false,
      hello: true,
      fullName: '',
      phone: undefined,
      identity_number: null,
    });
    expect(result).toStrictEqual({ hello: true });
  });

  test('should keep 0 value', () => {
    const result = cleanedObject({
      hi: false,
      hello: 0,
      fullName: 'name',
      phone: undefined,
      identity_number: null,
    });
    expect(result).toStrictEqual({ hello: 0, fullName: 'name' });
  });
});
