// import React from 'react';
import Layout from './components/Layout/Layout';

import Profile from './components/Profile/Profile';
import user from '../src/data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from '../src/data/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from '../src/data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from '../src/data/transactions.json';

const App = () => {
  return (
    <Layout>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Layout>
  );
};

export default App;
