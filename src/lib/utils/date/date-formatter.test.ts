import { dateFormatter } from '@/lib/utils/date/date-formatter';

describe('dateFormatter', () => {
  test('should return undefined for a null or undefined date', () => {
    expect(dateFormatter({ date: null })).toBe(undefined);
    expect(dateFormatter({ date: undefined })).toBe(undefined);
  });

  test('should return a formatted date string for a valid date', () => {
    const date = new Date();

    expect(dateFormatter({ date })).toBe(
      `${date.getFullYear()}-${(date.getMonth() + 1)
        .toLocaleString()
        .padStart(2, '0')}-${date.getDate().toLocaleString().padStart(2, '0')}`
    );
  });

  test('should return a formatted date string with custom format', () => {
    const date = new Date();
    expect(dateFormatter({ date, format: 'DD/MM/YYYY' })).toBe(
      `${date.getDate().toLocaleString().padStart(2, '0')}/${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}/${date.getFullYear()}`
    );
  });
});
