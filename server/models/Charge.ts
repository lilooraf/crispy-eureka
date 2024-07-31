import * as fs from 'fs';

export interface Charge {
  special_product_assignment_id: number
  active: boolean
  amount: number
}

const json = fs.readFileSync('./db/product_charges.json', 'utf8');

const getChargesBySpecialProductAssignmentIds = async (ids: number[]): Promise<Charge[]> => {
  const data = JSON.parse(json) as Charge[]
  return data.filter((charge: Charge) => ids.includes(charge.special_product_assignment_id)) || []
}

export default {
  getChargesBySpecialProductAssignmentIds
}