import Appointment from "@/components/Appointment/Appointment";
import Cabinet from "@/components/Cabinet/Cabinet";
import Doctor from "@/components/Doctor/Doctor";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Importance from "@/components/Importance/Importance";
import Info from "@/components/Info/Info";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhatsappLink from "@/components/WhatsappLink/WhatsappLink";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Appointment />
        <Services />
        <Importance />
        <Info />
        <Testimonials />
        <Doctor />
        <Cabinet />
        <WhatsappLink />
      </main>
      <Footer />
    </>
  );
}
