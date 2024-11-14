// In App.js in a new project
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from './router';
type OnBoardingProps = NativeStackScreenProps<StackParamList, 'OnBoarding'>;

const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require('../assets/img/salad-eliadi.png')}
          style={styles.hero}
        />
        <View style={styles.article}>
          <Text style={styles.title}>Salad Buah Sukabumi</Text>
          <Text style={styles.title}>Jl. Raya Cibolang, Sukabumi ,Jawa Barat</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Start</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4ec51', // Warna hijau yang serupa dengan tampilan di gambar
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  article: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50', // Warna hijau untuk tombol
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
