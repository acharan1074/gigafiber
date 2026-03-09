import { Link } from "react-router";
import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { companyInfo } from "@/data/plans";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#003DA5] via-[#001F60] to-[#003DA5] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="text-xl font-black text-white">
                {companyInfo.name}
              </span>
              <p className="text-xs text-blue-300">{companyInfo.tagline}</p>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              {companyInfo.partner}. Delivering high-speed fiber internet to homes and businesses.
            </p>
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB81C]/20 rounded-lg p-3 border border-[#FF6B35]/40">
              <Zap className="w-5 h-5 text-[#FFB81C]" />
              <span className="text-sm font-medium">Lightning speed up to 1 Gbps</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[#FF6B35]">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li>
                <Link to="/" className="hover:text-[#FF6B35] transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link to="/new-connection" className="hover:text-[#FF6B35] transition-colors font-medium">New Connection</Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-[#FF6B35] transition-colors font-medium">Feedback</Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-[#FF6B35] transition-colors font-medium">Support & Complaints</Link>
              </li>
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h4 className="font-bold mb-4 text-[#FF6B35]">Our Plans</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex justify-between font-medium">
                <span>Basic - 40 Mbps</span>
                <span className="text-[#FFB81C] font-bold">₹399</span>
              </li>
              <li className="flex justify-between font-medium">
                <span>Standard - 50 Mbps</span>
                <span className="text-[#FFB81C] font-bold">₹449</span>
              </li>
              <li className="flex justify-between font-medium">
                <span>Basic OTT - 60 Mbps</span>
                <span className="text-[#FFB81C] font-bold">₹499</span>
              </li>
              <li className="flex justify-between font-medium">
                <span>Premium - 100 Mbps</span>
                <span className="text-[#FFB81C] font-bold">₹599</span>
              </li>
              <li className="flex justify-between font-medium">
                <span>Ultra - 150 Mbps</span>
                <span className="text-[#FFB81C] font-bold">₹799</span>
              </li>
              <li className="flex justify-between font-medium">
                <span>Gigabit - 1 Gbps</span>
                <span className="text-[#FFB81C] font-bold">₹1999</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-[#FF6B35]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-blue-200">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 font-semibold">Call / WhatsApp</p>
                  <a href={`tel:${companyInfo.phone}`} className="font-bold text-white hover:text-[#FF6B35] transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 font-semibold">Email</p>
                  <a href={`mailto:${companyInfo.email}`} className="font-medium text-white hover:text-[#FF6B35] transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFB81C]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFB81C]" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 font-semibold">Visit Our Office</p>
                  <span className="text-sm font-medium">{companyInfo.office}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FF6B35]/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-300 font-medium">
            © {new Date().getFullYear()} Giga Fiber. All rights reserved. | BSNL Authorized Partner
          </p>
          <div className="flex gap-6 text-sm text-blue-300">
            <a href="#" className="hover:text-[#FF6B35] transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF6B35] transition-colors font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
