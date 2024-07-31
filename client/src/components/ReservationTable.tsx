import { Fragment } from 'react';

import { Reservation } from 'types';
import ReservationtRow from 'components/ReservationRow';

const ReservationTable: React.FC<{ data: Reservation[] }> = ({
  data,
}: {
  data: Reservation[];
}) => {
  return (
    <div className='w-full overflow-auto'>
      <table className='w-full'>
        <thead className='sticky bg-white'>
          <tr>
            <th></th>
            <th>Reservation UUID</th>
            <th>Number of Active Purchases</th>
            <th>Sum of Active Charges</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((reservation) => (
            <Fragment key={reservation.reservation_uuid}>
              <ReservationtRow reservation={reservation} />
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
