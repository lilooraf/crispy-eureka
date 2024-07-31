import { Request, Response } from 'express';
import ChargeModel, { Charge } from '../models/Charge';
import AssignmentModel, { Assignment } from '../models/Assignment';

type Product = {
  id: number,
  name: string,
  amount: number,
  status: boolean
}

type Reservation = {
  reservation_uuid: string,
  active_purchases_count: number,
  active_purchases_sum: number,
  products: Product[]
}

const getReservationTable = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const assignments: Assignment[] = await AssignmentModel.getAssignments(id);

    // Extract assignment IDs
    const assignmentIds = assignments.map(assignment => assignment.id);

    // Fetch only relevant charges
    const charges: Charge[] = await ChargeModel.getChargesBySpecialProductAssignmentIds(assignmentIds);

    // Group assignments by reservation_uuid
    const groupedAssignmentsMap = new Map<string, Assignment[]>();
    assignments.forEach(assignment => {
      if (!groupedAssignmentsMap.has(assignment.reservation_uuid)) {
        groupedAssignmentsMap.set(assignment.reservation_uuid, []);
      }
      groupedAssignmentsMap.get(assignment.reservation_uuid)!.push(assignment);
    });

    // Transform grouped assignments into reservations
    const reservations: Reservation[] = Array.from(groupedAssignmentsMap.entries()).map(([reservation_uuid, assignments]) => {
      const products: Product[] = assignments.map(assignment => {
        const relatedCharge = charges.find(charge => charge.special_product_assignment_id === assignment.id);
        return {
          id: assignment.id,
          name: assignment.name,
          amount: relatedCharge?.amount || 0,
          status: relatedCharge?.active || false
        };
      });

      return {
        reservation_uuid,
        active_purchases_count: products.filter(product => product.status).length,
        active_purchases_sum: products.reduce((acc, product) => acc + product.amount, 0),
        products
      };
    });

    res.json(reservations);

  } catch (error) {
    res.status(500).send(error)
  }
}

export default {
  getReservationTable
}