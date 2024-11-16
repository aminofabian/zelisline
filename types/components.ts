export interface ShuffleHeroProps {
  subTitle?: string;
  title?: string;
  bgImage?: string;
  buttons?: Array<{
    link: string;
    text: string;
  }>;
  description?: string;
  trustIndicators?: Array<{
    icon: any;
    text: string;
    color: string;
  }>;
  features?: Array<string>;
}
