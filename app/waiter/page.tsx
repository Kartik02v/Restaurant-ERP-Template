'use client';

import { Search, Filter, Printer, Plus, User, Clock, LogIn, LogOut, X, Minus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTable } from './context/TableContext';

interface TableSummary {
  id: string;
  name: string;
  items: number;
  amount: number;
  status: 'Active' | 'Finalized';
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Finalized':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    default:
      return 'bg-green-100 text-green-800 border-green-200';
  }
};

const getStatusDot = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-500';
    case 'Finalized':
      return 'bg-gray-500';
    default:
      return 'bg-green-500';
  }
};

export default function WaiterDashboard() {
  const router = useRouter();
  const { tables, getTableSummary, createNewTable } = useTable();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<string | null>(null);
  const [showNewOrderForm, setShowNewOrderForm] = useState(false);
  const [newOrderData, setNewOrderData] = useState({
    tableNumber: '',
    customerName: '',
    partySize: 1
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Get dynamic table summaries from all tables
  const tableSummaries: TableSummary[] = Object.keys(tables).map(id => {
    const table = tables[id];
    const summary = getTableSummary(id);
    return {
      id,
      name: table?.name || `Table ${id}`,
      items: summary.items,
      amount: summary.amount,
      status: summary.status as 'Active' | 'Finalized'
    };
  });

  // Separate active and finalized tables
  const activeTables = tableSummaries.filter(table => table.status === 'Active');
  const finalizedTables = tableSummaries.filter(table => table.status === 'Finalized');

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    setCheckInTime(new Date().toLocaleTimeString());
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    setCheckInTime(null);
  };

  const handleCreateNewOrder = () => {
    if (!newOrderData.tableNumber || !newOrderData.customerName) return;
    
    const newTableId = createNewTable(
      newOrderData.tableNumber,
      newOrderData.customerName,
      newOrderData.partySize
    );
    
    console.log('Created new table with ID:', newTableId);
    
    // Reset form and close modal
    setNewOrderData({ tableNumber: '', customerName: '', partySize: 1 });
    setShowNewOrderForm(false);
    
    // Navigate to the new table using Next.js router
    router.push(`/waiter/table-order?tableId=${newTableId}`);
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    // Find table by number (extract number from search query)
    const searchNumber = searchQuery.trim();
    
    // Look for exact table number match
    const foundTable = tableSummaries.find(table => {
      const tableNumber = table.name.replace('Table ', '');
      return tableNumber === searchNumber;
    });
    
    if (foundTable) {
      // Navigate to the found table
      router.push(`/waiter/table-order?tableId=${foundTable.id}`);
      setSearchQuery(''); // Clear search after navigation
    } else {
      // Show alert if table not found
      alert(`Table ${searchNumber} not found. Available tables: ${tableSummaries.map(t => t.name.replace('Table ', '')).join(', ')}`);
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Active Tables</h1>
          
          {/* Check In/Out Status */}
          {isCheckedIn && checkInTime && (
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              <Clock className="w-4 h-4" />
              <span>Checked in at {checkInTime}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {/* Check In/Out Buttons */}
          {!isCheckedIn ? (
            <button 
              onClick={handleCheckIn}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Check In
            </button>
          ) : (
            <button 
              onClick={handleCheckOut}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Check Out
            </button>
          )}

          {/* Search */}
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearchKeyPress}
              placeholder="Enter table number..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </form>
          
          {/* Filter */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>

          {/* Profile */}
          <Link href="/waiter/profile">
            <button className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Active Tables Section */}
      {activeTables.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Tables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTables.map((table) => (
              <Link key={table.id} href={`/waiter/table-order?tableId=${table.id}`}>
                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 transition-all hover:shadow-md cursor-pointer">
                  {/* Table Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{table.name}</h3>
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Printer className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${getStatusDot(table.status)}`}></div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(table.status)}`}>
                      {table.status}
                    </span>
                  </div>

                  {/* Table Info */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Items: {table.items}</span>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">
                      ${table.amount.toFixed(2)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Finalized Tables Section */}
      {finalizedTables.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Finalized Tables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finalizedTables.map((table) => (
              <Link key={table.id} href={`/waiter/table-order?tableId=${table.id}`}>
                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 transition-all hover:shadow-md cursor-pointer opacity-75">
                  {/* Table Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{table.name}</h3>
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Printer className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${getStatusDot(table.status)}`}></div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(table.status)}`}>
                      {table.status}
                    </span>
                  </div>

                  {/* Table Info */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Items: {table.items}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-600">
                      ${table.amount.toFixed(2)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {activeTables.length === 0 && finalizedTables.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🍽️</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tables yet</h3>
          <p className="text-gray-600 mb-6">Click the + button to create your first order</p>
        </div>
      )}

      {/* Add Button */}
      <button 
        onClick={() => setShowNewOrderForm(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* New Order Form Modal */}
      {showNewOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">New Order</h2>
              <button 
                onClick={() => setShowNewOrderForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Table Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Table Number *
                </label>
                <input
                  type="text"
                  value={newOrderData.tableNumber}
                  onChange={(e) => setNewOrderData(prev => ({ ...prev, tableNumber: e.target.value }))}
                  placeholder="e.g., 12, A5, Patio 3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  value={newOrderData.customerName}
                  onChange={(e) => setNewOrderData(prev => ({ ...prev, customerName: e.target.value }))}
                  placeholder="Enter customer name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              {/* Party Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Party Size
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setNewOrderData(prev => ({ ...prev, partySize: Math.max(1, prev.partySize - 1) }))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{newOrderData.partySize}</span>
                  <button
                    onClick={() => setNewOrderData(prev => ({ ...prev, partySize: prev.partySize + 1 }))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowNewOrderForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateNewOrder}
                disabled={!newOrderData.tableNumber || !newOrderData.customerName}
                className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}