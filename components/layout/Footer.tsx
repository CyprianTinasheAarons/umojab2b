import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" }
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" }
  ],
  contact: [
    { label: "hello@umojab2b.com", href: "mailto:hello@umojab2b.com", icon: <Mail className="h-4 w-4" /> },
    { label: "+263 777 150 345", href: "tel:+263777150345", icon: <Phone className="h-4 w-4" /> },
    { label: "+263 771 535 326", href: "tel:+263771535326", icon: <Phone className="h-4 w-4" /> }
  ]
};

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" }
];

export function Footer() {
  return (
    <footer className="bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Umoja</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering businesses to thrive in the digital world with comprehensive online solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {contact.icon}
                    {contact.label}
                  </a>
                </li>
              ))}
              <li className="text-sm text-muted-foreground">
                Available on Email & WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Umoja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}