'use client';

import { ArrowLeft, Plus, Minus, Clock, X, CheckCircle, Home, FileText } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTable } from '../context/TableContext';

interface OrderItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: 'new' | 'printed';
  icon: string;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  category: string;
}

// Available menu items
const menuItems: MenuItem[] = [
  { id: 'm1', name: 'Spaghetti Carbonara', description: 'Creamy pasta with bacon', price: 18.50, icon: '🍝', category: 'Main' },
  { id: 'm2', name: 'Caesar Salad', description: 'Fresh romaine with croutons', price: 14.50, icon: '🥗', category: 'Appetizer' },
  { id: 'm3', name: 'Garlic Bread', description: 'Toasted bread with garlic butter', price: 9.00, icon: '🥖', category: 'Appetizer' },
  { id: 'm4', name: 'Ribeye Steak', description: 'Premium cut, cooked to order', price: 32.00, icon: '🥩', category: 'Main' },
  { id: 'm5', name: 'Fish Tacos', description: 'Fresh fish with spicy mayo', price: 15.75, icon: '🌮', category: 'Main' },
  { id: 'm6', name: 'Margherita Pizza', description: 'Classic tomato and mozzarella', price: 22.50, icon: '🍕', category: 'Main' },
  { id: 'm7', name: 'Red Wine - Merlot', description: 'Full-bodied red wine', price: 12.00, icon: '🍷', category: 'Beverage' },
  { id: 'm8', name: 'Beer - IPA', description: 'Hoppy craft beer', price: 8.00, icon: '🍺', category: 'Beverage' },
  { id: 'm9', name: 'Chicken Wings', description: 'Buffalo or BBQ style', price: 16.00, icon: '🍗', category: 'Appetizer' },
  { id: 'm10', name: 'Bruschetta', description: 'Toasted bread with tomatoes', price: 12.00, icon: '🍞', category: 'Appetizer' }
];

export default function TableOrderPage() {
  const searchParams = useSearchParams();
  const tableId = searchParams.get('tableId') || '5';
  
  const { tables, updateItemQuantity, addItemToTable, printItems, finalizeTable } = useTable();
  const [showAddItems, setShowAddItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [selectedPortion, setSelectedPortion] = useState('Full');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  
  const currentTable = tables[tableId];
  const orderItems = currentTable?.orderItems || [];

  // Debug logging
  console.log('Table ID:', tableId);
  console.log('Current Table:', currentTable);
  console.log('All Tables:', Object.keys(tables));

  // Filter menu items based on search
  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectItem = (menuItem: MenuItem) => {
    setSelectedItem(menuItem);
    setItemQuantity(1);
    setSelectedPortion('Full');
    setSelectedAddOns([]);
    setSpecialInstructions('');
  };

  const handleAddToOrder = () => {
    if (!selectedItem) return;

    let finalPrice = selectedItem.price;
    if (selectedPortion === 'Half') {
      finalPrice = finalPrice * 0.7; // 30% discount for half portion
    }
    
    // Add-on prices
    const addOnPrices: { [key: string]: number } = {
      'Extra cheese': 2.00,
      'Garlic bread': 4.50,
      'Extra sauce': 1.50,
      'Side salad': 3.00
    };
    
    selectedAddOns.forEach(addOn => {
      finalPrice += addOnPrices[addOn] || 0;
    });

    let description = selectedItem.description;
    if (selectedPortion === 'Half') {
      description += '\nHalf Portion';
    }
    if (selectedAddOns.length > 0) {
      description += '\nAdd-ons: ' + selectedAddOns.join(', ');
    }
    if (specialInstructions) {
      description += '\nSpecial: ' + specialInstructions;
    }

    const newItem: OrderItem = {
      id: Date.now().toString(),
      name: selectedItem.name,
      description: description,
      price: finalPrice,
      quantity: itemQuantity,
      status: 'new',
      icon: selectedItem.icon
    };
    
    addItemToTable(tableId, newItem);
    setSelectedItem(null);
  };

  const handleCloseModal = () => {
    setShowAddItems(false);
    setSelectedItem(null);
    setSearchQuery('');
  };

  const toggleAddOn = (addOn: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOn) 
        ? prev.filter(item => item !== addOn)
        : [...prev, addOn]
    );
  };

  const handleQuickAdd = (menuItem: MenuItem, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering the select item click
    
    const newItem: OrderItem = {
      id: Date.now().toString(),
      name: menuItem.name,
      description: menuItem.description,
      price: menuItem.price,
      quantity: 1,
      status: 'new',
      icon: menuItem.icon
    };
    
    addItemToTable(tableId, newItem);
  };

  const handlePrintItems = () => {
    const newItemIds = orderItems.filter(item => item.status === 'new').map(item => item.id);
    if (newItemIds.length > 0) {
      printItems(tableId, newItemIds);
    }
  };

  const handleFinalizeTable = () => {
    finalizeTable(tableId);
  };

  const newItems = orderItems.filter(item => item.status === 'new');
  const printedItems = orderItems.filter(item => item.status === 'printed');

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (!currentTable) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Table Not Found</h1>
          <Link href="/waiter" className="text-blue-600 hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'Active':
        return { text: 'Ongoing Order', color: 'text-green-600' };
      case 'Finalized':
        return { text: 'Order Complete', color: 'text-gray-600' };
      default:
        return { text: 'Ongoing Order', color: 'text-green-600' };
    }
  };

  const statusInfo = getStatusText(currentTable.status);

  // Show finalization success screen if table is finalized
  if (currentTable.status === 'Finalized') {
    const orderId = `2024-${new Date().getMonth() + 1}-${new Date().getDate()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Restaurant Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-200 rounded-lg">
              <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-lg">
              <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            </button>
            <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
          </div>
        </div>

        {/* Success Content */}
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {currentTable.name} Order Finalized
          </h1>
          <p className="text-gray-600 mb-8">
            Full bill sent to manager for billing
          </p>

          {/* Order Summary Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8 text-left">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Finalized
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">{orderId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Table:</span>
                <span className="font-medium">{currentTable.name.replace('Table ', '')}</span>
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              {orderItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              
              <div className="border-t pt-3 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mb-8">
            <Link href="/waiter">
              <button className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                <Home className="w-5 h-5" />
                Go to Dashboard
              </button>
            </Link>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <FileText className="w-5 h-5" />
              View Order Details
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-500">
            This table is now locked for editing. Please see the manager for any changes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/waiter">
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{currentTable.name}</h1>
            <p className={`font-medium ${statusInfo.color}`}>{statusInfo.text}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowAddItems(true)}
            className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
          >
            Add Items
          </button>
          <button 
            onClick={handlePrintItems}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            disabled={newItems.length === 0}
          >
            Print Items ({newItems.length})
          </button>
          <button 
            onClick={handleFinalizeTable}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Finalize Table
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* New Items Section */}
        {newItems.length > 0 && (
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              New Items (Not Sent to Kitchen)
            </h2>
            <div className="space-y-4">
              {newItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">${item.price.toFixed(2)}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateItemQuantity(tableId, item.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateItemQuantity(tableId, item.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Printed Items Section */}
        {printedItems.length > 0 && (
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Printed to Kitchen
            </h2>
            <div className="space-y-4">
              {printedItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{item.description}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Clock className="w-3 h-3" />
                        <span>Sent at 7:32 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${item.price.toFixed(2)}</div>
                    <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Order Summary */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center pt-4">
          <button 
            onClick={handlePrintItems}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            disabled={newItems.length === 0}
          >
            Print Items ({newItems.length})
          </button>
          <button 
            onClick={handleFinalizeTable}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Finalize Table
          </button>
        </div>
      </div>

      {/* Add Items Modal */}
      {showAddItems && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex">
            
            {/* Left Side - Menu Items */}
            <div className="w-1/2 border-r border-gray-200">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-xl font-bold text-gray-800">Add Items</h2>
                </div>
                <button 
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="p-4 border-b">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="pasta"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Menu Items List */}
              <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
                {filteredMenuItems.map((item) => (
                  <div 
                    key={item.id} 
                    className={`relative p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                      selectedItem?.id === item.id ? 'bg-orange-50 border-orange-200' : ''
                    }`}
                  >
                    {/* Quick Add Button */}
                    {/* <button
                      onClick={(e) => handleQuickAdd(item, e)}
                      className="absolute top-2 right-2 px-3 py-1 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700 transition-colors z-10"
                    >
                      Add
                    </button> */}
                    
                    <div 
                      onClick={() => handleSelectItem(item)}
                      className="flex items-center justify-between pr-16"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          item.category === 'Main' ? 'bg-green-500' : 
                          item.category === 'Appetizer' ? 'bg-orange-500' : 'bg-blue-500'
                        }`}></div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-orange-600">${item.price.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Item Customization */}
            <div className="w-1/2 flex flex-col">
              {selectedItem ? (
                <>
                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="p-6">
                      {/* Item Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-3 h-3 rounded-full ${
                            selectedItem.category === 'Main' ? 'bg-green-500' : 
                            selectedItem.category === 'Appetizer' ? 'bg-orange-500' : 'bg-blue-500'
                          }`}></div>
                          <h3 className="text-xl font-bold text-gray-900">{selectedItem.name}</h3>
                        </div>
                        <div className="text-2xl font-bold text-orange-600">${selectedItem.price.toFixed(2)}</div>
                      </div>

                      {/* Quantity */}
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-3">Quantity</h4>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setItemQuantity(Math.max(1, itemQuantity - 1))}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-xl font-semibold w-8 text-center">{itemQuantity}</span>
                          <button
                            onClick={() => setItemQuantity(itemQuantity + 1)}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Portion */}
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-3">Portion</h4>
                        <div className="flex gap-3">
                          <button
                            onClick={() => setSelectedPortion('Full')}
                            className={`px-4 py-2 rounded-full border ${
                              selectedPortion === 'Full' 
                                ? 'bg-orange-100 border-orange-300 text-orange-700' 
                                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            Full
                          </button>
                          <button
                            onClick={() => setSelectedPortion('Half')}
                            className={`px-4 py-2 rounded-full border ${
                              selectedPortion === 'Half' 
                                ? 'bg-orange-100 border-orange-300 text-orange-700' 
                                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            Half
                          </button>
                        </div>
                      </div>

                      {/* Add-ons */}
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-3">Add-ons</h4>
                        <div className="space-y-3">
                          {['Extra cheese', 'Garlic bread', 'Extra sauce', 'Side salad'].map((addOn) => (
                            <label key={addOn} className="flex items-center justify-between cursor-pointer">
                              <div className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  checked={selectedAddOns.includes(addOn)}
                                  onChange={() => toggleAddOn(addOn)}
                                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                />
                                <span className="text-gray-700">{addOn}</span>
                              </div>
                              <span className="text-gray-600">
                                +${addOn === 'Extra cheese' ? '2.00' : addOn === 'Garlic bread' ? '4.50' : addOn === 'Extra sauce' ? '1.50' : '3.00'}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Special Instructions */}
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-3">Special Instructions</h4>
                        <textarea
                          value={specialInstructions}
                          onChange={(e) => setSpecialInstructions(e.target.value)}
                          placeholder="e.g., no onions, extra spicy..."
                          className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fixed Action Buttons */}
                  <div className="border-t border-gray-200 p-6 bg-white">
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleAddToOrder}
                        className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg shadow-md"
                      >
                        Add to Order
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-6 h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-4">🍽️</div>
                    <p>Select an item from the menu to customize</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}