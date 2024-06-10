// import React from 'react';
import Layout from './Layout/Layout';

import Profile from './Profile/Profile';
import user from '../data/user.json';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

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
