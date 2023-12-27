import Header from "../components/base/Header.tsx";
import Footer from "../components/base/Footer.tsx";

export default  function BaseLayout({children} : any ) {
    return (
        <div className="font-[700] text-white text-4xl min-h-[100vh] flex flex-col">
            <Header />
            <div className="flex items-center justify-center ">
                {children}
            </div>
            <Footer />
        </div>
    )
}