import { UpsertClientFormStep1 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-1';
import { UpsertClientFormStep2 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-2';
import { UpsertClientFormStep3 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-3';
import { UpsertClientFormStep4 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-4';
// import { UpsertClientFormStep5 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-5';
// import { UpsertClientFormStep6 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-6';
// import { UpsertClientFormStep7 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-7';
import { UpsertClientFormStep8 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-8';

export const CASE_FORM_STEPS = [
  {
    title: 'Data Klien',
    content: <UpsertClientFormStep1 />,
  },
  {
    title: 'Data Kasus',
    content: <UpsertClientFormStep2 />,
  },
  {
    title: 'Summary Kasus',
    content: <UpsertClientFormStep3 />,
  },
  {
    title: 'Strategi & Formasi',
    content: <UpsertClientFormStep4 />,
  },
  // {
  //   title: 'Lampiran',
  //   content: <UpsertClientFormStep5 />,
  // },
  // {
  //   title: 'Proposal',
  //   content: <UpsertClientFormStep6 />,
  // },
  // {
  //   title: 'Signature',
  //   content: <UpsertClientFormStep7 />,
  // },
  {
    title: 'Invoice',
    content: <UpsertClientFormStep8 />,
  },
];
