import { useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import PlanCard from "@/react-app/components/PlanCard";
import { servicePlans, companyInfo } from "@/data/plans";

export default function PlansPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    window.scrollTo(0, 0);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003DA5] via-[#001F60] to-[#003DA5]" />
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Glowing Effects */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF6B35]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFB81C]/10 rounded-full blur-[80px]" />

        {/* Content */}
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
          {/* Partner Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-bold text-[#FFB81C]">BSNL AUTHORIZED</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            {companyInfo.partner}
          </p>
          <p className="text-md text-blue-100 mb-8">
            {companyInfo.description}
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#003DA5] via-[#001F60] to-[#003DA5] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Get Connected?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of satisfied customers enjoying high-speed fiber internet in {companyInfo.city} and nearby areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now: {companyInfo.phone}
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 border border-white/30">
              New Connection
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#003DA5] mb-8 text-center">
            📍 Service Available Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Jogipet",
              "Andole",
              "Annasagar",
              "Ramsanpally",
              "Kichanapally",
              "Dakoor",
              "Sangupet",
              "Almaipet",
              "Chotakur",
              "JNTU–Sulthanpur",
              "Gounglur",
              "Pulkal",
              "Vatpally–Gorekal",
              "Tekmal–Bodamatipally",
              "GadiPeddapur",
              "Chilipched–Chandoor",
              "Shilampally",
              "Somakkapet",
              "Faizabad",
              "Siripura",
              "BandaPothgal",
              "Ajjamari",
              "Rangampet",
              "Dumpalakunta",
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg border-2 border-[#003DA5]/20 hover:border-[#FF6B35] transition-colors text-center">
                <p className="font-bold text-[#003DA5]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
