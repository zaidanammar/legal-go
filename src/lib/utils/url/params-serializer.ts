import { stringify } from 'qs';

type PrimitiveValues = string | number | boolean | null | undefined;
type Params = Record<
  string,
  PrimitiveValues | Array<PrimitiveValues> | Array<Params>
>;

export const customParamsSerializer = (params: Params) =>
  stringify(stringifyArrayValuesInParams(params), {
    encode: false,
    allowDots: true,
  });

const stringifyArrayValuesInParams = (params: Params) => {
  const modifiedParams = structuredClone(params);
  for (const key in modifiedParams) {
    if (Array.isArray(params[key])) {
      modifiedParams[key] = JSON.stringify(modifiedParams[key]);
    }
  }
  return modifiedParams;
};
