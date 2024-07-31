import * as fs from 'fs';

export interface Assignment {
  reservation_uuid: string
  id: number
  name: string
}

const json = fs.readFileSync('./db/product_assignment.json', 'utf8');

const getAssignments = async (id?: string): Promise<Assignment[]> => {
  const data: Assignment[] = JSON.parse(json) as Assignment[]

  if (id === undefined) {
    return data || []
  } else {
    return data.filter((assignment) => assignment.reservation_uuid.includes(id)) || []
  }
}

export default {
  getAssignments,
}