import React from 'react';
import { 
  DollarSign, 
  Users, 
  ShoppingBag, 
  TrendingUp,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  // Sample data for the dashboard
  const stats = [
    { 
      id: 1, 
      title: 'Total Revenue', 
      value: '$24,532', 
      change: '+2.5%', 
      trend: 'up',
      icon: <DollarSign size={20} />
    },
    { 
      id: 2, 
      title: 'Active Users', 
      value: '1,245', 
      change: '+15.3%', 
      trend: 'up',
      icon: <Users size={20} />
    },
    { 
      id: 3, 
      title: 'New Orders', 
      value: '486', 
      change: '-2.7%', 
      trend: 'down',
      icon: <ShoppingBag size={20} />
    },
    { 
      id: 4, 
      title: 'Conversion Rate', 
      value: '3.27%', 
      change: '+1.2%', 
      trend: 'up',
      icon: <TrendingUp size={20} />
    }
  ];

  // Recent activities data
  const recentActivities = [
    { id: 1, description: 'New order #12345 received from John Doe', time: '5 minutes ago' },
    { id: 2, description: 'Payment confirmed for order #12342', time: '1 hour ago' },
    { id: 3, description: 'User Sarah Johnson registered', time: '2 hours ago' },
    { id: 4, description: 'New product "Wireless Earbuds" added to inventory', time: '3 hours ago' },
    { id: 5, description: 'Return request submitted for order #12337', time: '5 hours ago' },
  ];

  // Alerts data
  const alerts = [
    { id: 1, description: 'Inventory low for "Smartphone Model X"', priority: 'high' },
    { id: 2, description: '3 orders pending shipment for more than 48 hours', priority: 'medium' },
    { id: 3, description: 'System maintenance scheduled for tomorrow at 2 AM UTC', priority: 'low' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1 text-gray-800">{stat.value}</p>
              </div>
              <div className={`p-2 rounded-full ${
                stat.title === 'Total Revenue' ? 'bg-emerald-100 text-emerald-600' : 
                stat.title === 'Active Users' ? 'bg-blue-100 text-blue-600' :
                stat.title === 'New Orders' ? 'bg-orange-100 text-orange-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {stat.icon}
              </div>
            </div>
            
            <div className="flex items-center mt-4">
              <span className={`inline-flex items-center text-sm ${
                stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? 
                  <ArrowUpRight size={16} className="mr-1" /> : 
                  <ArrowDownRight size={16} className="mr-1" />
                }
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Recent Activities</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3"></div>
                  <div>
                    <p className="text-sm text-gray-800">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-4 text-sm text-blue-600 hover:text-blue-800">
              View all activities
            </button>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Alerts</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {alerts.map((alert) => (
                <li 
                  key={alert.id} 
                  className={`flex p-3 rounded-lg ${
                    alert.priority === 'high' ? 'bg-red-50 border-l-4 border-red-500' :
                    alert.priority === 'medium' ? 'bg-orange-50 border-l-4 border-orange-500' :
                    'bg-blue-50 border-l-4 border-blue-500'
                  }`}
                >
                  <AlertTriangle 
                    size={18} 
                    className={`mr-3 flex-shrink-0 ${
                      alert.priority === 'high' ? 'text-red-500' :
                      alert.priority === 'medium' ? 'text-orange-500' :
                      'text-blue-500'
                    }`} 
                  />
                  <span className="text-sm text-gray-800">{alert.description}</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 text-sm text-blue-600 hover:text-blue-800">
              View all alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;