import {
  Radio, Truck, BrainCircuit, Smartphone, Store, Landmark, Volume2, Receipt, QrCode, CreditCard,
  Video, Factory, Gauge, Pickaxe, PlugZap, MapPin, Route, UserRound, Camera, BarChart3, Fuel,
  FileText, FileCheck, Database, Mail, Workflow, ShieldCheck, Handshake, Cpu, Users, Target,
  Building2, ChartNoAxesCombined, Globe, Boxes, Headset, Cable, Layers, Clock3, Link2,
} from "lucide-react";

// WhatsApp deep link from a display number such as "+62 878-9276-4553"
export const waLink = (number) => `https://wa.me/${number.replace(/\D/g, "")}`;
export const telLink = (number) => `tel:+${number.replace(/\D/g, "")}`;

export const CONTACT = {
  email: "info@jsutama.com",
  // main number: also the WhatsApp line for business enquiries
  phone: "+62 878-9276-4553",
  address: ["PT Jakarta Soerja Utama", "Soho Collins Boulevard", "Tangerang, Banten, Indonesia"],
  // customer support lines (the main number is one of them)
  support: ["+62 899-1500-737", "+62 878-9276-4553"],
};

/* ───────── Header / hero ───────── */
export const HERO = {
  titleLines: ["Connecting", "Technology.", "Creating"],
  accent: "Impact.",
  lead: "We empower enterprises through IoT Connectivity, Smart Devices, Fleet Intelligence, AI Automation, and Digital Solutions to drive sustainable growth and lasting impact.",
};

export const TRUST = [
  { icon: Layers, value: "100K+", label: "Connected Assets" },
  { icon: ShieldCheck, value: "99.9%", label: "Platform Availability" },
  { icon: Headset, value: "Managed Services", label: "Proactive monitoring, support & maintenance." },
  { icon: Building2, value: "End-to-End", label: "Solutions" },
];

/* ───────── About Us (1 – 6) ───────── */
export const ABOUT_INTRO = {
  title: ["About", "Us"],
  paragraphs: [
    "PT Jakarta Soerja Utama (JSU) empowers organizations to accelerate Digital Transformation with integrated solutions in IoT Connectivity, Fleet Intelligence, AI & Automation, Smart Devices, and many more.",
    "By combining technology, industry expertise, and strategic partnership, we deliver end-to-end solutions that create measurable business impact.",
  ],
  pillars: [
    { icon: Users, lines: ["One Partner.", "Complete Solution.", "Sustainable Growth."] },
    { icon: ShieldCheck, lines: ["Trusted.", "Collaborative.", "Reliable."] },
    { icon: Target, lines: ["Focused on Impact.", "Built for the Future."] },
  ],
};

export const WHO_WE_ARE = [
  { icon: Building2, title: "Who We Are", text: "We are a technology and solutions partner committed to helping organizations transform and grow in the digital era through innovative and reliable solutions." },
  { icon: Users, title: "How We Work", text: "We collaborate with leading global manufacturers and technology principals who are experts in their fields. We are not just connecting you — we deliver end-to-end solutions tailored to each client's needs, with JSU acting as a System Integrator and dedicated 1st level support to ensure optimal performance and customer satisfaction." },
  { icon: Cpu, title: "Digital Solutions", text: "We support our clients through IoT Connectivity, Fleet Intelligence, AI Automation, Custom Software Development, and more." },
  { icon: Target, title: "Consulting Solutions", text: "We deliver talent development solutions and business development solutions that drive real implementation and lasting transformation." },
  { icon: Cable, title: "Embedded Solutions", text: "We provide embedded technology solutions and device integration that empower your operations with intelligent and reliable performance." },
  { icon: Handshake, title: "Our Commitment", text: "By combining technology, business insight, and practical execution, JSU serves as a trusted partner for organizations seeking measurable results and long-term success." },
];

export const PHILOSOPHY = {
  title: "Our Philosophy",
  intro: "We believe that sustainable business comes from creating value and spreading goodness.",
  equation: [
    { icon: ChartNoAxesCombined, label: ["Solutions", "that Grow"] },
    { icon: Users, label: ["Goodness", "that Multiplies"] },
    { icon: Globe, label: ["Impacting", "Lives"] },
  ],
  outro: "Delivering business value while creating meaningful impact for people and communities.",
};

export const DNA = {
  eyebrow: "OUR DNA. YOUR IMPACT.",
  title: ["Technology. People.", "Business. Partner. = Impact"],
  text: "We believe real transformation happens when the right elements work together. This is the DNA of JSU — creating meaningful and sustainable impact.",
  items: [
    { icon: Cpu, title: "Technology", text: "Smart and innovative technologies to solve real-world challenges and unlock new possibilities." },
    { icon: Users, title: "People", text: "Talented, passionate, and collaborative people who drive ideas into actions and create value." },
    { icon: ChartNoAxesCombined, title: "Business", text: "We align technology with business strategy to improve performance and achieve long-term growth." },
    { icon: Handshake, title: "Partner", text: "Strong partnerships expand our capabilities and ensure end-to-end, reliable solutions." },
    { icon: Target, title: "Impact", text: "Creating measurable impact that drives growth, improves lives, and builds a better future." },
  ],
};

export const CHALLENGE = {
  eyebrow: "THE CHALLENGE",
  title: ["Industry &", "Business Challenges"],
  subtitle: "We Truly Understand.",
  left: "Our team has been on the end-user side. We've faced these challenges, felt the impact, and learned what it takes to overcome them.",
  right: "Many organizations focus on solving what's visible, but the real impact is held back by what's hidden.",
  quote: ["Most companies solve the ", "visible", " symptoms."],
  quote2: ["We solve the ", "hidden", " causes."],
  visible: [
    { title: "Downtime", text: "Operational disruptions impact productivity." },
    { title: "High Cost", text: "Rising operational costs and inefficiencies." },
    { title: "Slow Decisions", text: "Limited real-time insights lead to delayed actions." },
  ],
  hidden: [
    { title: "Disconnected Data", text: "Data scattered across systems, no single source of truth." },
    { title: "Siloed Systems", text: "Systems don't communicate, creating data and process silos." },
    { title: "Multiple Non-Integrated Solutions", text: "Too many solutions that are not simultaneous and not integrated. Different standards, and high complexity." },
    { title: "No Standard & Governance", text: "Lack of standardization and governance across operations." },
    { title: "Lack of Integration", text: "Technologies work in isolation, not as a unified ecosystem." },
  ],
};

export const APPROACH = {
  eyebrow: "OUR APPROACH",
  steps: [
    ["Discovery", "We listen, learn, and understand your challenges and goals."],
    ["Design", "We design the right strategy and solution tailored to your business needs."],
    ["Implementation", "We deliver and integrate solutions with high quality and precision."],
    ["Long-Term Partnership", "We grow together, continuously optimizing for long-term success and impact."],
  ],
};

/* ───────── Solutions ───────── */
export const SOLUTIONS = [
  { id: "iot", icon: Radio, title: "IoT Connectivity", text: "Reliable connectivity for mission-critical operations.", cta: "Explore Connectivity", topic: "IoT Connectivity" },
  { id: "fleet", icon: Truck, title: "Fleet Intelligence", text: "Real-time visibility and control for your fleet operations.", cta: "Explore Fleet Solutions", topic: "Fleet Intelligence & Telematics" },
  { id: "ai", icon: BrainCircuit, title: "AI & Automation", text: "Intelligent automation to drive efficiency and better decisions.", cta: "Explore AI Solutions", topic: "AI Automation" },
  { id: "devices", icon: Smartphone, title: "Smart Devices", text: "Connected devices and hardware to power smarter business operations.", cta: "Explore Smart Devices", topic: "Smart Devices - IoT/Telematics" },
];

export const ISO = [
  ["ISO 9001", "Quality Management"],
  ["ISO 14001", "Environmental Management"],
  ["ISO 22301", "Business Continuity Management"],
  ["ISO 27001", "Information Security Management"],
  ["ISO 50001", "Energy Management"],
];

export const IOT = {
  title: "IoT Connectivity",
  subtitle: "One ecosystem. Two specialized connectivity solutions.",
  isoTitle: "International Standards & Certifications",
  isoText: "Our commitment to quality, security, sustainability and operational resilience.",
  collabTitle: "Technology Solution by JSU, in Collaboration with NOVA",
  collab: [
    "Multi-network M2M connectivity",
    "SIM provisioning and usage monitoring",
    "Connectivity integration and technical support",
    "Scalable solutions for enterprise deployments",
  ],
};

export const IOT_PRODUCTS = {
  edt: {
    id: "edt",
    tone: "blue",
    name: "ED&T Connect",
    logo: "/brand/edt-connect.png",
    badge: "For Payment & Transactions",
    kind: "Point-of-Sale Connectivity",
    blurb: "Connectivity solutions for EDC terminals, payment Soundbox and smart payment devices.",
    cta: "Explore ED&T Connect",
    tagline: "Connect Devices. Enable Transactions.",
    headline: "Reliable M2M connectivity designed for payment transactions and smart payment devices.",
    features: [
      "Multi-network M2M SIM connectivity",
      "Reliable connectivity for EDC and Soundbox",
      "SIM usage monitoring and management",
      "Enterprise deployment and technical support",
    ],
    ideal: "Banks, fintech companies, payment providers, merchants and retail networks.",
    idealIcon: Users,
    topic: "IoT Connectivity",
    hub: {
      center: "ED&T Connect",
      logo: "/brand/edt-connect.png",
      nodes: [
        { icon: Store, label: "Retail Merchant" },
        { icon: Landmark, label: "Bank / Payment Gateway" },
        { icon: Volume2, label: "Payment Soundbox" },
        { icon: Receipt, label: "Transaction Processing" },
        { icon: QrCode, label: "QR / Mobile Payment" },
        { icon: CreditCard, label: "EDC / POS Terminal" },
      ],
    },
  },
  nlink: {
    id: "nlink",
    tone: "green",
    name: "N-Link",
    logo: "/brand/nlink.png",
    badge: "For Business Operations",
    kind: "Point-of-Operation Connectivity",
    blurb: "Reliable connectivity for industrial IoT, fleet, CCTV and mission-critical operational devices.",
    cta: "Explore N-Link",
    tagline: "Connect Operations. Enable Possibilities.",
    headline: "Reliable M2M connectivity for industrial IoT, fleet, CCTV and mission-critical operational devices.",
    features: [
      "Multi-network M2M SIM connectivity",
      "Secure connectivity with Private APN & VPN options",
      "SIM usage monitoring and management",
      "Broad device compatibility and IoT integration",
      "Enterprise deployment and technical support",
    ],
    ideal: "Fleet operators, logistics, industrial enterprises, utilities, infrastructure and government projects.",
    idealIcon: Building2,
    topic: "IoT Connectivity",
    hub: {
      center: "N-Link",
      logo: "/brand/nlink.png",
      nodes: [
        { icon: Truck, label: "Fleet & Transportation" },
        { icon: Video, label: "CCTV & Surveillance" },
        { icon: Factory, label: "Industrial IoT" },
        { icon: Gauge, label: "IoT Sensors & Remote Monitoring" },
        { icon: Pickaxe, label: "Mining & Heavy Equipment" },
        { icon: PlugZap, label: "SPKLU & Energy Infrastructure" },
      ],
    },
  },
};

export const FLEET = {
  tone: "blue",
  name: "Fleet BI",
  logo: "/brand/fleet-bi.png",
  badge: "Fleet Intelligence",
  tagline: "Connected Fleet. Smarter Operations.",
  headline: "Real-time visibility, intelligent monitoring and actionable insights for safer, more efficient fleet operations.",
  featuresTitle: "Key Capabilities",
  features: [
    "Real-time GPS fleet tracking",
    "AI dashcam and driver behavior monitoring",
    "Fuel monitoring and vehicle diagnostics",
    "Route management and geofencing",
    "Fleet analytics and reporting",
    "Integration with third-party systems",
    "Enterprise deployment and technical support",
  ],
  ideal: "Public transportation, logistics, mining, construction, government fleets and enterprise mobility.",
  idealIcon: Users,
  topic: "Fleet Intelligence & Telematics",
  hub: {
    center: "Fleet BI",
    logo: "/brand/fleet-bi.png",
    nodes: [
      { icon: MapPin, label: "Fleet Tracking", sub: "Real-time location and fleet visibility" },
      { icon: Route, label: "Route Management", sub: "Geofencing and route optimization" },
      { icon: UserRound, label: "Driver Monitoring", sub: "Driver behavior and safety" },
      { icon: Camera, label: "AI Dashcam", sub: "Road safety and incident recording" },
      { icon: PlugZap, label: "EV / SPKLU", sub: "Charging monitoring and infrastructure" },
      { icon: BarChart3, label: "Fleet Analytics", sub: "Data-driven insights and reporting" },
      { icon: Fuel, label: "Fuel Monitoring", sub: "Fuel usage and theft detection" },
    ],
  },
  collabTitle: "A Strategic Collaboration with",
  // logos live in /public/brand/partners; a text chip is shown until the file exists
  collabPartners: [
    { name: "Multi Entity", logo: "/brand/partners/multi-entity.png" },
    { name: "GAS", logo: "/brand/partners/gas.png" },
  ],
  collabText: "Combining JSU's IoT connectivity, system integration and technology capabilities with our partners' expertise to deliver connected fleet solutions.",
};

export const AI = {
  tone: "blue",
  name: "MinteLix",
  logo: "/brand/mintelix.png",
  badges: ["AI & Automation", "Custom Software"],
  tagline: "Turn Information into Action.",
  headline: "AI-powered automation and custom software solutions to simplify processes, improve efficiency, and enable better decisions.",
  featuresTitle: "Key Capabilities",
  features: [
    "Intelligent Document Processing (IDP)",
    "AI data extraction and classification",
    "Document validation and verification",
    "Workflow and approval automation",
    "Custom business applications and platforms",
    "API integration and system connectivity",
    "AI-assisted reporting and insights",
  ],
  ideal: "Finance, insurance, banking, logistics, manufacturing, government and enterprise operations.",
  idealIcon: Users,
  topic: "AI Automation",
  hub: {
    center: "MinteLix",
    logo: "/brand/mintelix.png",
    nodes: [
      { icon: FileText, label: "Invoices & Purchase Orders" },
      { icon: FileCheck, label: "Contracts & Forms" },
      { icon: Database, label: "ERP / Accounting" },
      { icon: Mail, label: "Email Notifications" },
      { icon: Workflow, label: "Approval Workflow" },
      { icon: BarChart3, label: "Dashboard & Reporting" },
    ],
  },
  panels: [
    { icon: BrainCircuit, title: "AI Automation", tone: "blue", items: ["Intelligent Document Processing (IDP)", "Workflow & Approval Automation", "AI-assisted Analytics & Insights", "Process Automation"] },
    { icon: Boxes, title: "Custom Software", tone: "green", items: ["Web & Mobile Applications", "Enterprise Dashboards", "API & System Integration", "Middleware & Custom Platforms"] },
  ],
  stripTitle: "Built Around Your Business",
  stripText: "We design AI and automation solutions around the way your business operates, integrating with your existing systems and processes.",
  ctaLabel: "Schedule an AI Consultation",
};

export const DEVICES = {
  title: "Smart Devices",
  tagline: "Connected Hardware. Real-World Solutions.",
  headline: "We provide and integrate smart devices that connect your people, assets, vehicles, and business operations with reliable connectivity and intelligent solutions.",
  topic: "Smart Devices - IoT/Telematics",
  groupsTitle: "Our Device Solutions",
  groups: [
    { icon: CreditCard, tone: "blue", title: "Payment Devices", text: "Enable seamless and reliable transactions.", items: ["EDC Payment", "EDC Soundbox", "Smart POS Devices"] },
    { icon: Truck, tone: "green", title: "Fleet & Telematics", text: "Monitor and protect your vehicles and assets.", items: ["GPS Tracker", "AI Dashcam", "Telematics Devices"] },
    { icon: Cpu, tone: "blue", title: "IoT & Industrial", text: "Connect and collect essential operational data.", items: ["Fuel Sensor", "IoT Gateway", "Various Sensors"] },
  ],
  whyTitle: "Why Choose JSU",
  why: [
    { icon: ShieldCheck, title: "Trusted Devices", text: "Sourced from reliable global and local manufacturers." },
    { icon: Link2, title: "End-to-End Integration", text: "Integrated with connectivity, platforms, and business systems." },
    { icon: Clock3, title: "Deployment & Support", text: "Device configuration, deployment, and technical support." },
    { icon: Users, title: "Tailored to Your Needs", text: "Devices and solutions matched to your business requirements." },
  ],
  stripTitle: "From Devices to Possibilities",
  stripText: "Get the right devices and integration for your business operations.",
};

/* ───────── Clients ───────── */
export const CLIENTS = [
  { name: "PLN", logo: "/brand/clients/pln.png" },
  { name: "PLN SPKLU", logo: "/brand/clients/pln-spklu.png" },
  { name: "Samudera Indonesia", logo: "/brand/clients/samudera.png" },
  { name: "Trans Semarang", logo: "/brand/clients/trans-semarang.png" },
  { name: "Trans Suroboyo", logo: "/brand/clients/trans-suroboyo.png" },
  { name: "VinFast", logo: "/brand/clients/vinfast.png" },
  { name: "V-Green", logo: "/brand/clients/v-green.png" },
  { name: "Powerindo", logo: "/brand/clients/powerindo.png" },
  { name: "Nusantara Global Inovasi", logo: "/brand/clients/ngi.png" },
  { name: "Trafindo", logo: "/brand/clients/trafindo.png" },
  { name: "Tatonas", logo: "/brand/clients/tatonas.png" },
  { name: "High Volt Technology", logo: "/brand/clients/hvt.png" },
  { name: "Enertelindo", logo: "/brand/clients/enertelindo.png" },
  { name: "Evoltz", logo: "/brand/clients/evoltz.png" },
  { name: "EV & Charging Indonesia", logo: "/brand/clients/ev-charging-indonesia.png" },
  { name: "ieeel Institute", logo: "/brand/clients/ieeel.png" },
  { name: "Putra Mandiri Informatika", logo: "/brand/clients/pmi.png" },
  { name: "Trisula", logo: "/brand/clients/trisula.png" },
  { name: "Epicplus", logo: "/brand/clients/epicplus.png" },
  { name: "Sunmi", logo: "/brand/clients/sunmi.png" },
];

/* ───────── Forms ───────── */
export const TOPICS = [
  "IoT Connectivity",
  "Smart Devices - IoT/Telematics",
  "Fleet Intelligence & Telematics",
  "AI Automation",
  "Digital Solutions & System Integration",
];

export const PARTNERSHIPS = [
  { id: "reseller_channel", icon: Store, title: "Reseller & Channel Partner", text: "Sell JSU products and services to your customers." },
  { id: "technology", icon: Cpu, title: "Technology Partner", text: "Integrate technology, devices, and platforms." },
  { id: "strategic", icon: Handshake, title: "Strategic Partner", text: "Business collaboration and joint solution development." },
  { id: "referral", icon: Users, title: "Referral Partner", text: "Introduce prospects and business opportunities to JSU." },
];

export const PARTNER_PRODUCTS = ["IoT Connectivity", "Fleet Intelligence", "AI & Automation", "Smart Devices"];

export const CAREER_POSITIONS = [
  "Open application (any role)",
  "IoT / Embedded Engineer",
  "Software Engineer",
  "Sales & Business Development",
  "Project & Implementation",
  "Technical Support / Operations",
  "Other",
];

export const FORM_COPY = {
  consultation: {
    title: "Schedule a Consultation",
    subtitle: "Let's discuss how JSU can support your business with the right technology solutions.",
    submit: "Submit Consultation Request",
    foot: "Thank you for your interest in JSU. Our team will contact you as soon as possible to discuss your requirements and arrange a consultation.",
    successTitle: "Thank You for Reaching Out!",
    success: "Your consultation request has been successfully submitted. Our team will review your requirements and contact you as soon as possible to arrange a consultation.",
  },
  partnership: {
    title: "Grow Together with JSU",
    subtitle: "Let's build meaningful business opportunities through technology, connectivity, and strategic collaboration.",
    submit: "Submit Partnership Inquiry",
    foot: "Our partnership team will review your inquiry and contact you to explore potential collaboration opportunities.",
    successTitle: "Thank You for Your Interest in Partnering with JSU!",
    success: "Your partnership inquiry has been successfully submitted. Our team will review your information and contact you soon to explore potential collaboration opportunities. We look forward to growing together!",
  },
  career: {
    title: "Build What's Next with JSU",
    subtitle: "Join a team of passionate people turning technology into real impact. Tell us about yourself and the role you are interested in.",
    submit: "Submit Application",
    foot: "Our team will review your application and get in touch if there is a suitable opportunity.",
    successTitle: "Thank You for Your Interest in Joining JSU!",
    success: "Your application has been successfully submitted. Our team will review your profile and contact you if there is a suitable opportunity.",
  },
};

/* ───────── Solution detail pages (/solutions/:id) ───────── */
// One-line explanation under each capability card. Plain restatements of the capability, nothing extra is promised.
export const FEATURE_NOTES = {
  "Multi-network M2M SIM connectivity": "SIMs that work across multiple mobile networks for dependable coverage.",
  "Reliable connectivity for EDC and Soundbox": "Keeps payment terminals and soundbox devices online when transactions happen.",
  "SIM usage monitoring and management": "Track and manage SIM usage across every connected device.",
  "Enterprise deployment and technical support": "Rollout and technical support for deployments of any size.",
  "Secure connectivity with Private APN & VPN options": "Private APN and VPN options for sensitive operational traffic.",
  "Broad device compatibility and IoT integration": "Works with a wide range of industrial, fleet and CCTV devices.",
  "Real-time GPS fleet tracking": "See where every vehicle is, as it happens.",
  "AI dashcam and driver behavior monitoring": "Video and behavior insights for safer driving.",
  "Fuel monitoring and vehicle diagnostics": "Follow fuel usage and vehicle condition in one place.",
  "Route management and geofencing": "Plan routes and get alerted when vehicles cross defined zones.",
  "Fleet analytics and reporting": "Turn fleet data into reports that support decisions.",
  "Integration with third-party systems": "Connects to the systems your business already runs on.",
  "Intelligent Document Processing (IDP)": "Read and understand invoices, contracts and forms automatically.",
  "AI data extraction and classification": "Pull the right data out of documents and sort it correctly.",
  "Document validation and verification": "Check extracted data before it reaches your systems.",
  "Workflow and approval automation": "Route work to the right people without manual hand-offs.",
  "Custom business applications and platforms": "Software built around the way your business operates.",
  "API integration and system connectivity": "Link applications and data sources through APIs.",
  "AI-assisted reporting and insights": "Summaries and insights that help teams decide faster.",
  "EDC Payment": "Payment terminals for card transactions.",
  "EDC Soundbox": "Soundbox devices that confirm payments out loud.",
  "Smart POS Devices": "Point-of-sale hardware for modern retail.",
  "GPS Tracker": "Location tracking for vehicles and assets.",
  "AI Dashcam": "In-vehicle cameras with AI-assisted monitoring.",
  "Telematics Devices": "Vehicle data collection for fleet operations.",
  "Fuel Sensor": "Accurate fuel level and usage data.",
  "IoT Gateway": "Collects and forwards data from field devices.",
  "Various Sensors": "Sensors for the operational data you need to collect.",
};

export const SOLUTION_PAGES = {
  iot: {
    id: "iot", icon: Radio, theme: "ocean", title: "IoT Connectivity",
    eyebrow: "IoT CONNECTIVITY",
    tagline: "One ecosystem. Two specialized connectivity solutions.",
    headline: "Reliable connectivity for the devices that run payments, fleets and mission-critical operations.",
    topic: "IoT Connectivity",
    hub: IOT_PRODUCTS.edt.hub, hubTone: "blue",
    products: ["edt", "nlink"],
    ideal: ["Banks & fintech", "Payment providers", "Merchants & retail", "Fleet operators", "Logistics", "Industrial enterprises", "Utilities & infrastructure", "Government projects"],
  },
  fleet: {
    id: "fleet", icon: Truck, theme: "forest", title: "Fleet Intelligence",
    eyebrow: "FLEET INTELLIGENCE",
    tagline: FLEET.tagline, headline: FLEET.headline,
    topic: FLEET.topic, logo: FLEET.logo, name: FLEET.name,
    hub: FLEET.hub, hubTone: "blue",
    capabilities: FLEET.features,
    ideal: ["Public transportation", "Logistics", "Mining", "Construction", "Government fleets", "Enterprise mobility"],
    collab: { title: FLEET.collabTitle, partners: FLEET.collabPartners, text: FLEET.collabText },
  },
  ai: {
    id: "ai", icon: BrainCircuit, theme: "emerald", title: "AI & Automation",
    eyebrow: "AI & AUTOMATION",
    tagline: AI.tagline, headline: AI.headline,
    topic: AI.topic, logo: AI.logo, name: AI.name,
    hub: AI.hub, hubTone: "blue",
    capabilities: AI.features,
    panels: AI.panels,
    ideal: ["Finance", "Insurance", "Banking", "Logistics", "Manufacturing", "Government", "Enterprise operations"],
    ctaLabel: AI.ctaLabel,
    strip: { title: AI.stripTitle, text: AI.stripText },
  },
  devices: {
    id: "devices", icon: Smartphone, theme: "slate", title: "Smart Devices",
    eyebrow: "SMART DEVICES",
    tagline: DEVICES.tagline, headline: DEVICES.headline,
    topic: DEVICES.topic,
    hub: {
      center: "Smart Devices",
      nodes: [
        { icon: CreditCard, label: "EDC Payment" },
        { icon: Volume2, label: "EDC Soundbox" },
        { icon: MapPin, label: "GPS Tracker" },
        { icon: Camera, label: "AI Dashcam" },
        { icon: Cable, label: "IoT Gateway" },
        { icon: Gauge, label: "Fuel Sensor" },
      ],
    },
    hubTone: "blue",
    groups: DEVICES.groups, why: DEVICES.why, strip: { title: DEVICES.stripTitle, text: DEVICES.stripText },
    ideal: ["Payment & retail", "Fleet & telematics", "Industrial IoT", "Energy & infrastructure"],
  },
};

export const SOLUTION_ORDER = ["iot", "fleet", "ai", "devices"];

export const DELIVERY_STEPS = [
  ["Discovery", "We listen to your operation, challenges and goals."],
  ["Design", "We shape the right solution and integration for your business."],
  ["Implementation", "We deploy and integrate with high quality and precision."],
  ["Long-term partnership", "We keep monitoring, supporting and optimizing as you grow."],
];

export const faqFor = (title) => [
  [`Can ${title} work with our existing systems?`, "Yes. JSU acts as the system integrator, connecting the solution with your existing platforms and business systems, including third-party systems."],
  ["What support do you provide?", "Enterprise deployment and technical support, with dedicated 1st level support from JSU to help keep performance and customer satisfaction high."],
  ["How do we get started?", "Schedule a consultation. We discuss your needs, design the right solution, then implement it and stay with you as a long-term partner."],
];

/* ───────── Extra About Us / Solutions content ─────────
   Everything below is rearranged from material the client supplied (the review deck, the solution
   modals and the company details). No outside facts or figures are added. */
export const COMPANY_PROFILE = {
  eyebrow: "COMPANY PROFILE",
  title: "PT Jakarta Soerja Utama at a glance",
  rows: [
    ["Company", "PT Jakarta Soerja Utama (JSU)"],
    ["Promise", "Impacting Possibilities"],
    ["Focus", "IoT Connectivity · Fleet Intelligence · AI & Automation · Smart Devices · Digital & Consulting Solutions"],
    ["Role", "System Integrator with dedicated 1st level support"],
    ["Head office", "Soho Collins Boulevard, Tangerang, Banten, Indonesia"],
    ["Contact", "info@jsutama.com · +62 878-9276-4553"],
  ],
};

export const PARTNER_MODEL = {
  eyebrow: "HOW WE WORK",
  title: "Experts behind every solution, one partner in front",
  text: "We collaborate with leading global manufacturers and technology principals who are experts in their fields, then take responsibility for making the solution work for you.",
  nodes: [
    { icon: Factory, title: "Manufacturers & technology principals", text: "Leading global experts in their fields." },
    { icon: Handshake, title: "JSU", text: "System Integrator and dedicated 1st level support, tailoring each solution end to end.", main: true },
    { icon: Building2, title: "Your organization", text: "Optimal performance and customer satisfaction." },
  ],
  points: [
    "Not just connecting you: end-to-end solutions tailored to each client's needs",
    "One accountable partner instead of many disconnected vendors",
    "Dedicated 1st level support to keep performance and satisfaction high",
  ],
};

export const INDUSTRIES = [
  { id: "finance", icon: Landmark, title: "Banking, Finance & Insurance", text: "Payment connectivity and document automation for regulated, high-volume operations.", solutions: ["iot", "ai", "devices"] },
  { id: "retail", icon: Store, title: "Retail & Payments", text: "Connected EDC, soundbox and smart POS devices that keep transactions flowing.", solutions: ["iot", "devices"] },
  { id: "logistics", icon: Truck, title: "Logistics & Transportation", text: "Real-time fleet visibility, route control and safer driving across vehicles.", solutions: ["iot", "fleet", "ai", "devices"] },
  { id: "mining", icon: Pickaxe, title: "Mining & Construction", text: "Connectivity and telematics for heavy equipment and remote operations.", solutions: ["iot", "fleet", "devices"] },
  { id: "industry", icon: Factory, title: "Manufacturing & Industrial", text: "Industrial IoT, sensors and automation that turn operating data into action.", solutions: ["iot", "ai", "devices"] },
  { id: "energy", icon: PlugZap, title: "Energy & Infrastructure", text: "Monitoring for utilities, SPKLU and charging infrastructure.", solutions: ["iot", "fleet", "devices"] },
  { id: "government", icon: Building2, title: "Government & Public Sector", text: "Fleets, infrastructure projects and enterprise operations with dependable support.", solutions: ["iot", "fleet", "ai"] },
];

export const ECOSYSTEM = {
  eyebrow: "OUR ECOSYSTEM",
  title: "Platforms and partners behind our solutions",
  items: [
    { name: "ED&T Connect", logo: "/brand/edt-connect.png", role: "Point-of-Sale Connectivity", to: "/solutions/iot" },
    { name: "N-Link", logo: "/brand/nlink.png", role: "Point-of-Operation Connectivity", to: "/solutions/iot" },
    { name: "Fleet BI", logo: "/brand/fleet-bi.png", role: "Fleet Intelligence", to: "/solutions/fleet" },
    { name: "MinteLix", logo: "/brand/mintelix.png", role: "AI & Automation · Custom Software", to: "/solutions/ai" },
  ],
  collaborations: [
    { name: "NOVA", logo: "/brand/partners/nova.png", role: "Connectivity collaboration" },
    { name: "Multi Entity", logo: "/brand/partners/multi-entity.png", role: "Fleet collaboration" },
    { name: "GAS", logo: "/brand/partners/gas.png", role: "Fleet collaboration" },
  ],
};

export const STACK = {
  eyebrow: "HOW IT FITS TOGETHER",
  title: "One connected stack, from device to decision",
  text: "Each solution stands on its own, and together they form one end-to-end flow of data.",
  layers: [
    { id: "devices", icon: Smartphone, tone: "slate", title: "Smart Devices", tag: "At the edge", text: "EDC and soundbox terminals, GPS trackers, AI dashcams, IoT gateways and sensors collect the data.", to: "/solutions/devices" },
    { id: "iot", icon: Radio, tone: "blue", title: "IoT Connectivity", tag: "Always connected", text: "Multi-network M2M SIMs with usage monitoring carry it securely: ED&T Connect for payments, N-Link for operations.", to: "/solutions/iot" },
    { id: "platform", icon: Layers, tone: "green", title: "Platforms", tag: "Intelligence", text: "Fleet BI and MinteLix turn raw signals and documents into dashboards, workflows and insights.", to: "/solutions/fleet" },
    { id: "outcome", icon: Target, tone: "navy", title: "Business outcomes", tag: "Impact", text: "Real-time visibility and control, higher efficiency and better decisions.", to: "/solutions/ai" },
  ],
};

export const COMPARE = {
  eyebrow: "COMPARE SOLUTIONS",
  title: "Find the right starting point",
  columns: ["Solution", "What it does", "Delivered with", "Typical users"],
  rows: [
    { id: "iot", title: "IoT Connectivity", does: "Reliable M2M connectivity for payment terminals and operational devices.", with: "ED&T Connect · N-Link · in collaboration with NOVA", users: "Banks, merchants, fleet operators, utilities" },
    { id: "fleet", title: "Fleet Intelligence", does: "Real-time visibility, monitoring and analytics for fleet operations.", with: "Fleet BI · with Multi Entity & GAS", users: "Transportation, logistics, mining, government fleets" },
    { id: "ai", title: "AI & Automation", does: "Document intelligence, workflow automation and custom software.", with: "MinteLix", users: "Finance, insurance, banking, manufacturing" },
    { id: "devices", title: "Smart Devices", does: "Payment, telematics and industrial hardware, integrated with the stack.", with: "EDC, GPS, dashcam, gateway and sensors", users: "Retail, fleets, industrial and energy sites" },
  ],
};

/* ───────── Photos / product shots (public/brand/visuals) ─────────
   Cropped from the client's approved design mockups; swap for original photography when available. */
export const PHOTOS = {
  dashboard: { src: "/brand/visuals/hero-dashboard.jpg", w: 635, h: 455, alt: "JSU platform dashboard showing SIM cards, transactions and fleet status", caption: "One dashboard for devices, data and fleets" },
  simRouter: { src: "/brand/visuals/hero-sim-router.jpg", w: 305, h: 153, alt: "Multi-network M2M SIM cards and an industrial IoT router", caption: "M2M SIMs and IoT routers" },
  payment: { src: "/brand/visuals/hero-payment.jpg", w: 285, h: 207, alt: "Smart POS terminal and payment soundbox", caption: "POS terminals and soundbox" },
  fleetSpklu: { src: "/brand/visuals/hero-fleet-spklu.jpg", w: 460, h: 215, alt: "Logistics trucks and electric vehicles at an SPKLU charging station", caption: "Fleets and charging infrastructure" },
  fleetProduct: { src: "/brand/visuals/fleet-product.jpg", w: 338, h: 254, alt: "Fleet BI dashboard with mobile app, AI dashcam and GPS tracker", caption: "Fleet BI with AI dashcam and GPS tracker" },
  devicesBanner: { src: "/brand/visuals/devices-banner.jpg", w: 650, h: 328, alt: "Smart devices: GPS tracker, AI dashcam, smart POS, soundbox, fuel sensor and IoT gateway with a truck and a bus", caption: "Connected hardware for real-world operations" },
  devicesPayment: { src: "/brand/visuals/devices-payment.jpg", w: 240, h: 215, alt: "Smart POS device and EDC soundbox", caption: "Payment devices" },
  devicesFleet: { src: "/brand/visuals/devices-fleet.jpg", w: 215, h: 130, alt: "GPS tracker and AI dashcam", caption: "Fleet & telematics" },
  devicesIot: { src: "/brand/visuals/devices-iot.jpg", w: 230, h: 115, alt: "Fuel sensor and IoT gateway", caption: "IoT & industrial" },
};

// photos shown in the modal and on the page for each solution / product
export const SOLUTION_PHOTOS = {
  edt: ["payment", "simRouter"],
  nlink: ["simRouter", "fleetSpklu"],
  fleet: ["fleetProduct", "fleetSpklu"],
  ai: ["dashboard"],
  devices: ["devicesBanner"],
  iot: ["simRouter", "payment", "fleetSpklu"],
};
// photo for each device group (by group title)
export const DEVICE_GROUP_PHOTO = { "Payment Devices": "devicesPayment", "Fleet & Telematics": "devicesFleet", "IoT & Industrial": "devicesIot" };
