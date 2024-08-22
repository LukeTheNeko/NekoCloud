import ContactUs from "@/components/ContatUs/ContatUs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Page() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-slate-100">
                <Header />
                <div className="flex-grow">
                    <ContactUs />
                </div>
                <Footer />
            </div>
        </>
    );
}