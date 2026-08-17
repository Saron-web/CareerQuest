import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EditProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Edit Profile</Text>
        </View>

        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://www.shutterstock.com/image-photo/portrait-headshot-confident-positive-woman-260nw-2734807251.jpg' }} 
            style={styles.avatar} 
          />
        </View>

        <View style={styles.form}>
          {['First Name', 'Last Name', 'Username', 'Email', 'Phone Number', 'Birth', 'Gender'].map(
            (label, index) => (
              <View key={index} style={styles.inputGroup}>
                <Text style={styles.label}>{label}</Text>
                <TextInput style={styles.input} placeholder={label} />
              </View>
            )
          )}
        </View>

        <TouchableOpacity style={styles.passwordButton}>
          <Text style={styles.passwordText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { alignItems: 'center', paddingVertical: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
  avatarContainer: { alignItems: 'center', marginVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  form: { paddingHorizontal: 20 },
  inputGroup: { marginBottom: 15 },
  label: { fontWeight: '600', marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  passwordButton: {
    backgroundColor: '#007AFF',
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  passwordText: { color: '#fff', fontWeight: 'bold' },
});
