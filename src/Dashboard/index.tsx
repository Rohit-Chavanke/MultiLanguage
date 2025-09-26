import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="none"
      bounces={false}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{'Inn-flow'}</Text>
        <Text style={styles.title}>{'Sign In'}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
});

export default Dashboard;
