'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OrderItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: 'new' | 'printed';
  icon: string;
}

interface TableData {
  id: string;
  name: string;
  status: 'Active' | 'Finalized';
  orderItems: OrderItem[];
  customerName?: string;
  partySize?: number;
  createdAt?: string;
}

interface TableContextType {
  tables: { [key: string]: TableData };
  updateTableItems: (tableId: string, items: OrderItem[]) => void;
  addItemToTable: (tableId: string, item: OrderItem) => void;
  updateItemQuantity: (tableId: string, itemId: string, change: number) => void;
  printItems: (tableId: string, itemIds: string[]) => void;
  finalizeTable: (tableId: string) => void;
  createNewTable: (tableNumber: string, customerName: string, partySize: number) => string;
  getTableSummary: (tableId: string) => { items: number; amount: number; status: string };
}

const TableContext = createContext<TableContextType | undefined>(undefined);

// Initial table data
const initialTableData: { [key: string]: TableData } = {
  '3': {
    id: '3',
    name: 'Table 3',
    status: 'Active',
    orderItems: [
      {
        id: '1',
        name: 'Caesar Salad',
        description: 'Extra Croutons\n1x Full Portion',
        price: 14.50,
        quantity: 1,
        status: 'new',
        icon: '🥗'
      },
      {
        id: '2',
        name: 'Chicken Wings',
        description: 'Buffalo Style\n12 pieces',
        price: 16.00,
        quantity: 1,
        status: 'printed',
        icon: '🍗'
      }
    ]
  },
  '5': {
    id: '5',
    name: 'Table 5',
    status: 'Active',
    orderItems: [
      {
        id: '1',
        name: 'Spaghetti Carbonara',
        description: 'Extra Cheese\n1x Full Portion',
        price: 18.50,
        quantity: 1,
        status: 'new',
        icon: '🍝'
      },
      {
        id: '2',
        name: 'Garlic Bread',
        description: 'No special notes\n2x Appetizer Portion',
        price: 9.00,
        quantity: 2,
        status: 'new',
        icon: '🥖'
      },
      {
        id: '3',
        name: 'Bruschetta',
        description: '1x Appetizer Portion',
        price: 12.00,
        quantity: 1,
        status: 'printed',
        icon: '🍞'
      },
      {
        id: '4',
        name: 'Red Wine - Merlot',
        description: '2x Glass',
        price: 24.00,
        quantity: 2,
        status: 'printed',
        icon: '🍷'
      }
    ]
  },
  '11': {
    id: '11',
    name: 'Table 11',
    status: 'Finalized',
    orderItems: [
      {
        id: '1',
        name: 'Ribeye Steak',
        description: 'Medium Rare\n1x Full Portion',
        price: 32.00,
        quantity: 1,
        status: 'printed',
        icon: '🥩'
      },
      {
        id: '2',
        name: 'Lobster Tail',
        description: 'Butter Sauce\n1x Full Portion',
        price: 28.00,
        quantity: 1,
        status: 'printed',
        icon: '🦞'
      },
      {
        id: '3',
        name: 'Champagne',
        description: '1x Bottle',
        price: 45.00,
        quantity: 1,
        status: 'printed',
        icon: '🍾'
      }
    ]
  },
  '8': {
    id: '8',
    name: 'Table 8',
    status: 'Active',
    orderItems: [
      {
        id: '1',
        name: 'Fish Tacos',
        description: 'Spicy Mayo\n3 pieces',
        price: 15.75,
        quantity: 1,
        status: 'new',
        icon: '🌮'
      }
    ]
  },
  '4': {
    id: '4',
    name: 'Table 4',
    status: 'Active',
    orderItems: [
      {
        id: '1',
        name: 'Margherita Pizza',
        description: 'Extra Basil\n1x Large',
        price: 22.50,
        quantity: 1,
        status: 'printed',
        icon: '🍕'
      },
      {
        id: '2',
        name: 'Beer - IPA',
        description: '2x Pint',
        price: 12.00,
        quantity: 2,
        status: 'new',
        icon: '🍺'
      }
    ]
  }
};

export function TableProvider({ children }: { children: ReactNode }) {
  const [tables, setTables] = useState<{ [key: string]: TableData }>(initialTableData);

  const updateTableItems = (tableId: string, items: OrderItem[]) => {
    setTables(prev => ({
      ...prev,
      [tableId]: {
        ...prev[tableId],
        orderItems: items,
        status: 'Active'
      }
    }));
  };

  const addItemToTable = (tableId: string, item: OrderItem) => {
    setTables(prev => {
      const table = prev[tableId];
      if (!table) {
        console.error(`Table ${tableId} not found`);
        return prev;
      }

      const existingItem = table.orderItems.find(i => i.name === item.name);
      let newItems;

      if (existingItem) {
        // If item exists, increase quantity
        newItems = table.orderItems.map(i =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        // Add new item
        newItems = [...table.orderItems, { ...item, id: Date.now().toString() }];
      }

      const updatedTable = {
        ...table,
        orderItems: newItems,
        status: 'Active' as const
      };

      return {
        ...prev,
        [tableId]: updatedTable
      };
    });
  };

  const updateItemQuantity = (tableId: string, itemId: string, change: number) => {
    setTables(prev => {
      const table = prev[tableId];
      if (!table) {
        console.error(`Table ${tableId} not found`);
        return prev;
      }

      const newItems = table.orderItems
        .map(item =>
          item.id === itemId
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter(item => item.quantity > 0);

      return {
        ...prev,
        [tableId]: {
          ...table,
          orderItems: newItems,
          status: 'Active' as const
        }
      };
    });
  };

  const printItems = (tableId: string, itemIds: string[]) => {
    setTables(prev => {
      const table = prev[tableId];
      if (!table) return prev;

      const newItems = table.orderItems.map(item =>
        itemIds.includes(item.id) ? { ...item, status: 'printed' as const } : item
      );

      return {
        ...prev,
        [tableId]: {
          ...table,
          orderItems: newItems,
          status: 'Active'
        }
      };
    });
  };

  const finalizeTable = (tableId: string) => {
    setTables(prev => ({
      ...prev,
      [tableId]: {
        ...prev[tableId],
        status: 'Finalized'
      }
    }));
  };

  const createNewTable = (tableNumber: string, customerName: string, partySize: number) => {
    const tableId = `table-${Date.now()}`;
    const tableName = `Table ${tableNumber}`;
    
    setTables(prev => ({
      ...prev,
      [tableId]: {
        id: tableId,
        name: tableName,
        status: 'Active',
        orderItems: [],
        customerName,
        partySize,
        createdAt: new Date().toISOString()
      }
    }));
    
    return tableId;
  };

  const getTableSummary = (tableId: string) => {
    const table = tables[tableId];
    if (!table) return { items: 0, amount: 0, status: 'Active' };

    const totalItems = table.orderItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = table.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return {
      items: totalItems,
      amount: totalAmount,
      status: table.status
    };
  };

  return (
    <TableContext.Provider value={{
      tables,
      updateTableItems,
      addItemToTable,
      updateItemQuantity,
      printItems,
      finalizeTable,
      createNewTable,
      getTableSummary
    }}>
      {children}
    </TableContext.Provider>
  );
}

export function useTable() {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error('useTable must be used within a TableProvider');
  }
  return context;
}