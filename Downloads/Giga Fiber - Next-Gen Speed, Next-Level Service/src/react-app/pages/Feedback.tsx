import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Star, User, Phone, Mail, MessageSquare, CheckCircle2, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Label } from "@/react-app/components/ui/label";
import { Textarea } from "@/react-app/components/ui/textarea";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    rating: 0,
    message: "",
  });
  const [hoveredRating, setHoveredRating] = useState(0);
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
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile_number: formData.mobileNumber,
          email: formData.email,
          rating: formData.rating,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit feedback");
      setSubmitted(true);
    } catch {
      setError("Failed to submit your feedback. Please try again.");
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
                Thank You!
              </h1>
              <p className="text-gray-600 mb-8">
                We appreciate your feedback. It helps us improve our service for you and others.
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ⭐ We Value Your Opinion
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
              Share Your <span className="text-orange-500">Feedback</span>
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Help us serve you better by sharing your experience with Giga Fiber.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-blue-100 shadow-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                Your Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-blue-900 font-medium">
                    <User className="w-4 h-4 text-gray-400" />
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
                  <Label htmlFor="mobileNumber" className="flex items-center gap-2 text-blue-900 font-medium">
                    <Phone className="w-4 h-4 text-gray-400" />
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
                  <Label htmlFor="email" className="flex items-center gap-2 text-blue-900 font-medium">
                    <Mail className="w-4 h-4 text-gray-400" />
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="h-12 border-2 border-gray-200 focus:border-orange-400"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-blue-100 shadow-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                Rate Your Experience
              </h2>

              <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-12 h-12 transition-colors ${
                        star <= (hoveredRating || formData.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm">
                {formData.rating === 0 && "Click to rate"}
                {formData.rating === 1 && "Poor"}
                {formData.rating === 2 && "Fair"}
                {formData.rating === 3 && "Good"}
                {formData.rating === 4 && "Very Good"}
                {formData.rating === 5 && "Excellent!"}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-blue-100 shadow-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                Your Feedback *
              </h2>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your experience with our service..."
                required
                rows={5}
                className="border-2 border-gray-200 focus:border-orange-400"
              />
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
                disabled={submitting}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg px-12 h-14 font-bold shadow-xl shadow-orange-500/30"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Feedback
                    <Star className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
