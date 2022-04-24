export interface Scope {
  name: string;
  description: string;
}

export enum AttributeType {
  general,
  meeOrders,
}

export interface AttributeItem {
  name: string;
  isOptional: boolean;
  description: string;
  value?: string;
  checked: boolean;
  canRead: boolean;
  canWrite: boolean;
  type: AttributeType;
}

export interface ConsentData {
  logoUrl: string;
  rpName: string;
  scope: Scope[];
  attributes: AttributeItem[];
}
