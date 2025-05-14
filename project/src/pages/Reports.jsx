import React, { useState } from 'react';
import { 
  Download, 
  Calendar, 
  BarChart, 
  PieChart, 
  LineChart,
  TrendingUp,
  TrendingDown,
  DollarSign
} from 'lucide-react';

const Reports = () => {
  const [dateRange, setDateRange] = useState('month');

  // Sample KPI data
  const kpiData = [
    {
      id: 1,
      title: 'Revenue',
      value: '$24,532',
      change: '+12.5%',
      trend: 'up',
      icon: <DollarSign size={20} />
    },
    {
      id: 2,
      title: 'Orders',
      value: '1,245',
      change: '+8.3%',
      trend: 'up',
      icon: <BarChart size={20} />
    },
    {
      id: 3,
      title: 'Conversion Rate',
      value: '3.27%',
      change: '-0.5%',
      trend: 'down',
      icon: <PieChart size={20} />
    },
    {
      id: 4,
      title: 'Average Order Value',
      value: '$127.50',
      change: '+4.2%',
      trend: 'up',
      icon: <LineChart size={20} />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Reports</h2>
          <p className="mt-1 text-sm text-gray-500">
            Analytics and performance metrics
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <div>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="today">Today</option>
              <option value="week">Last 7 days</option>
              <option value="month">Last 30 days</option>
              <option value="quarter">Last 90 days</option>
              <option value="year">Last 12 months</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpiData.map((kpi) => (
          <div 
            key={kpi.id} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                <p className="text-2xl font-semibold mt-1 text-gray-800">{kpi.value}</p>
              </div>
              <div className={`p-2 rounded-full ${
                kpi.title === 'Revenue' ? 'bg-blue-100 text-blue-600' : 
                kpi.title === 'Orders' ? 'bg-emerald-100 text-emerald-600' :
                kpi.title === 'Conversion Rate' ? 'bg-amber-100 text-amber-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {kpi.icon}
              </div>
            </div>
            
            <div className="flex items-center mt-4">
              <span className={`inline-flex items-center text-sm ${
                kpi.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {kpi.trend === 'up' ? 
                  <TrendingUp size={16} className="mr-1" /> : 
                  <TrendingDown size={16} className="mr-1" />
                }
                {kpi.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs previous period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Over Time */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-medium text-gray-900">Revenue Over Time</h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                <span className="text-xs text-gray-600">This Period</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-200 rounded-full mr-1"></div>
                <span className="text-xs text-gray-600">Previous Period</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-center p-4">
              <LineChart size={48} className="mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Revenue chart visualization would appear here</p>
              <p className="text-xs text-gray-400 mt-1">Line chart showing daily revenue trends</p>
            </div>
          </div>
        </div>

        {/* Orders by Category */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-medium text-gray-900">Orders by Category</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">View Details</button>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-center p-4">
              <PieChart size={48} className="mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Category distribution chart would appear here</p>
              <p className="text-xs text-gray-400 mt-1">Pie chart showing order distribution across product categories</p>
            </div>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-medium text-gray-900">Top Selling Products</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-10 text-center">
                  <span className="font-medium text-gray-800">{i}</span>
                </div>
                <div className="ml-2 flex-1">
                  <div className="text-sm font-medium text-gray-800">Product {i}</div>
                  <div className="text-xs text-gray-500">SKU-{1000 + i} • Category {i % 3 + 1}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">${(100 - i * 10).toFixed(2)}</div>
                  <div className="text-xs text-gray-500">{140 - (i * 10)} units</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales by Location */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-medium text-gray-900">Sales by Location</h3>
            <div>
              <select className="text-sm border-gray-300 rounded-md">
                <option>Top 5 Countries</option>
                <option>Top 10 Countries</option>
                <option>All Countries</option>
              </select>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-center p-4">
              <BarChart size={48} className="mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Geographic sales chart would appear here</p>
              <p className="text-xs text-gray-400 mt-1">Bar chart showing sales distribution by country</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">Recent Reports</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {i === 1 ? 'Monthly Sales Report' : 
                     i === 2 ? 'Inventory Status Report' : 
                     i === 3 ? 'Customer Acquisition Report' : 
                     'Profit Margins Analysis'}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Generated {i === 1 ? '2 days ago' : 
                              i === 2 ? '1 week ago' : 
                              i === 3 ? '2 weeks ago' : 
                              '1 month ago'}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                    {i === 1 ? 'PDF' : 
                     i === 2 ? 'XLSX' : 
                     i === 3 ? 'CSV' : 
                     'PDF'}
                  </span>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <Download size={16} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All Reports
          </button>
        </div>
      </div>

      {/* Schedule Reports */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
            <Calendar size={24} />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Schedule Reports</h3>
            <p className="text-sm text-gray-500 mt-1">
              Set up automated reports to be sent to your email on a regular basis.
            </p>
          </div>
          <div className="ml-auto">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
              Schedule New Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;