import Header from "@/components/header"

const layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <main className="flex min-h-screen flex-col text-gray-400">
      <Header />
      <div className="container py-10">
        {children}
      </div>
    </main>
  )
}

export default layout