'use client';

import { InstallButton } from '@/components/install-button';
import { PushNotificationManager } from '@/components/push-notification';

export default function Page() {
  return (
    <>
      <span className="text-3xl font-medium">Test PWA</span>
      <InstallButton />
      <PushNotificationManager />
    </>
  );
}
