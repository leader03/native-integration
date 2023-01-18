import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import axios from 'axios';

export default function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/task/')
        setData(response.data)
      console.log(response.data)
      } catch (error) {
        console.log(error);
      }
      
      }
      fetchUser()
  }, [])

 
  return (
    <View style={styles.container}>
      {data.map(item => <Card key={item.id} name={item.name} />)}
      <Card />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50
  },
});
