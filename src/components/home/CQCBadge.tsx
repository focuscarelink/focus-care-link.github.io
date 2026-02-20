import { Link } from "react-router-dom";
import { ExternalLink, FileText } from "lucide-react";
import hcaLogo from "@/assets/hca-logo.png";
import isoLogo from "@/assets/iso-9001-camden.png";
import cqcRating from "@/assets/cqc-rating.png";

export function CQCBadge() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: CQC Info */}
            <div>
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Care Quality Commission
                </h3>
                <p className="text-sm text-muted-foreground">
                  CQC Registered Provider – Regulated to deliver safe, effective, and compassionate care.
                </p>
              </div>

              <p className="text-muted-foreground mb-6 text-body-lg leading-relaxed">
                Focus Care Link is registered with the Care Quality Commission (CQC), 
                England's independent regulator of health and social care services. 
                Our commitment to quality and continuous improvement guides everything we do.
              </p>

              {/* CQC Rating Widget - Regulation 20A Mandatory */}
              <div className="bg-secondary rounded-xl p-6 mb-6">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <a
                    href="https://www.cqc.org.uk/location/1-118941704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <img
                      src={cqcRating}
                      alt="CQC Overall Rating: Requires Improvement - Focus Care Link - 13 October 2023"
                      className="w-48 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    />
                  </a>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Commitment to Improvement</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      We are actively working with the CQC to address areas identified for improvement. 
                      We have implemented enhanced training programmes, strengthened our governance 
                      processes, and are committed to delivering the highest standards of care for 
                      every service user.
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Rating published: 13 October 2023 · Visit{" "}
                      <a href="https://www.cqc.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        www.cqc.org.uk
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Accreditation logos */}
              <div className="flex items-center gap-4 mb-6">
                <img src={isoLogo} alt="ISO 9001 Quality Management System – Camden Branch" className="h-16 w-auto" />
                <img src={hcaLogo} alt="Homecare Association Member" className="h-16 w-auto" />
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.cqc.org.uk/location/1-118941704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  View our CQC profile
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Quick Links */}
            <div className="bg-secondary rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Key Documents
              </h4>
              <div className="space-y-3">
                <Link
                  to="/compliance#statement-of-purpose"
                  className="flex items-center justify-between p-3 bg-card rounded-lg hover:bg-muted transition-colors group"
                >
                  <span className="text-foreground">Statement of Purpose</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  to="/compliance#complaints"
                  className="flex items-center justify-between p-3 bg-card rounded-lg hover:bg-muted transition-colors group"
                >
                  <span className="text-foreground">Complaints Procedure</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  to="/compliance#safeguarding"
                  className="flex items-center justify-between p-3 bg-card rounded-lg hover:bg-muted transition-colors group"
                >
                  <span className="text-foreground">Safeguarding Policy</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  to="/compliance#service-user-guide"
                  className="flex items-center justify-between p-3 bg-card rounded-lg hover:bg-muted transition-colors group"
                >
                  <span className="text-foreground">Service User Guide</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  to="/privacy"
                  className="flex items-center justify-between p-3 bg-card rounded-lg hover:bg-muted transition-colors group"
                >
                  <span className="text-foreground">Privacy Notice</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
