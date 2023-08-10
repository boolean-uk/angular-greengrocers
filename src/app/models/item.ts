export interface Item {
  [key: string]: any;
  
  id: string;
  name: string;
  weight: number;
  type: ItemType;
}

export enum ItemType {
  Tshirt = "tshirt",
  Trouser = "trouser",
  Outwear = "outwear",
  Underwear = "underwear"
}

