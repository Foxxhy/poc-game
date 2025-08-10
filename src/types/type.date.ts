export interface IConfigDayPeriod {
  label: string;
  weight: number;
}

export type TDay =  string[];

export interface IConfigDay {
  days: TDay;
  period: IConfigDayPeriod[];
}