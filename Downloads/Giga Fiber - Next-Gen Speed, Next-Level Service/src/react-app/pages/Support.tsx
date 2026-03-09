import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  AlertTriangle,
  User,
  Phone,
  HelpCircle,
  CheckCircle2,
  ArrowLeft,
  Loader2,
  Wifi,
  CreditCard,
  Settings,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Label } from "@/react-app/components/ui/label";
import { Textarea } from "@/react-app/components/ui/textarea";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { companyInfo } from "@/data/plans";

const complaintTypes = [
  { id: "connection", label: "Connection Issue", icon: Wifi, color: "from-red-500 to-orange-500" },
  { id: "speed", label: "Slow Speed", icon: AlertTriangle, color: "from-yellow-500 to-orange-500" },
  { id: "billing", label: "Billing Problem", icon: CreditCard, color: "from-green-500 to-emerald-500" },
  { id: "technical", label: "Technical Support", icon: Settings, color: "from-blue-500 to-cyan-500" },
  { id: "other", label: "Other", icon: HelpCircle, color: "from-purple-500 to-pink-500" },
];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    customerId: "",
    complaintType: "",
    subject: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile_number: formData.mobileNumber,
          customer_id: formData.customerId,
          complaint_type: formData.complaintType,
          subject: formData.subject,
          description: formData.description,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit complaint");
      setSubmitted(true);
    } catch {
      setError("Failed to submit your complaint. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Navbar />
        <div className="pt-24 pb-20">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="bg-white rounded-3xl p-12 border-2 border-green-100 shadow-xl">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-black text-blue-900 mb-4">
                Complaint Registered!
              </h1>
              <p className="text-gray-600 mb-4">
                Your complaint has been submitted successfully. Our support team will contact you within 24 hours.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                For urgent issues, please call us at <strong className="text-orange-500">{companyInfo.phone}</strong>
              </p>
              <Link to="/">
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />

      <section className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              🛠️ We're Here to Help
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
              Support & <span className="text-orange-500">Complaints</span>
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Having an issue? Let us know and we'll resolve it as quickly as possible.
            </p>
            
            {/* Quick Contact */}
            <div className="inline-flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call: {companyInfo.phone}
              </a>
              <a
                href={`https://wa.me/91${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-blue-100 shadow-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                Your Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-blue-900 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="h-12 border-2 border-gray-200 focus:border-orange-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="text-blue-900 font-medium">
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    required
                    className="h-12 border-2 border-gray-200 focus:border-orange-400"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="customerId" className="text-blue-900 font-medium">
                    Customer ID (if you have one)
                  </Label>
                  <Input
                    id="customerId"
                    name="customerId"
                    value={formData.customerId}
                    onChange={handleInputChange}
                    placeholder="e.g., GF12345"
                    className="h-12 border-2 border-gray-200 focus:border-orange-400"
                  />
                </div>
              </div>
            </div>

            {/* Complaint Type */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-blue-100 shadow-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                Issue Type *
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {complaintTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, complaintType: type.id }))}
                    className={`relative p-4 rounded-xl border-2 transition-all ${
                      formData.complaintType === type.id
                        ? "border-orange-400 bg-orange-50 shadow-lg"
                        : "border-gray-200 hover:border-orange-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center mx-auto mb-2`}>
                      <type.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs font-medium text-gray-700 text-center">{type.label}</p>
                    {formData.complaintType === type.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Complaint Details */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-blue-100 shadow-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                Describe Your Issue
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-blue-900 font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of the issue"
                    required
                    className="h-12 border-2 border-gray-200 focus:border-orange-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-blue-900 font-medium">
                    Detailed Description *
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Please provide as much detail as possible about your issue..."
                    required
                    rows={5}
                    className="border-2 border-gray-200 focus:border-orange-400"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 rounded-xl border-2 border-red-200">
                <p className="text-red-600 text-center font-medium">{error}</p>
              </div>
            )}

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={submitting || !formData.complaintType}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg px-12 h-14 font-bold shadow-xl shadow-orange-500/30 disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Complaint
                    <AlertTriangle className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                We typically respond within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
