// import React from 'react';
import Layout from './components/Layout/Layout';

import Profile from './components/Profile/Profile';
import user from './data/user.json';

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

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
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Layout>
  );
};

export default App;
