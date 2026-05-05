import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">
        Create an account
      </Link>
    </View>
  )
}

export default SignIn