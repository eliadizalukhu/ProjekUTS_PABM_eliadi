import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from './router';

type DetailProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Detail'>;
};

const Detail: React.FC<DetailProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/img/salad-mix.png')} // Gambar utama produk
          style={styles.productImage}
        />
        <View style={styles.header}>
          <Text style={styles.title}>Salad Buah Mix</Text>
          <Text style={styles.price}>Rp25.000</Text>
        </View>
        <Text style={styles.description}>
          Salad Buah Mix terbuat dari berbagai macam buah segar seperti apel, anggur, stroberi, kiwi, dan melon. Salad ini disajikan dengan campuran yogurt dan keju yang lezat, memberikan rasa segar dan manis yang memanjakan lidah Anda.
        </Text>
        <Text style={styles.sectionTitle}>Detail Produk:</Text>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Bahan:</Text>
          <Text style={styles.detailValue}>Apel, Anggur, Stroberi, Kiwi, Melon</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Berat:</Text>
          <Text style={styles.detailValue}>250 gram</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Tanggal Kadaluarsa:</Text>
          <Text style={styles.detailValue}>2 Hari setelah pembelian</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tambahkan ke Keranjang</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginVertical: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Detail;
