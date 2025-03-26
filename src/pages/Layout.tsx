import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center rounded-sm">
            <Navbar />
            <div className="w-full">{children}</div> 
            <Footer />
        </div>
    );
};

export default Layout;