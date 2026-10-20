'use client';

import dynamic from 'next/dynamic';

const ClientLottie = dynamic(() => import('lottie-react'), { ssr: false });

export default ClientLottie;
