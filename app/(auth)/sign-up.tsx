import { Link } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import SignIn from './sign-in'

const SignUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">
        Already have an account? Sign In
      </Link>
    </View>
  )
}

export default SignUp   
