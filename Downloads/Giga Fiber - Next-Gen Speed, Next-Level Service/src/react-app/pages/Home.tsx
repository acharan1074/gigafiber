import { useEffect } from "react";
import { Link } from "react-router";
import { Zap, Shield, ArrowRight, Phone, Tv, Users, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import PlanCard from "@/react-app/components/PlanCard";
import { servicePlans, companyInfo } from "@/data/plans";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast Speed",
    description: "Speeds from 40 Mbps to 1 Gbps for seamless streaming, gaming, and working.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Phone,
    title: "Free Unlimited Calling",
    description: "Unlimited landline calls included with every plan. Stay connected with family.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Tv,
    title: "iPTV Included",
    description: "Watch your favorite channels with iPTV service included in select plans.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "99.9% Uptime",
    description: "Reliable and stable connection guaranteed. Uninterrupted internet for your needs.",
    color: "from-blue-500 to-cyan-500",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: MapPin, value: "Jogipet", label: "& Nearby Areas" },
  { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
];

export default function HomePage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
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
        
        {/* Glowing Effects - Logo Colors */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF6B35]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFB81C]/10 rounded-full blur-[80px]" />

        {/* Fiber Lines Animation */}
        <div className="absolute top-20 right-10 w-32 h-32 opacity-30">
          <div className="absolute w-1 h-full bg-gradient-to-b from-[#FF6B35] via-[#FFB81C] to-transparent rounded-full animate-pulse" />
          <div className="absolute left-4 w-1 h-full bg-gradient-to-b from-[#FFB81C] via-[#FF6B35] to-transparent rounded-full animate-pulse delay-100" />
          <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-white via-[#FFB81C] to-transparent rounded-full animate-pulse delay-200" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* Partner Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8 border border-[#FFB81C]/30 hover:border-[#FF6B35] transition-all">
              <CheckCircle className="w-5 h-5 text-[#FFB81C]" />
              <span>{companyInfo.partner}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-white tracking-tighter">
              High-Speed
              <span className="block bg-gradient-to-r from-[#FF6B35] via-[#FFB81C] to-[#FF6B35] bg-clip-text text-transparent drop-shadow-lg">
                Fiber Internet
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Experience blazing fast fiber-to-home internet with unlimited calling and iPTV. Perfect for online classes, gaming & streaming.
            </p>

            {/* Price Highlight */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-[#FF6B35] to-[#FFB81C] px-10 py-6 rounded-3xl mb-12 shadow-2xl shadow-orange-500/50 hover:shadow-2xl hover:shadow-orange-600/60 transition-all duration-300">
              <div className="text-left">
                <p className="text-sm text-orange-100 font-semibold">Plans starting at</p>
                <p className="text-5xl font-black text-white">₹399<span className="text-xl font-bold">/mo</span></p>
              </div>
              <div className="w-px h-16 bg-white/30 hidden sm:block" />
              <div className="text-left">
                <p className="text-sm text-orange-100 font-semibold">Lightning Speed up to</p>
                <p className="text-5xl font-black text-white">1<span className="text-xl font-bold">Gbps</span></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/new-connection">
                <Button size="lg" className="bg-white text-[#003DA5] hover:bg-blue-50 text-lg px-10 font-bold shadow-2xl shadow-white/30 h-16 rounded-2xl transition-all duration-300 hover:scale-105 border-0">
                  Book New Connection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href={`tel:${companyInfo.phone}`}>
                <Button size="lg" className="border-3 border-[#FFB81C] text-[#FFB81C] hover:bg-[#FFB81C] hover:text-[#003DA5] text-lg px-10 font-bold h-16 rounded-2xl transition-all duration-300 hover:scale-105 bg-transparent">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {companyInfo.phone}
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="group flex flex-col items-center gap-4 hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFB81C]/30 to-[#FF6B35]/30 flex items-center justify-center backdrop-blur-sm border border-[#FFB81C]/50 group-hover:border-[#FF6B35] transition-all">
                    <stat.icon className="w-8 h-8 text-[#FFB81C] group-hover:text-[#FF6B35]" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-blue-200 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#FF6B35]/10 text-[#FF6B35] px-6 py-2 rounded-full text-sm font-bold mb-4 border border-[#FF6B35]/30">
              Why Choose Giga Fiber
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#003DA5] mb-6">
              Everything You Need
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium">
              Get the complete internet experience with premium features included in every plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#FF6B35] hover:shadow-2xl hover:shadow-[#FF6B35]/15 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-125 transition-transform shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003DA5] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 bg-gradient-to-b from-blue-50 to-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#003DA5]/10 text-[#003DA5] px-6 py-2 rounded-full text-sm font-bold mb-4 border border-[#003DA5]/30">
              Our Plans
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#003DA5] mb-6">
              Choose Your Speed
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium">
              Affordable plans with massive data limits. Unlimited calling and premium services included!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {servicePlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-12 font-medium">
            *GST Extra | Installation charges may apply | Speeds up to mentioned limits
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#003DA5] via-[#001F60] to-[#003DA5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF6B35]/15 rounded-full blur-[100px] -translate-y-1/2" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Get Connected?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
            Book your new fiber connection today and enjoy lightning-fast internet speeds!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/new-connection">
              <Button size="lg" className="bg-gradient-to-r from-[#FF6B35] to-[#FFB81C] hover:from-[#E55A25] hover:to-[#F0A90F] text-white text-lg px-12 font-bold shadow-2xl shadow-orange-500/40 h-16 rounded-2xl transition-all duration-300 hover:scale-105 border-0">
                Book New Connection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href={`https://wa.me/91${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-12 font-bold h-16 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-0">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
