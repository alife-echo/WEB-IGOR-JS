import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Cat from './cat'
import { Content_Page_One } from './page1'
import { ScrollView, View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <ScrollView>
      <Content_Page_One></Content_Page_One>
      <Cat></Cat>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
