import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = () => {
    Alert.alert(
      'Select Language',
      '',
      [
        { text: 'English', onPress: () => setLanguage('English') },
        { text: 'French', onPress: () => setLanguage('French') },
        { text: 'Spanish', onPress: () => setLanguage('Spanish') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleAbout = () => {
    Alert.alert(
      'About CareerQuestApp',
      'CareerQuestApp helps you explore careers, build your profile, and prepare for your future.'
    );
  };

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>My Profile</Text>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={handleLanguageChange}>
            <Text style={styles.menuText}>Language: {language}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleAbout}>
            <Text style={styles.menuText}>About CareerQuestApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Text style={[styles.menuText, { color: 'red' }]}>Log Out</Text>
          </TouchableOpacity>
        </View>
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
  menu: { marginTop: 20 },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: { fontSize: 16 },
});
