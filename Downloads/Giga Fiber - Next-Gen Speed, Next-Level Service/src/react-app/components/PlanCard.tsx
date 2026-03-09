import { Check, Zap } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/react-app/components/ui/button";
import type { ServicePlan } from "@/data/plans";

interface PlanCardProps {
  plan: ServicePlan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
        plan.popular
          ? "bg-gradient-to-br from-[#FF6B35] via-[#FF8C5A] to-[#FFB81C] text-white shadow-2xl shadow-[#FF6B35]/50 ring-4 ring-[#FFB81C]/40"
          : "bg-white border-3 border-[#003DA5]/10 hover:border-[#FF6B35] hover:shadow-2xl hover:shadow-[#FF6B35]/15"
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-[#003DA5] text-center py-2 font-bold">
          <span className="text-xs text-[#FFB81C] uppercase tracking-widest">
            ⭐ Most Popular Plan
          </span>
        </div>
      )}

      <div className={`p-8 ${plan.popular ? "pt-12" : ""}`}>
        <div className="text-center mb-6">
          <h3 className={`text-2xl font-black mb-2 ${plan.popular ? "text-white" : "text-[#003DA5]"}`}>
            {plan.name}
          </h3>
          
          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4 font-bold ${
            plan.popular ? "bg-white/20" : "bg-[#003DA5]/10"
          }`}>
            <Zap className={`w-5 h-5 ${plan.popular ? "text-[#FFB81C]" : "text-[#FF6B35]"}`} />
            <span className={`text-2xl font-black ${plan.popular ? "text-white" : "text-[#003DA5]"}`}>
              {plan.speed}
            </span>
          </div>

          <div className={`text-sm font-semibold mb-4 ${plan.popular ? "text-white/90" : "text-[#003DA5]"}`}>
            📊 {plan.data} Monthly Data
          </div>

          <div className="flex items-baseline justify-center gap-1">
            <span className={`text-5xl font-black ${plan.popular ? "text-white" : "text-[#FF6B35]"}`}>
              ₹{plan.price}
            </span>
            <span className={`text-base font-bold ${plan.popular ? "text-white/80" : "text-[#003DA5]"}`}>/month</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.slice(0, 5).map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold ${
                  plan.popular ? "bg-white/25" : "bg-[#FFB81C]/20"
                }`}
              >
                <Check className={`w-4 h-4 ${plan.popular ? "text-white" : "text-[#FF6B35]"}`} />
              </div>
              <span className={`text-sm font-medium ${plan.popular ? "text-white/95" : "text-gray-700"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Link to={`/new-connection?plan=${plan.id}`}>
          <Button
            className={`w-full font-bold h-12 rounded-2xl transition-all duration-300 text-base border-0 ${
              plan.popular
                ? "bg-[#003DA5] text-white hover:bg-[#002080] hover:shadow-lg shadow-md"
                : "bg-gradient-to-r from-[#FF6B35] to-[#FFB81C] text-white hover:from-[#E55A25] hover:to-[#F0A90F] hover:shadow-lg shadow-md"
            }`}
          >
            Choose Plan
          </Button>
        </Link>
      </div>
    </div>
  );
}
