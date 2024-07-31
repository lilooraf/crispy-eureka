import { useState, useEffect } from 'react';

import 'styles/reservation.css';
import ReservationTable from 'components/ReservationTable';
import useReservations from 'hooks/useReservations';

export default function ReservationPage() {
  const [uuid, setUuid] = useState<string>('');
  const { data, loading, error, fetchReservations } = useReservations();

  useEffect(() => {
    // Todo: debounce the fetchReservations call (didint have time to implement)
    fetchReservations(uuid);
  }, [uuid]);

  return (
    <div className='w-full page-container'>
      <div>
        <label htmlFor='uuid-input'>Reservation UUID:</label>
        <input
          className='uuid-input'
          id='uuid-input'
          type='text'
          placeholder='Enter reservation UUID'
          onChange={(e) => {
            setUuid(e.target.value);
          }}
        />
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <ReservationTable data={data} />}
    </div>
  );
}
