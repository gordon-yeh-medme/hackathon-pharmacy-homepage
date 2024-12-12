# Pharmacy Homepage PRD

Pharmacy homepage exists to inform users about the information they need to know about the pharmacy, like address, phone number, etc.

You will be using the following technologies: Next.js, Tailwind CSS, Shadcn UI, Lucid Icons

---

## Important Considerations

1. **Single Page Application:**
   - The page should be mobile-first, prioritizing usability and design on small screens while remaining responsive to larger screens.
2. **Accessibility:**
   - Ensure the page complies with WCAG 2.1 standards, including contrast ratios, keyboard navigation, and ARIA roles.
3. **Responsiveness:**
   - Design for varying screen sizes with a focus on ensuring the main content remains usable on mobile devices. Use industry best practices for breakpoints.
4. **Theming:**
   - Implement configurable colors and fonts to enable easy customization. Use Shadcn default for the theme and make the theme color easy to change.
5. **Content Source:**
   - All data required to render the page will be fetched from a single RESTful endpoint.

---

## Data Fetching Architecture

### Dynamic Content Management

- **Data Source:**

  - Content is stored in a public S3 bucket under the path: `pharmacy/{locationId}.json`
  - Each pharmacy website is identified by a unique `locationId`

- **Domain to Location Mapping:**

  - The `locationId` is determined by the website's domain name
  - Current domain mappings:
    ```json
    {
      "localhost:3000": "7bdb92eb-4580-4bd1-bec7-ff4f316e1f98",
      "hackathon-pharmacy-homepage.vercel.app": "7bdb92eb-4580-4bd1-bec7-ff4f316e1f98"
    }
    ```

- **Data Validation:**

  - Implement strict schema validation using Zod
  - Validate JSON structure immediately after fetching
  - Schema should match the expected data structure for all components
  - Invalid data should trigger appropriate error handling

- **Error Handling:**
  - Display a 404 page if:
    - Domain is not found in the mapping
    - JSON file is not found in S3
    - Content fails schema validation
  - Implement appropriate error boundaries for graceful failure handling

---

## Core Components

### Hero Banner

- **Description:** A prominent banner section at the top of the page that sets the tone for the website.
- **Content:**
  - A title/heading text
  - A call-to-action (CTA) button
  - Background color using the main theme color
- **Developer Alignment:**
  - Banner should span the full width of the page
  - Content should be constrained (e.g., max-w-7xl) and centered
  - Use the website's theme color for the background
  - Text should have sufficient contrast with the background color
  - Ensure the CTA button is accessible via keyboard
  - Responsive text sizing for different screen sizes
  - Example input:
    ```json
    {
      "text": "Get your flu shot today!",
      "link": {
        "url": "/book-appointment",
        "text": "Book Now"
      }
    }
    ```

### Sticky Bottom Bar

- **Description:** A sticky component located at the bottom of the page on mobile view.
- **Content:**
  - Pharmacy's name.
  - A button labeled "Book Now ->" linking to the booking page.
- **Developer Alignment:**
  - Implement using Tailwind CSS for responsiveness and sticky positioning.
  - Ensure the button is accessible and keyboard-navigable.
  - The button link should open in the same tab.

### Pharmacy Info Section

- **Description:** Displays key pharmacy information.
- **Content:**
  - Address.
  - Phone number.
  - Fax number.
  - Email.
  - A Mapbox map showing the pharmacy's location.
  - Spoken languages.
  - is the pharmacy wheelchair accessible.
  - does the pharmacy accept walk-in patients.
- **Developer Alignment:**
  - Integrate Mapbox API with the API key stored in the `.env` file.
  - Ensure all displayed information is properly structured for screen readers.
  - The map should be interactive, allowing zooming and panning.
  - Use Mapbox GL JS for the map implementation.

### Pharmacy Hours Section

- **Description:** Displays hours of operation.
- **Content:**
  - Regular hours (Mon-Fri, Sat, Sun).
  - Holiday hours.
  - A button at the bottom labeled "Book an appointment," linking to the booking page.
- **Developer Alignment:**
  - Implement collapsible or tabbed views for mobile responsiveness if the hours list becomes long.
  - Ensure proper formatting of holiday hours for clarity.
  - "Holiday hours" should be input via the same RESTful endpoint.

### Service Highlights Section

- **Description:** Displays 4 cards with an image, title, and description.
- **Content:**
  - Cards formatted in a carousel for mobile view (2 cards visible at a time).
  - Example input for each card:
    ```json
    {
      "image": "https://via.placeholder.com/150",
      "title": "Service 1",
      "description": "Service is offered from 9am to 5pm on weekdays, if you need to book an appointment, please click the link below.",
      "url": "https://www.google.com"
    }
    ```
- **Developer Alignment:**
  - Implement carousel functionality using a library or custom logic compatible with Next.js.
  - Ensure images are optimized and lazy-loaded for performance.
  - Carousel navigation (e.g., arrows or dots) is not required for the MVP.

### Pharmacy Services Section

- **Description:** Displays all services offered in a card format.
- **Content:**
  - Title of each service.
  - Responsive design with 2 cards per row on mobile, scaling up for desktop.
- **Developer Alignment:**
  - Ensure consistent card layout and spacing across screen sizes.
  - Use Tailwind CSS grid or flex utilities for responsiveness.
  - The list of services will be dynamically fetched from the RESTful endpoint.

### About Us Section

- **Description:** Showcases an image and the story of the pharmacy, including their team, mission, and values.
- **Content:**
  - A prominent image.
  - Text content describing the pharmacy.
- **Developer Alignment:**
  - Use semantic HTML5 elements for SEO and accessibility.
  - Optimize the image for performance and responsiveness.
  - This section should support only one image for the MVP.
  - The story text will be fetched from the RESTful endpoint.

### Pharmacist Team Section

- **Description:** Showcases the pharmacy's team of pharmacists with their photos and biographical information.
- **Content:**
  - Grid of pharmacist cards, each containing:
    ```json
    {
      "name": "Jane Smith",
      "description": "Lead Pharmacist",
      "photoUrl": "https://example.com/photo.jpg"
    }
    ```
  - Responsive layout showing 1 card per row on mobile, 2-3 cards per row on larger screens
- **Developer Alignment:**
  - Implement using Tailwind CSS grid for responsive layout
  - Photos should be optimized and lazy-loaded using Next.js Image component
  - Ensure proper alt text for accessibility
  - Cards should maintain consistent height within rows
  - Bio text should truncate after 3-4 lines with ellipsis
  - Photos should maintain consistent aspect ratio (e.g., 1:1 square)

### Footer Section

- **Description:** Displays the footer of the page.
- **Content:**
  - Links to social media platforms
  - a "powered by MedMe Health" label that links to https://www.medmehealth.com/
  - a "All rights reserved" label
  - a "Privacy Policy" link to https://www.medmehealth.com/privacy-policy
  - a "Support Agreement" link to https://www.medmehealth.com/support-agreement
  - a "SaaS Agreement" link to https://www.medmehealth.com/saas-agreement
- **Developer Alignment:**
  - Implement using Tailwind CSS for styling.
  - Ensure the footer is accessible and keyboard-navigable.

## Folder Structure

.
├── app
│ ├── components
│ │ ├── AnnouncementBanner.tsx # Announcement banner component
│ │ ├── StickyBottomBar.tsx # Sticky bottom bar component
│ │ ├── PharmacyInfo.tsx # Pharmacy info section
│ │ ├── PharmacyHours.tsx # Pharmacy hours section
│ │ ├── ServiceHighlights.tsx # Service highlights carousel
│ │ ├── PharmacyServices.tsx # Services list
│ │ ├── AboutUs.tsx # About us section
│ │ ├── HeroBanner.tsx # Hero banner section
│ │ ├── PharmacistTeam.tsx # New component for pharmacist team
│ │ └── index.ts # Barrel file to export components
│ ├── layout.tsx # Layout component
│ └── page.tsx # Main page (home)
├── public
│ ── images # Store any static images here (optional)
│ ├── favicon.ico # Favicon
│ └── manifest.json # PWA manifest (if needed)
├── styles
│ ├── globals.css # Global styles for Tailwind
│ └── tailwind.css # Tailwind base configuration
├── lib
│ ├── fetchData.ts # Utility for fetching data from REST API
│ └── index.ts # Barrel file for utilities
├── .env # Environment variables (e.g., Google Maps API key)
├── next-env.d.ts # TypeScript environment definitions
├── next.config.mjs # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── package.json # Dependencies and scripts
└── README.md # Project overview and setup instructions
