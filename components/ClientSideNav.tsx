'use client';

import dynamic from 'next/dynamic';

const SideNav = dynamic(() => import('./SideNav'), {
  ssr: false,
});

export default function ClientSideNav() {
  return <SideNav />;
}
