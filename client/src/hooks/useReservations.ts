import { getReservations } from 'api/reservations';
import { useState, useCallback } from 'react';

import { Reservation } from 'types';

const useReservations = () => {
  const [data, setData] = useState<Reservation[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReservations = useCallback(async (uuid: string) => {
    try {
      setError(null);
      setLoading(true);
      const result = await getReservations(uuid);
      setData(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchReservations };
};

export default useReservations;