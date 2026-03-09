import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router";
import {
  MapPin,
  User,
  Phone,
  Mail,
  Home,
  Navigation,
  Loader2,
  CheckCircle2,
  Zap,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Label } from "@/react-app/components/ui/label";
import { Textarea } from "@/react-app/components/ui/textarea";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { servicePlans } from "@/data/plans";

interface FormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  selectedPlan: string;
  latitude: number | null;
  longitude: number | null;
  notes: string;
}

export default function NewConnectionPage() {
  const [searchParams] = useSearchParams();
  const preselectedPlan = searchParams.get("plan") || "";

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    mobileNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    selectedPlan: preselectedPlan,
    latitude: null,
    longitude: null,
    notes: "",
  });

  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }

    setLocationLoading(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
        setLocationLoading(false);
      },
      (error) => {
        setLocationLoading(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Please allow location access to auto-detect your location");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information is unavailable");
            break;
          case error.TIMEOUT:
            setLocationError("Location request timed out");
            break;
          default:
            setLocationError("An error occurred while getting your location");
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/connection-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName,
          mobile_number: formData.mobileNumber,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          selected_plan: formData.selectedPlan,
          latitude: formData.latitude,
          longitude: formData.longitude,
          notes: formData.notes,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit request");
      setSubmitted(true);
    } catch {
      setError("Failed to submit your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="bg-card rounded-3xl p-12 border border-border shadow-xl">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h1
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Request Submitted!
              </h1>
              <p className="text-muted-foreground mb-8">
                Thank you for choosing SwiftNet! Our team will contact you within 24 hours to
                schedule your installation.
              </p>
              <Link to="/">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
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
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Get connected in 48 hours
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Request New{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Connection
              </span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fill in your details below and our team will reach out to schedule your installation.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                Personal Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="h-12"
                  />
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                Location Details
              </h2>

              {/* Auto-detect Location */}
              <div className="mb-6 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-medium mb-1">Auto-detect your location</p>
                    <p className="text-sm text-muted-foreground">
                      Click to automatically get your GPS coordinates for accurate service delivery
                    </p>
                  </div>
                  <Button
                    type="button"
                    onClick={getLocation}
                    disabled={locationLoading}
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shrink-0"
                  >
                    {locationLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Detecting...
                      </>
                    ) : (
                      <>
                        <Navigation className="w-4 h-4 mr-2" />
                        Detect Location
                      </>
                    )}
                  </Button>
                </div>

                {formData.latitude && formData.longitude && (
                  <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-sm text-green-700 dark:text-green-400 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Location detected: {formData.latitude.toFixed(6)}, {formData.longitude.toFixed(6)}
                    </p>
                  </div>
                )}

                {locationError && (
                  <p className="mt-3 text-sm text-red-500">{locationError}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-muted-foreground" />
                    Street Address *
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House/Flat No., Building, Street, Landmark"
                    required
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Enter your state"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode / ZIP *</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="123456"
                    required
                    className="h-12"
                  />
                </div>
              </div>
            </div>

            {/* Plan Selection Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                Select Your Plan
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {servicePlans.map((plan) => (
                  <label
                    key={plan.id}
                    className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all ${
                      formData.selectedPlan === plan.id
                        ? "border-accent bg-accent/10 shadow-lg shadow-accent/20"
                        : "border-border hover:border-accent/50 hover:bg-muted/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="selectedPlan"
                      value={plan.id}
                      checked={formData.selectedPlan === plan.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <p className="font-semibold">{plan.name}</p>
                      <p className="text-accent font-bold text-lg">{plan.speed}</p>
                      <p className="text-sm text-muted-foreground">{plan.price}/mo</p>
                    </div>
                    {formData.selectedPlan === plan.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-6">Additional Notes (Optional)</h2>
              <Textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Any specific requirements or preferred installation time..."
                rows={4}
              />
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <p className="text-red-500 text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-12 h-14 shadow-xl shadow-accent/30"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
                    <Zap className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                By submitting, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
