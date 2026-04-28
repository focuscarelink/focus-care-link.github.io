import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import feedbackHero from "@/assets/feedback-hero.jpg";

const Feedback = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Thank you for your feedback!",
        description: "Your feedback has been received. We appreciate you taking the time to help us improve.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img src={feedbackHero} alt="Feedback" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Feedback" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-background" />
              </div>
              <span className="text-background/80 font-medium">Share Your Experience</span>
            </div>
            <h1 className="font-display text-display-lg text-background mb-4">
              Your Feedback
            </h1>
            <p className="text-background/80 text-body-lg">
              Your feedback helps us improve the quality of care we provide. Whether positive or constructive, 
              we value your input and use it to continually enhance our services.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl border border-border bg-card">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Feedback</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please share your experience with us..."
                  rows={6}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full cta-gradient border-0 text-accent-foreground font-semibold"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;
