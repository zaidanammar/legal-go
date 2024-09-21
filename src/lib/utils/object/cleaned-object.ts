import pickBy from 'lodash/pickBy';

export const cleanedObject = (data: Record<string, unknown>) =>
  pickBy(data, (value) => {
    return (
      value !== null && value !== undefined && value !== '' && value !== false
    );
  });
