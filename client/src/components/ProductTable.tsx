import React from 'react';

import { Product } from 'types';

const ProductTable: React.FC<{
  products: Product[];
}> = ({ products }: { products: Product[] }) => {
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
            className={product.status ? 'active' : 'cancelled'}
            key={product.id}
          >
            <td>{product.name}</td>
            <td>{product.status ? 'active' : 'cancelled'}</td>
            <td>{product.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;