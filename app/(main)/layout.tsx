type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return <div className="min-h-screen flex flex-col">
                    <main className="flex flex-1 flex-col justify-center items-center">
                        {children}
                    </main>
            </div>
}

export default MainLayout;