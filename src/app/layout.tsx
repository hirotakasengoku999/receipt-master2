const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body>
        <div className="flex h-screen">
          <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
        </div>  
      </body>
    </html>
    
  )
}

export default MainLayout