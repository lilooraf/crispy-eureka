export enum ChargeStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    ASSIGNED_ONLY = 'assigned_only'
}

export type Product = {
    id: number,
    name: string,
    amount: number,
    status: boolean
    productStatus: ChargeStatus
}

export type Reservation = {
    reservation_uuid: string,
    active_purchases_count: number,
    active_purchases_sum: number,
    products: Product[]
}