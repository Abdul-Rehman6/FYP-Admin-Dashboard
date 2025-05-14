import React, { useState } from 'react';
import { 
  Search, 
  PlusCircle, 
  Eye, 
  Edit, 
  Trash2,
  ChevronLeft,
  ChevronRight,
  Image,
  MoreVertical
} from 'lucide-react';

const Brands = () => {
  const [view, setView] = useState('grid');

  // Sample brand data
  const brands = [
    {
      id: 1,
      name: 'Acme Co.',
      logo: 'https://images.pexels.com/photos/5589355/pexels-photo-5589355.jpeg?auto=compress&cs=tinysrgb&w=1600',
      products: 42,
      status: 'Active',
      website: 'acme.com'
    },
    {
      id: 2,
      name: 'TechGear',
      logo: 'https://images.pexels.com/photos/3759110/pexels-photo-3759110.jpeg?auto=compress&cs=tinysrgb&w=1600',
      products: 28,
      status: 'Active',
      website: 'techgear.com'
    },
    {
      id: 3,
      name: 'EcoFriendly',
      logo: 'https://images.pexels.com/photos/5412432/pexels-photo-5412432.jpeg?auto=compress&cs=tinysrgb&w=1600',
      products: 15,
      status: 'Inactive',
      website: 'ecofriendly.com'
    },
    {
      id: 4,
      name: 'LuxBrands',
      logo: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      products: 31,
      status: 'Active',
      website: 'luxbrands.com'
    },
    {
      id: 5,
      name: 'SportMax',
      logo: 'https://images.pexels.com/photos/5383366/pexels-photo-5383366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      products: 24,
      status: 'Active',
      website: 'sportmax.com'
    },
    {
      id: 6,
      name: 'HomeStyle',
      logo: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1600',
      products: 19,
      status: 'Active',
      website: 'homestyle.com'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Brands</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage product brands and their attributes
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <PlusCircle size={16} className="mr-2" />
            Add Brand
          </button>
        </div>
      </div>

      {/* Filters, search, and view toggles */}
      <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          {/* Search */}
          <div className="relative w-full sm:w-auto sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search brands..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* View toggles */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">View:</span>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setView('grid')}
                className={`px-4 py-2 text-sm font-medium rounded-l-md border ${
                  view === 'grid'
                    ? 'bg-blue-50 text-blue-600 border-blue-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setView('list')}
                className={`px-4 py-2 text-sm font-medium rounded-r-md border border-l-0 ${
                  view === 'list'
                    ? 'bg-blue-50 text-blue-600 border-blue-500' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brand content */}
      {view === 'grid' ? (
        // Grid view
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div key={brand.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-100 relative">
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Image size={48} className="text-gray-400" />
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <div className="dropdown relative">
                    <button className="p-1 rounded-full bg-white text-gray-600 hover:bg-gray-100">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{brand.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{brand.website}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">{brand.products} Products</span>
                  <span className={`px-2 py-1 text-xs rounded-full border ${
                    brand.status === 'Active' 
                      ? 'bg-green-100 text-green-800 border-green-200' 
                      : 'bg-gray-100 text-gray-800 border-gray-200'
                  }`}>
                    {brand.status}
                  </span>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Edit
                  </button>
                  <button className="flex-1 px-3 py-1.5 text-sm bg-blue-600 border border-transparent rounded-md text-white hover:bg-blue-700">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List view
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Brand
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Website
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Products
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
                {brands.map((brand) => (
                  <tr key={brand.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                          {brand.logo ? (
                            <img src={brand.logo} alt={`${brand.name} logo`} className="h-10 w-10 object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Image size={16} className="text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{brand.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {brand.website}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {brand.products}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full border ${
                        brand.status === 'Active' 
                          ? 'bg-green-100 text-green-800 border-green-200' 
                          : 'bg-gray-100 text-gray-800 border-gray-200'
                      }`}>
                        {brand.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="text-gray-500 hover:text-blue-600">
                          <Eye size={18} />
                        </button>
                        <button className="text-gray-500 hover:text-blue-600">
                          <Edit size={18} />
                        </button>
                        <button className="text-gray-500 hover:text-red-600">
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                  <span className="font-medium">8</span> results
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
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
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
      )}
    </div>
  );
};

export default Brands;