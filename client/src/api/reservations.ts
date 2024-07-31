import { Reservation } from "types";
import { API_BASE_URL } from "config/constants";

export const getReservations = async (uuid: string): Promise<Reservation[]> => {
    const response = await fetch(`${API_BASE_URL}/reservations/${uuid}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}