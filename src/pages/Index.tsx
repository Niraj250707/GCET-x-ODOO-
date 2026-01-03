import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Clock, Wallet, BarChart3, MessageCircle, Shield } from "lucide-react";

const features = [
  { icon: Clock, title: "Attendance Tracking", description: "Real-time check-in/out with location tracking" },
  { icon: Users, title: "Leave Management", description: "Apply, track, and manage leaves effortlessly" },
  { icon: Wallet, title: "Payroll & Salary", description: "View payslips, tax info, and salary breakdowns" },
  { icon: MessageCircle, title: "Community Hub", description: "Connect with colleagues across departments" },
  { icon: BarChart3, title: "Analytics", description: "Insightful reports and performance metrics" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security for your data" },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg font-display">D</span>
            </div>
            <span className="font-display font-bold text-xl">Dayflow</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="btn-secondary py-2 px-4 text-sm"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="btn-primary py-2 px-4 text-sm hidden sm:flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Modern HR Management Platform
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 animate-slide-in-bottom">
              Simplify Your HR
              <span className="text-gradient block">Operations Today</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-bottom" style={{ animationDelay: "100ms" }}>
              All-in-one platform for attendance, leaves, payroll, and team collaboration. 
              Designed for modern teams who value efficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-bottom" style={{ animationDelay: "200ms" }}>
              <button
                onClick={() => navigate("/signup")}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/login")}
                className="btn-secondary w-full sm:w-auto"
              >
                View Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful features to streamline your HR processes and boost productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-in-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-3xl p-8 md:p-12 gradient-primary text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold font-display">500+</p>
                <p className="text-white/80 mt-2">Companies Trust Us</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold font-display">50K+</p>
                <p className="text-white/80 mt-2">Active Employees</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold font-display">99.9%</p>
                <p className="text-white/80 mt-2">Uptime Guaranteed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold font-display">4.9★</p>
                <p className="text-white/80 mt-2">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Transform Your HR?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using Dayflow to manage their HR operations efficiently.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold font-display text-sm">D</span>
            </div>
            <span className="font-display font-semibold">Dayflow HRMS</span>
          </div>
          <p>© 2025 Dayflow. Built for Hackathon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
