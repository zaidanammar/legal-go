import { isDistinct } from '@/lib/utils/array/is-distinct';

describe('isDistinct', () => {
  test('should return true for an empty array', () => {
    const collection: Array<unknown> = [];
    expect(isDistinct(collection)).toBe(true);
  });

  test('should return true for an array with distinct elements', () => {
    const collection = [1, 2, 3, 4, 5];
    expect(isDistinct(collection)).toBe(true);
  });

  test('should return false for an array with duplicate elements', () => {
    const collection = [1, 2, 3, 4, 5, 1];
    expect(isDistinct(collection)).toBe(false);
  });

  test('should return true for a null or undefined collection', () => {
    expect(isDistinct(null)).toBe(true);
    expect(isDistinct(undefined)).toBe(true);
  });
});
