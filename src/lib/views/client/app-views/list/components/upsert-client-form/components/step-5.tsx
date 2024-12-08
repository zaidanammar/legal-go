import { Button, Flex, message, Row, Typography } from 'antd';

import { UploadInput } from '@/lib/components/data-entry/upload-input';
import { imageFileTypes } from '@/lib/constants/data/fileTypes';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type SubmitUpsertCaseRequest } from '@/lib/services/api/case-services/upsert/types';
import { convertUploadInputValuesToDocRefs } from '@/lib/utils/input/conversion/convert-upload-input-values-to-doc-refs';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep5 = () => {
  const {
    form,
    setCurrentStep,
    caseDetailData,
    submitUpsertCase,
    selectedCaseID,
    isLoadingSubmitUpsertCase,
  } = useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep5 = async () => {
    const formValues = await form.validateFields();
    const attachments = await convertUploadInputValuesToDocRefs({
      inputValues: formValues.attachments ? formValues.attachments : [],
      storedDocRefs: caseDetailData?.files,
    });

    const payload: Partial<SubmitUpsertCaseRequest> = {
      attachments,
      case: {
        case_id: selectedCaseID ?? '',
      },
    };

    await submitUpsertCase(payload);
    setCurrentStep(5);
    message.success('Berhasil menyimpan data');
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Lampiran
      </Typography.Title>
      <Row gutter={24}>
        <UploadInput
          inputWrapper={{
            form,
            label: 'Dokumen',
            fullWidth: true,
            name: 'attachments',
            rules: [{ required: true }],
          }}
          uploadProps={{
            accept: imageFileTypes.join(','),
          }}
          multiple
          triggerLabel="Upload Dokumen"
        />
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button
          type="primary"
          onClick={handleSubmitFormStep5}
          loading={isLoadingSubmitUpsertCase}
        >
          Simpan Data
        </Button>
      </Flex>
    </>
  );
};
