import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Breadcrumb } from "@/components/Breadcrumb";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Heart,
  Briefcase
} from "lucide-react";
import contactHeroImage from "@/assets/contact-hero.jpg";
import contactOfficeImage from "@/assets/contact-office.jpg";

const locations = [
  {
    name: "Camden (Head Office)",
    address: "Kentish Town, London NW5 2AB",
    phone: "020 7419 7419",
    email: "admin@focuscarelink.co.uk",
    hours: "Monday - Friday: 9am - 5pm",
    description: "Our main office serving Camden, Islington, and surrounding North London boroughs.",
  },
  {
    name: "East London Branch",
    address: "Leyton, London E10 7JQ",
    phone: "0208 189 5988",
    email: "office@focuscarelink.co.uk",
    hours: "Monday - Friday: 9am - 5pm",
    description: "We mainly provide care for Barking and Dagenham, Haringey, and Hackney. We can also provide care in Waltham Forest, Tower Hamlets and surrounding areas of East London.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enquiryType, setEnquiryType] = useState<"care" | "careers">("care");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for contacting us. We'll be in touch within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero section with image */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactHeroImage}
            alt="Get in touch"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Contact Us" />
            <span className="inline-block px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-background text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-display-lg text-background mb-6">
              Get in Touch
            </h1>
            <p className="text-body-xl text-background/90 leading-relaxed">
              Whether you're looking for care support or want to join our team, 
              we're here to help. Reach out today.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                {/* Enquiry type selector */}
                <div className="flex gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setEnquiryType("care")}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-colors ${
                      enquiryType === "care"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-muted"
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                    Care Enquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setEnquiryType("careers")}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-colors ${
                      enquiryType === "careers"
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-foreground hover:bg-muted"
                    }`}
                  >
                    <Briefcase className="w-5 h-5" />
                    Work With Us
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your phone number"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {enquiryType === "care" 
                        ? "Tell us about your care needs" 
                        : "Tell us about yourself and the role you're interested in"
                      } *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={enquiryType === "care" 
                        ? "Please describe the type of care support you're looking for..." 
                        : "Share your experience and why you'd like to work with us..."
                      }
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    . We will never share your information with third parties.
                  </p>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full font-semibold h-14"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Enquiry
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              {/* Office image */}
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img src={contactOfficeImage} alt="Our friendly team at the office" className="w-full h-48 object-cover" />
              </div>
              
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Our Locations
                </h2>
                <div className="space-y-6">
                  {locations.map((location) => (
                    <div key={location.name} className="trust-card">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {location.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {location.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-foreground">{location.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-primary shrink-0" />
                          <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="text-foreground hover:text-primary transition-colors">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-primary shrink-0" />
                          <a href={`mailto:${location.email}`} className="text-foreground hover:text-primary transition-colors">
                            {location.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-muted-foreground">{location.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency contact */}
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Need Urgent Support?
                </h3>
                <p className="text-muted-foreground mb-4">
                  For existing clients requiring urgent out-of-hours support, please call our main number where you'll be directed to our emergency contact.
                </p>
                <a
                  href="tel:02074197419"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  020 7419 7419
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
