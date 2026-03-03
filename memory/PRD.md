# AIIF CSR Conclave 2026 - Landing Page PRD

## Original Problem Statement
Build a landing page for AIIF's CSR Conclave 2026 event - "Role of CSR in Curating Sustainable Communities Through Innovation" presented by AJK Innovation Incubator Foundation (AIIF). Date: 20th March 2026, Location: AIIF Navakkarai, Coimbatore. Professional & corporate tone with ethnic Indian look.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI + Framer Motion
- **Backend**: FastAPI (minimal - mostly static landing page)
- **Database**: MongoDB (available but not actively used for static content)
- **Design**: Maroon/Gold/Cream ethnic palette with Playfair Display + Manrope fonts

## User Personas
1. CSR Leaders & Corporates (₹2,999 tier)
2. NGOs & Institutions (₹2,499 tier)
3. Students & Researchers (₹499 tier)

## Core Requirements
- Event information display
- Pricing with UPI payment (deep links + QR codes)
- Google Forms registration
- FAQ section
- Contact information
- Social sharing
- Mobile responsive

## What's Been Implemented (Dec 2025)
- Hero section with AIIF logo, event poster in gold frame, countdown timer
- Vision section with Tamil quote, stats (250+ attendees, 20+ leaders)
- Pricing cards with UPI Pay buttons for 3 tiers
- QR Code payment section for desktop users
- Registration CTA linking to Google Forms
- FAQ accordion (7 questions)
- Contact footer with email, phone, website, location
- LinkedIn & Instagram social links in footer
- Floating social share button (WhatsApp, Twitter/X, LinkedIn, Facebook, Email)
- Sticky navbar with smooth scroll navigation
- Ethnic design with kolam patterns, gold accents, maroon theme

## UPI Payment Details
- UPI ID: ajk01@fbl
- Payee: AJK INNOVATION INCUBATOR FOUNDATION

## P0 (Done)
- All landing page sections
- UPI payment integration (deep links + QR)
- Social sharing
- Registration link

## P1 (Backlog)
- Event agenda/schedule section
- Speaker profiles
- Google Maps venue embed
- Testimonials from past events

## P2 (Future)
- Early-bird pricing logic
- Group booking discounts
- WhatsApp bot for inquiries
- Post-event gallery
