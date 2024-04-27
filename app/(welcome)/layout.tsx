import Footer from "./footer";
import Header from "./header"

type Props = {
    children: React.ReactNode;
}

const WelcomeLayout = ({ children }: Props) => {
    return <div className="min-h-screen flex flex-col">
                <Header />
                    <main className="flex flex-1 flex-col justify-center items-center">
                        {children}
                    </main>
                <Footer />
            </div>
}

export default WelcomeLayout;