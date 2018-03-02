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
  OFFENDER_ID: number,
  FIRST_NAME: string,
  SURNAME: string,
  DATE_OF_BIRTH_DATE: string,
  MOBILE_NUMBER: string,
  PNC_NUMBER: string,
  CRN: string,
  ADDRESSES: Array<Address>,
  ALIASES: Array<Alias>,
  CURRENT_RESTRICTION: number,
  CURRENT_EXCLUSION: number,
  RESTRICTION_MESSAGE: string,
  EXCLUSION_MESSAGE: string,
  CURRENT_REMAND_STATUS: string,
  CURRENT_TIER: string
};
