import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="none"
      bounces={false}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{t('brand')}</Text>
        <Text style={styles.title}>{t('sign_in')}</Text>
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
