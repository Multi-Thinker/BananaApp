import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import UserTable from './components/UserTable';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <UserTable />
    </SafeAreaView>
  );
};

export default App;
