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
      title: "Services",
      links: [
        { label: "Web Development", href: "/webdevelopment" },
        { label: "Digital Marketing", href: "/digitalmarketing" },
        { label: "SEO Services", href: "/seo" },
        { label: "E-commerce", href: "/ecommerce-website-development" },
        { label: "Brand & Design", href: "/services" },
      ],
    },
    {
      title: "Packages",
      links: [
        { label: "Personal Website", href: "/personal-website-package" },
        { label: "Small Business", href: "/small-business-package" },
        { label: "Moment Apps", href: "/pop-up" },
        { label: "Enterprise / Custom", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Our Work", href: "/our-work" },
        { label: "Journal", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Client Portal", href: "/client" },
      ],
    },
  ],
};
