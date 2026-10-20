export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const navigation: {
  primary: NavLink[];
  secondary: NavLink[];
  footer: FooterColumn[];
} = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/our-work" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  secondary: [{ label: "Client Portal", href: "/client" }],
  footer: [
    {
      title: "Practice",
      links: [
        { label: "Web development", href: "/webdevelopment" },
        { label: "Digital marketing", href: "/digitalmarketing" },
        { label: "SEO", href: "/seo" },
        { label: "E-commerce", href: "/ecommerce-website-development" },
        { label: "Brand", href: "/services" },
      ],
    },
    {
      title: "Packages",
      links: [
        { label: "Personal website", href: "/personal-website-package" },
        { label: "Small business", href: "/small-business-package" },
        { label: "Moment apps", href: "/pop-up" },
        { label: "Enterprise", href: "/contact" },
      ],
    },
    {
      title: "Studio",
      links: [
        { label: "About", href: "/about" },
        { label: "Work", href: "/our-work" },
        { label: "Journal", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Clients", href: "/client" },
      ],
    },
  ],
};
