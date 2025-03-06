
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return 
    <div className="h-screen flex">
      {/* left */}
      <div className="w-1/6 bg-red-200">L</div>

       {/* right */}
       <div className="w-5/6" bg-blue-200>R</div>
    </div>;
}
