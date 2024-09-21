import { type Rule } from 'antd/es/form';

import {
  nameRegex,
  numericOnlyRegex,
  phoneNumberRegex,
} from '@/lib/constants/regex';

type IdentificationNumberValidationProps = {
  isRequired: boolean;
};

export const identificationNumberValidation = ({
  isRequired,
}: IdentificationNumberValidationProps) => [
  {
    required: isRequired,
  },
  {
    min: 16,
    max: 16,
    message: 'NIK harus terdiri dari 16 karakter',
  },
];

type IdentificationTaxNumberValidationProps = {
  isRequired: boolean;
};

export const identificationTaxNumberValidation = ({
  isRequired,
}: IdentificationTaxNumberValidationProps) => [
  {
    required: isRequired,
  },
  {
    min: 15,
    max: 16,
    message: 'NPWP harus terdiri dari 15 - 16 karakter',
  },
];

type PhoneNumberValidationProps = {
  isRequired: boolean;
  fieldName?: string;
};

export const phoneNumberValidation = ({
  isRequired,
  fieldName = 'No. handphone',
}: PhoneNumberValidationProps): Array<Rule> => [
  {
    required: isRequired,
    message: `${fieldName} harus diisi terlebih dahulu`,
  },
  {
    pattern: phoneNumberRegex,
    message: `Mohon masukkan ${fieldName} yang valid`,
  },
  () => ({
    validator(_, value) {
      if (Number(String(value).charAt(0)) === 0 || (!isRequired && !value)) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(`${fieldName} harus diawali dengan angka 0`)
      );
    },
  }),
];

type EmailValidationProps = {
  isRequired: boolean;
};

export const emailValidation = ({
  isRequired,
}: EmailValidationProps): Array<Rule> => [
  {
    required: isRequired,
  },
  {
    type: 'email',
    message: 'Format email tidak valid',
  },
];

type NameValidationProps = {
  isRequired: boolean;
  fieldName?: string;
};

export const nameValidation = ({
  isRequired,
  fieldName = 'Nama',
}: NameValidationProps) => [
  {
    required: isRequired,
    message: `${fieldName} harus diisi terlebih dahulu`,
  },
  {
    pattern: nameRegex,
    message: `Mohon masukkan ${fieldName} yang valid`,
  },
];

type NumericOnlyValidationProps = {
  isRequired: boolean;
  fieldName?: string;
};

export const numericOnlyValidation = ({
  isRequired,
  fieldName = 'Nomor',
}: NumericOnlyValidationProps) => [
  {
    required: isRequired,
    message: `${fieldName} harus diisi terlebih dahulu`,
  },
  {
    pattern: numericOnlyRegex,
    message: `Mohon masukkan ${fieldName} yang valid`,
  },
];

type PercentageValueValidationOptions = {
  isRequired?: boolean;
};

export const percentageValueValidation = (
  params?: PercentageValueValidationOptions
): Array<Rule> => [
  { required: params?.isRequired ?? true },
  { type: 'number', min: 0, max: 100 },
];
