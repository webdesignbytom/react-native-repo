import { FlatList, StyleSheet, View } from 'react-native';
import { colors } from '../styles/constants';
import GuestItem from '../components/GuestItem';
import { useEffect, useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';

type Guest = {
  id: string;
  firstName: string;
  lastName: string;
  deadline?: string;
  attending: boolean;
};

const API_URL = "http://45063d72-10f4-4077-a954-686bc0c70988.id.repl.co"

const renderItem = (item: { item: Guest }) => <GuestItem guest={item.item} />;

export default function Index() {
  const { firstName, lastName } = useLocalSearchParams();
  
  const [guests, setGuests] = useState<Guest[]>([
  ]);


  return (
    <>
      <FlatList
        style={styles.list}
        data={guests}
        renderItem={renderItem}
        keyExtractor={(item: Guest) => item.id}
      />
      <Link style={styles.button} href="/new-guest">New Guest</Link>
      <Link style={styles.button} href="/toms">Tomspage</Link>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
  list: {
    marginTop: 30,
    width: '100%',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    textAlign: 'center',
    backgroundColor: colors.cardBackground,
    fontSize: 24
  }
});
