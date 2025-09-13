import React from 'react';
import { FlatList } from 'react-native';
import StudentItem from './ProductItem';

interface Product {
  name: string;
  price: number;
}
interface Props {
  carts: Product[];
  onDelete: (index: number) => void;
}

const ProductList: React.FC<Props> = ({ carts, onDelete }) => {
  return (
    <FlatList
      data={carts}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <StudentItem
          name={item.name}
          price={item.price}
          onDelete={() => onDelete(index)}
        />
      )}
    />
  );
};

export default ProductList;