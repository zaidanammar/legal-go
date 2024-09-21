import { customParamsSerializer } from '@/lib/utils/url/params-serializer';

global.structuredClone = (val: Record<string, unknown>) =>
  JSON.parse(JSON.stringify(val));

describe('customParamsSerializer', () => {
  test('should serialize params', () => {
    const params = {
      name: 'John',
      total: 6,
    };
    const result = customParamsSerializer(params);

    expect(result).toBe('name=John&total=6');
  });

  test('should serialize array param value into stringified array', () => {
    const params = {
      name: 'John',
      total: 6,
      filters: [
        { start_date: '2000-01-01', end_date: '2000-02-02' },
        { start_date: '2000-03-03', end_date: '2000-04-04' },
      ],
      ids: ['1234-5678', '9876-5432'],
    };
    const result = customParamsSerializer(params);

    expect(result).toBe(
      'name=John&total=6&filters=[{"start_date":"2000-01-01","end_date":"2000-02-02"},{"start_date":"2000-03-03","end_date":"2000-04-04"}]&ids=["1234-5678","9876-5432"]'
    );
  });
});
