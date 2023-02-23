import { BuyLimit } from '../back-testing';
import { BuyAtMarket } from '../back-testing';
import { Alert } from '../alarme';

import { RSI } from '../indicator';

export type Open = 'open';
export type High = 'high';
export type Low = 'low';
export type Close = 'close';


export type Source = Open | High | Low | Close | Volume;

export enum SourceEnum {
  Open = 'open',
  High = 'high',
  Low = 'low',
  Close = 'close',
}

export type Price = number;
export type Quantity = number;
export type Period = number;
export type Volume = number;


export type Indicator = RSI;

export type GREATER_THAN = '>';
export type GREATER_THAN_OR_EQUAL_TO = '>=';
export type LESS_THAN = '<';
export type LESS_THAN_OR_EQUAL_TO = '<=';
export type EQUAL_TO = '=';
export type NOT_EQUAL_TO = '!=';

export type Relational =
  | GREATER_THAN
  | GREATER_THAN_OR_EQUAL_TO
  | LESS_THAN
  | LESS_THAN_OR_EQUAL_TO
  | EQUAL_TO
  | NOT_EQUAL_TO;

export type AND = 'and';
export type OR = 'or';
export type Logic = AND | OR;

export type Condition = Indicator | Relational | Logic;

export type Entry = BuyLimit | BuyAtMarket;
export type Exit = BuyAtMarket;

export type Alarme = Alert;
