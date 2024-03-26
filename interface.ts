export interface Reservation {
  _id: string;
  reserveDate: Date;
  user: string;
  workingSpace: string;
  createdAt: Date;
  __v: number;
}

interface SpaceItem {
  _id: string;
  name: string;
  address: string;
  tel: string;
  openTime: string;
  closeTime: string;
  remaining: string;
  __v: number;
  reservation: Reservation[];
  id: string;
}

interface SpaceJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: SpaceItem[];
}
