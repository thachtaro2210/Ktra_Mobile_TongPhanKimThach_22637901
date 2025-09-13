import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  name: string;
  price: number;
  onDelete: () => void;
}

const ProductItem: React.FC<Props> = ({ name, price, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text style={{ color: price >= 5 ? 'green' : 'red' }}>
        {name} - {price}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delete: {
    color: 'red',
  },
});

export default ProductItem;