import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 2,
  },
  item: {
    fontSize: 18,
    height: 70,
  },
});

const ProfilList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: "Mon Profil"},
          {key: "Mes centres d'intérêts"},
          {key: "Paramètres"},
          {key: "Centre d'aide"},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default ProfilList;