import { Modal } from 'antd';

import { showConfirmationModal } from '@/lib/components/data-entry/confirmation-modal';

export const useHomePage = () => {
  const detailItems = [
    {
      key: '1',
      label: 'Detail Item 1',
      children: 'Detail content 1',
      show: true,
    },
    {
      key: '2',
      label: 'Detail Item 2',
      children: 'Detail content 2',
      show: true,
    },
    {
      key: '3',
      label: 'Detail Item 3',
      children: 'Detail content 3',
      show: true,
    },
  ];

  const confirmSucces = () => {
    showConfirmationModal({
      title: 'Revisi Pinjaman',
      description:
        'Apakah anda yakin akan mengkonfirmasi revisi pinjaman ini ?',
      onOk: () => {
        Modal.destroyAll();
      },
    });
  };

  const confirmRejected = () => {
    showConfirmationModal({
      title: 'Revisi Pinjaman',
      description: 'Apakah anda yakin akan menolak revisi pinjaman ini ?',
      okText: 'Revisi',
      onOk: () => {
        Modal.destroyAll();
      },
      danger: true,
    });
  };

  const summaryItems = [
    {
      key: '1',
      label: 'Summary Item 1',
      children: 'Summary content 1',
      show: true,
    },
    {
      key: '2',
      label: 'Summary Item 2',
      children: 'Summary content 2',
      show: true,
    },
  ];

  return {
    detailItems,
    confirmSucces,
    confirmRejected,
    summaryItems,
  };
};
