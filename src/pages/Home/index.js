import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Balance } from '../../components/Balance';
import { Movements } from '../../components/Movements';
import { Actions } from '../../components/Actions';
import { MotiView } from 'moti';
import { useState } from 'react';

const list = [
  {
    id: 1,
    label: 'Conta de luz',
    value: 500.00,
    date: '17/08/2023',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: 1500.00,
    date: '17/08/2023',
    type: 1
  },
  {
    id: 3,
    label: 'Chuva de benção',
    value: 2000.00,
    date: '17/08/2023',
    type: 1
  },
]

function Total(movements) {
  let expenses = 0;
  let incomes = 0;
  for(const movement of movements) {
    if(movement.type === 1){
      incomes = incomes + movement.value
    } else {
      expenses = expenses + movement.value
    }
  }

  return [incomes, expenses]
}

export function Home() {

  const [incomes, expenses] = Total(list)

  return (
    <View style={styles.container}>
      <Header name="Cemast"/>
      <Balance balance={incomes} expenses={expenses}/>
    
      <Actions/>

      <MotiView
        from={{
          translateY: 300,
          opacity: 0
        }}
        animate={{
          translateY: 0,
          opacity: 1
        }}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 300
        }}
      >
        <Text style={styles.title}>Ultimas movimentações</Text>

        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item }) => <Movements data={item}/>}
        />
      </MotiView>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
    },
    list: {
      marginStart: 14,
      marginEnd: 14,
    }
  });