export type ShipComponentOperationalStatus = 'broken' | 'working';
export type ShipComponentType = 'engine' | 'power' | 'shields';

export interface ShipComponent {
  isPowered: boolean;
  name: string;
  operationalStatus: ShipComponentOperationalStatus;
  powerRequirement: number;
  type: ShipComponentType;
}
