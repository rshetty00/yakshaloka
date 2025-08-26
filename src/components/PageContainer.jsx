export default function PageContainer({ children }) {
  return (
    <main className="container mx-auto px-4 py-10">
      {children}
    </main>
  );
}
