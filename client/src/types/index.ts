export type Product = {
    id: number,
    name: string,
    amount: number,
    status: boolean
}

export type Reservation = {
    reservation_uuid: string,
    active_purchases_count: number,
    active_purchases_sum: number,
    products: Product[]
}