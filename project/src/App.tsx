import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Brands from './pages/Brands';
import Reports from './pages/Reports';
import Subscriptions from './pages/Subscriptions';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <Orders />;
      case 'users':
        return <Users />;
      case 'brands':
        return <Brands />;
      case 'reports':
        return <Reports />;
      case 'subscriptions':
        return <Subscriptions />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;