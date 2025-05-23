import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const ProfileScreen = ({ navigation }) => {

  const { user, logout } = useContext(AuthContext)

  const handleLogout = async () => {
    await logout()
    navigation.replace('Login')

  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>👤 Meu Perfil</Text>
      <Text>E-mail: {user?.email}</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  )
}

export default ProfileScreen