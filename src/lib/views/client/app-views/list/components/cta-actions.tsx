import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';

import { clientPath } from '@/lib/constants/routes';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type ClientListPageViewModel } from '@/lib/views/client/app-views/list/hooks';

type UpsertClientCTAActionProps = {
  clientID: string;
  caseID: string;
  submissionStatus: string;
};

export const UpsertClientCTAAction = ({
  clientID,
  caseID,
  submissionStatus,
}: UpsertClientCTAActionProps) => {
  const { handleOpenModal } = useViewModelContext<ClientListPageViewModel>();

  return (
    <Flex vertical gap={12} justify="center">
      {submissionStatus === 'Draft' && (
        <Button
          type="link"
          size="small"
          onClick={() => handleOpenModal(caseID)}
        >
          Lanjutkan Draft
        </Button>
      )}
      <Flex gap={12}>
        <Button type="primary" ghost size="small">
          <Link to={`${clientPath}/view/${clientID}`}>Appointment</Link>
        </Button>
        <Button type="primary" size="small">
          <Link to={`${clientPath}/view/${clientID}`}>Lihat Detail</Link>
        </Button>
      </Flex>
    </Flex>
  );
};
