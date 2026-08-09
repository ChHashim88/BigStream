export interface LegalSection {
  id: string;
  title: string;
  content: string[];
}

export const PRIVACY_POLICY: LegalSection[] = [
  {
    id: "info-collection",
    title: "1. Information Collection",
    content: [
      "Big Stream Entertainment ('we', 'us', or 'our'), owned and operated by Big Screen Entertainment Group Inc. (Stock: BSEG), collects information you provide directly to us when creating an account, subscribing to video content, or contacting customer support.",
      "Types of information collected include your full name, email address, password hash, streaming device identifiers, IP addresses, viewing preferences, and payment transaction tokens handled through PCI-compliant payment gateways.",
    ],
  },
  {
    id: "info-usage",
    title: "2. How Information is Used",
    content: [
      "We utilize collected data to deliver high-quality video streaming experiences, maintain user watchlists, synchronize play progress across devices, process transactions, and provide technical customer care.",
      "Aggregate anonymized analytics are evaluated to optimize cloud server load, personalize video recommendations, and curate localized content offerings.",
    ],
  },
  {
    id: "security",
    title: "3. Security Practices",
    content: [
      "Big Stream implements industry-standard transport layer security (TLS 1.3) encryption, strict database row-level security, zero-trust network protocols, and routine vulnerability audits engineered in collaboration with camelCode LLC.",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Local Storage",
    content: [
      "We use essential session tokens and local browser storage to keep you securely signed in, preserve active movie progress bars, and store your customized genre chips without requiring third-party tracking pixels.",
    ],
  },
  {
    id: "third-party",
    title: "5. Third-Party Disclosures",
    content: [
      "Big Stream Entertainment does not sell, rent, or lease your personal identification data to third-party advertisers. Data is shared exclusively with necessary service providers adhering to equivalent privacy standards.",
    ],
  },
  {
    id: "data-protection",
    title: "6. Data Protection Rights",
    content: [
      "Under applicable data privacy regulations (including CCPA and GDPR), users retain rights to access, port, rectify, or request permanent deletion of personal profile histories stored on Big Stream systems.",
    ],
  },
  {
    id: "service-providers",
    title: "7. Service Providers",
    content: [
      "We engage vetted cloud hosting, content delivery networks (CDNs), video transcoders, and analytical partners bound by strict confidentiality and non-disclosure agreements.",
    ],
  },
  {
    id: "payment-processors",
    title: "8. Payment Processors",
    content: [
      "All credit card processing and billing management operations are securely routed through PCI-DSS Level 1 certified payment partners (e.g. Stripe/Braintree). Credit card numbers are never stored directly on Big Stream servers.",
    ],
  },
  {
    id: "contact",
    title: "9. Contact Information",
    content: [
      "For privacy inquiries, data deletion requests, or regulatory communications, please contact our Data Protection Officer at privacy@bigstreamentertainment.com or via mail at Big Screen Entertainment Group Inc., Los Angeles, CA.",
    ],
  },
];
