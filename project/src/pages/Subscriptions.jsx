import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  User, 
  Calendar, 
  CreditCard, 
  Trash2, 
  Clock,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Check
} from 'lucide-react';

const Subscriptions = () => {
  const [statusFilter, setStatusFilter] = useState('all');

  // Sample subscription data
  const subscriptions = [
    {
      id: 'SUB-1234',
      customer: 'John Doe',
      email: 'john.doe@example.com',
      plan: 'Enterprise',
      status: 'active',
      amount: '$99.99',
      billingCycle: 'Monthly',
      nextBilling: '2025-06-15',
      startDate: '2025-01-15'
    },
    {
      id: 'SUB-1235',
      customer: 'Jane Smith',
      email: 'jane.smith@example.com',
      plan: 'Professional',
      status: 'active',
      amount: '$49.99',
      billingCycle: 'Monthly',
      nextBilling: '2025-06-07',
      startDate: '2024-12-07'
    },
    {
      id: 'SUB-1236',
      customer: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      plan: 'Basic',
      status: 'cancelled',
      amount: '$19.99',
      billingCycle: 'Monthly',
      nextBilling: 'N/A',
      startDate: '2024-11-20'
    },
    {
      id: 'SUB-1237',
      customer: 'Emily Davis',
      email: 'emily.davis@example.com',
      plan: 'Professional',
      status: 'past_due',
      amount: '$49.99',
      billingCycle: 'Monthly',
      nextBilling: '2025-05-18',
      startDate: '2024-12-18'
    },
    {
      id: 'SUB-1238',
      customer: 'Michael Wilson',
      email: 'michael.wilson@example.com',
      plan: 'Enterprise',
      status: 'active',
      amount: '$99.99',
      billingCycle: 'Annual',
      nextBilling: '2026-01-05',
      startDate: '2025-01-05'
    }
  ];

  // Filter subscriptions based on status
  const filteredSubscriptions = statusFilter === 'all' 
    ? subscriptions 
    : subscriptions.filter(sub => sub.status === statusFilter);

  // Get status badge classes
  const getStatusBadgeClasses = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'past_due':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Subscriptions</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage customer subscriptions and billing
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus size={16} className="mr-2" />
            Add Subscription
          </button>
        </div>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
              <User size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Subscriptions</p>
              <p className="text-2xl font-semibold text-gray-800">
                {subscriptions.filter(s => s.status === 'active').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-4">
              <CreditCard size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Monthly Recurring Revenue</p>
              <p className="text-2xl font-semibold text-gray-800">$299.97</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-red-100 text-red-600 mr-4">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Past Due</p>
              <p className="text-2xl font-semibold text-gray-800">
                {subscriptions.filter(s => s.status === 'past_due').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and search */}
      <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="all">All Subscriptions</option>
                <option value="active">Active</option>
                <option value="past_due">Past Due</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-auto sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search subscriptions..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Subscriptions table */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subscription ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Billing Cycle
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Billing
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubscriptions.map((subscription) => (
                <tr key={subscription.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {subscription.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{subscription.customer}</div>
                    <div className="text-sm text-gray-500">{subscription.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subscription.plan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {subscription.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subscription.billingCycle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subscription.nextBilling}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusBadgeClasses(subscription.status)}`}>
                      {subscription.status === 'active' ? 'Active' : 
                       subscription.status === 'cancelled' ? 'Cancelled' : 
                       'Past Due'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1 text-gray-500 hover:text-blue-600">
                        <Check size={18} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-blue-600">
                        <Clock size={18} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                <span className="font-medium">5</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <ChevronLeft size={16} />
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <ChevronRight size={16} />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Renewals */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">Upcoming Renewals</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {subscriptions
            .filter(s => s.status === 'active')
            .slice(0, 3)
            .map((subscription) => (
              <div key={subscription.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {subscription.customer}
                      </p>
                      <p className="text-sm text-gray-500">
                        {subscription.plan} Plan • {subscription.amount}/{subscription.billingCycle.toLowerCase()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-4">
                      Renews on {subscription.nextBilling}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {subscriptions.filter(s => s.status === 'active').length > 3 && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All Renewals
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscriptions;