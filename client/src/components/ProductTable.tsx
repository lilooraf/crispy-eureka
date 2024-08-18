import React from 'react';

import { ChargeStatus, Product } from 'types';

const ProductTable: React.FC<{
  products: Product[];
}> = ({ products }: { products: Product[] }) => {

  const getProductStatus = (status: ChargeStatus) => {
    switch (status) {
      case ChargeStatus.ACTIVE:
        return 'active';
      case ChargeStatus.INACTIVE:
        return 'cancelled';
      case ChargeStatus.ASSIGNED_ONLY:
        return 'assigned_only';
    }
  }

  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Status</th>
          <th>Charge</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            className={getProductStatus(product.productStatus)}
            key={product.id}
          >
            <td>{product.name}</td>
            <td>{product.productStatus === ChargeStatus.ASSIGNED_ONLY ? null : getProductStatus(product.productStatus)}</td>
            <td>{product.productStatus === ChargeStatus.ASSIGNED_ONLY ? null : product.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;