import { Datatype } from "./datatype";
import { UUID } from "./uuid";
import { TokenCasing, EMPTY_TOKEN_CASING } from "./token";
import { SchemaSource } from "./schema";

// // // //

export interface AttributeAddonValue {
  [key: string]: null | string | boolean | number;
}

export interface Attribute {
  id: UUID;
  datatype: Datatype | null;
  defaultValue: null | string | boolean | number;
  identifiers: TokenCasing;
  internalNote: string; // Good place to store data relevant to the person editing the Codotype project
  source: SchemaSource;
  locked: boolean;
  addons: AttributeAddonValue;
}

// // // //

export const DEFAULT_ATTRIBUTE: Attribute = {
  id: "",
  datatype: null,
  defaultValue: null,
  identifiers: {
    ...EMPTY_TOKEN_CASING,
  },
  internalNote: "",
  source: SchemaSource.USER,
  locked: false,
  addons: {},
};
