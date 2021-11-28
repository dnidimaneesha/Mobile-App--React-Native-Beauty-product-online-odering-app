import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import HederTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar'; 
import Categories from '../components/home/Categories';


export default function Home({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#efd4ec', padding: 15}}>
        <HederTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
