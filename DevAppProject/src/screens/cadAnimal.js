import React from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.topBar}></View>
        <View style={styles.menuBar}>
          <View style={styles.menuBarText}>
            <TouchableOpacity>
              <Feather name="menu" size={24} color="#434343" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  topBar: {
    backgroundColor: "#88C9BF",
    minHeight: 24,
  },
  menuBar: {
    backgroundColor: "#CFE9E5",
    minHeight: 56,
    paddingTop: 16,
    paddingLeft: 16,
  },
  menuBarText: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
  },
});
