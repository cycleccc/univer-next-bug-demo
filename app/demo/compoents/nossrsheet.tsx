'use client';

import dynamic from 'next/dynamic';

const Sheet = dynamic(() => import('./sheet'), {
    ssr: false,
});

export function NoSSRSheet() {
    return <Sheet />;
}
