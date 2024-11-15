import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;

}

const products: Product[] = [
  { 
    id: 1, 
    name: 'Salad Buah', 
    description: 'Salad buah segar dengan berbagai buah pilihan.', 
    price: 25000, 
  },
  { 
    id: 2, 
    name: 'Salad Sayur', 
    description: 'Salad sayur sehat dengan berbagai sayuran segar.', 
    price: 20000,
  },
  { 
    id: 3, 
    name: 'Minuman', 
    description: 'Minuman segar untuk menemani salad anda.', 
    price: 22000,
  },
  { 
    id: 4, 
    name: 'Buah Asli', 
    description: 'Buah asli pilihan yang segar dan manis.', 
    price: 15000,
  },
];


const Detail = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product || null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detail Produk</Text>
      
      <View style={styles.buttonsContainer}>
        <Button title="Salad Buah" onPress={() => handleProductClick(1)} />
        <Button title="Salad Sayur" onPress={() => handleProductClick(2)} />
        <Button title="Minuman" onPress={() => handleProductClick(3)} />
        <Button title="Buah Asli" onPress={() => handleProductClick(4)} />
      </View>

      {selectedProduct && (
        <View style={styles.productDetail}>
          <Text style={styles.productName}>{selectedProduct.name}</Text>
          <Text>{selectedProduct.description}</Text>
          <Text>Harga: Rp{selectedProduct.price}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  productDetail: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Detail;
