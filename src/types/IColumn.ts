export interface IColumn {
  id: string;
  title: string;
  order: number;
}

export interface ICreateColumnDto {
  title: string;
  order: number;
}

export interface IUpdateColumnDto {
  title: string;
  order: number;
}
