import { TableProvider } from './context/TableContext';

export default function WaiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TableProvider>
      {children}
    </TableProvider>
  );
}