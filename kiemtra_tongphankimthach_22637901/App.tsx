import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
import ProductList from './components/ProductList';

interface Product{
  name: string;
 price: number;
}

export default function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [carts, setCarts] = useState<Product[]>([]);
  const [total ,setTotal ] = useState('0');
  const handleAddStudent = () => {
    if (name && price) {
      setCarts([...carts, { name, price: parseFloat(price) }]);
      setName('');
      setPrice('');
      setTotal(price);
    }
  };

  const handleDeleteStudent = (index: number) => {
    const newList = [...carts];
    newList.splice(index, 1);
    setCarts(newList);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Tên sản phẩm "
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="giá "
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Thêm và giỏ hàng " onPress={handleAddStudent} />
<Text>Tổng tiền là : {total} VND </Text>
      <ProductList carts={carts} onDelete={handleDeleteStudent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
});