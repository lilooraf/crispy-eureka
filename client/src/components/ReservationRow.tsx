import React, { useState } from 'react';

import { Reservation } from 'types';
import ProductTable from 'components/ProductTable';

const ReservationtRow: React.FC<{
  reservation: Reservation;
}> = ({ reservation }: { reservation: Reservation }) => {
  const [isRowOpen, setIsRowOpen] = useState<boolean>(false);

  const toggleRow = () => {
    setIsRowOpen(!isRowOpen);
  };

  return (
    <>
      <tr onClick={toggleRow} className='cursor-pointer'>
        <td>{isRowOpen ? 'V' : '>'}</td>
        <td>{reservation.reservation_uuid}</td>
        <td>{reservation.active_purchases_count}</td>
        <td>{reservation.active_purchases_sum}</td>
      </tr>

      {isRowOpen && (
        <tr>
          <td colSpan={4}>
            <ProductTable products={reservation.products} />
          </td>
        </tr>
      )}
    </>
  );
};

export default ReservationtRow;
