import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from './router';

type HomeProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Toko Salad Buah Sukabumi</Text>
          <Image
            source={require('../assets/img/salad-eliadi.png')}
            style={styles.profil}
          />
        </View>
        <TextInput
          style={styles.search}
          placeholder="Cari Salad Buah Favorit"
        />
        <View style={styles.banner}>
          <Image
            source={require('../assets/img/salad-buahku.png')}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>Diskon Spesial Hari Ini!</Text>
          <View style={styles.promoBadge}>
            <Text style={styles.promoText}>Promo</Text>
          </View>
        </View>
        <View style={styles.scrollmenu}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.menuButtonActive}>
              <Text style={styles.menuButtonTextActive}>Salad Buah</Text>
              <Text style={styles.menuButtonTextActive}>Salad Buah sukabumi adalah hidangan yang banyak dicari</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.cards}>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Image
                source={require('../assets/img/salad-mix.png')}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Salad Buah</Text>
              <Text style={styles.cardPrice}>Rp25.000</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Image
                source={require('../assets/img/salad-sayur.png')}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Salad sayur</Text>
              <Text style={styles.cardPrice}>Rp20.000</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Image
                source={require('../assets/img/minuman.png')}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>minuman</Text>
              <Text style={styles.cardPrice}>Rp22.000</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Image
                source={require('../assets/img/buah-asli.png')}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Buah Asli</Text>
              <Text style={styles.cardPrice}>Rp15.000</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* Removed the navbar section */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  profil: {
    width: 70,
    height: 70,
    borderRadius: 25,
  },
  search: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    height: 40,
    marginVertical: 10,
  },
  banner: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 180,
  },
  bannerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  promoBadge: {
    position: 'absolute',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 10,
    top: 10,
    left: 10,
  },
  promoText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  scrollmenu: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  menuButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  menuButtonActive: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  menuButtonText: {
    color: '#333',
  },
  menuButtonTextActive: {
    color: '#fff',
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  cardPrice: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  navIcon: {
    width: 26,
    height: 26,
  },
});

export default Home;
