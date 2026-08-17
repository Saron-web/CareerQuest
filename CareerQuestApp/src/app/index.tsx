import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>My Profile</Text>
        </View>

        <View style={styles.profileSection}>
          <Image source={{ uri: 'https://www.shutterstock.com/image-photo/portrait-headshot-confident-positive-woman-260nw-2734807251.jpg' }} style={styles.avatar} />
          <Text style={styles.name}>Sabrina Aryan</Text>
          <Text style={styles.email}>SabrinaAry208@gmail.com</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => router.push('/edit-profile')}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menu}>
          {[
            'Favourites',
            'Downloads',
            'Languages',
            'Location',
            'Subscription',
            'Display',
            'Clear Cache',
            'Clear History',
            'Log Out',
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.version}>App Version 2.3</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  profileSection: { alignItems: 'center', marginVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  email: { color: '#666', marginBottom: 10 },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editText: { color: '#fff', fontWeight: 'bold' },
  menu: { marginTop: 20 },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: { fontSize: 16 },
  version: { textAlign: 'center', color: '#999', marginVertical: 20 },
});


