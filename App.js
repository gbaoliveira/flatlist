import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [nomes] = useState([
    "Ana Maria",
    "Bruno Alves",
    "Carlos José",
    "Daniel Martins",
    "Efraim Gomes",
    "Francisco Junior",
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
      <Text style={{fontSize: 16, marginBottom: 10}}>Nomes:</Text>
      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <Text style={styles.nome}>{item}</Text>
        )}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
  },
  nome: {
    fontSize: 16,
  },
});