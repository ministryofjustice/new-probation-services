type Address = {
  ADDRESS_NUMBER: number,
  STREET_NAME: string,
  TOWN_CITY: string,
  COUNTY: string,
  POSTCODE: string
};

type Alias = {
  FIRST_NAME: string,
  SURNAME: string,
  DATE_OF_BIRTH_DATE: string
};

export type Offender = {
  FIRST_NAME: string,
  SURNAME: string,
  DATE_OF_BIRTH_DATE: string,
  MOBILE_NUMBER: string,
  PNC_NUMBER: string,
  CRN: string,
  ADDRESSES: Array<Address>,
  ALIASES: Array<Alias>
};
