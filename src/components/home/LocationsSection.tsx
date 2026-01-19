import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import isoLogoCamden from "@/assets/iso-9001-camden.png";

const locations = [
  {
    name: "Camden (Head Office)",
    area: "Kentish Town",
    postcode: "NW5 2AB",
    phone: "020 7419 7419",
    hours: "Mon-Fri: 9am-5pm",
    description: "Our main office serving Camden, Islington, and surrounding North London boroughs.",
    showIso: true,
  },
  {
    name: "East London Branch",
    area: "Leyton",
    postcode: "E10 7JQ",
    phone: "0208 189 5988",
    hours: "Mon-Fri: 9am-5pm",
    description: "We mainly provide care for Barking and Dagenham, Haringey, and Hackney. We can also provide care in Waltham Forest, Tower Hamlets and surrounding areas of East London.",
    showIso: false,
  },
];

export function LocationsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
            Our Locations
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            Care Across London
          </h2>
          <p className="text-body-lg text-muted-foreground">
            With offices in North and East London, we provide domiciliary care 
            services throughout the capital and surrounding areas.
          </p>
        </div>

        {/* Locations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location) => (
            <div key={location.name} className="trust-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {location.area}, London {location.postcode}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {location.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors font-medium">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{location.hours}</span>
                </div>
              </div>

              {/* ISO 9001 badge for Camden only */}
              {location.showIso && (
                <div className="mb-6">
                  <img 
                    src={isoLogoCamden} 
                    alt="ISO 9001 Quality Management Certified" 
                    className="h-16 w-auto"
                  />
                </div>
              )}

              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">Get Directions</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
