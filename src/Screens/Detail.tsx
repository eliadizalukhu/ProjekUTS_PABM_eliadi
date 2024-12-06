import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Detail = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data dari API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://192.168.1.23:3000/routes/products/detail'); 
        if (!response.ok) {
          throw new Error('Gagal mengambil data produk');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product || null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detail Produk</Text>
      
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}
      
      {!loading && !error && (
        <View style={styles.buttonsContainer}>
          {products.map((product) => (
            <Button
              key={product.id}
              title={product.name}
              onPress={() => handleProductClick(product.id)}
            />
          ))}
        </View>
      )}

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
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Detail;