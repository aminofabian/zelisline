import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected websites, storefronts and software products built by Zelisline, a software studio in Nairobi, Kenya.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
