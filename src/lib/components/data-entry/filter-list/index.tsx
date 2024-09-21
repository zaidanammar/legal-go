import { FilterOutlined } from '@ant-design/icons';
import { Button, Flex, Form, Popover, Space, Modal } from 'antd';
import { createStyles } from 'antd-style';
import set from 'lodash/set';
import type React from 'react';
import { useMemo, useState } from 'react';

import {
  FilterGrid,
  type FilterGridProps,
} from '@/lib/components/data-entry/filter-grid';
import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';
import { useQueryParams } from '@/lib/hooks/use-query-params';

import { FilterTag, type InputParams } from './filter-tag';

const useStyles = createStyles({
  filterTrigger: {
    marginLeft: 'auto',
  },
  filterTagsContainer: { overflowX: 'auto' },
});

export type FilterListProps = {
  title?: string;
  extra?: React.ReactNode;
} & FilterGridProps;

export const FilterList = ({
  title = 'Filter',
  handleUpdateFilter,
  extra,
  ...props
}: FilterListProps) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { isMobile } = useBreakpointValue();
  const { styles } = useStyles();
  const { clearSearchParams, getSearchParamsValue } = useQueryParams();

  const { resetFields, setFieldsValue } = form;

  const closeModal = () => setOpen(false);

  const openModal = () => {
    const inputValues = {};
    props.inputs.forEach((item) => {
      if (!item) {
        return;
      }

      const { inputProps } = item;

      if (inputProps.inputType === 'dateRangePicker') {
        set(
          inputValues,
          inputProps.paramKey[0],
          getSearchParamsValue(inputProps.paramKey[0]) ?? ''
        );
        set(
          inputValues,
          inputProps.paramKey[1],
          getSearchParamsValue(inputProps.paramKey[1]) ?? ''
        );
        return;
      }

      set(
        inputValues,
        inputProps.paramKey,
        getSearchParamsValue(inputProps.paramKey) ?? ''
      );
    });

    resetFields();
    setFieldsValue(inputValues);
    setOpen(true);
  };

  const appliedFilter = useMemo(
    () =>
      props.inputs
        .map((item) => {
          const inputType = item.inputProps.inputType;
          const paramKey = item.inputProps.paramKey;

          if (paramKey instanceof Array) {
            return paramKey.map((key) => {
              if (!getSearchParamsValue(key)) {
                return {};
              }
              return {
                key,
                label: item.label,
                value: getSearchParamsValue(key),
              };
            });
          }

          if (!getSearchParamsValue(paramKey)) {
            return undefined;
          }

          if (inputType === 'select') {
            const options = item.inputProps.options;

            return {
              key: paramKey,
              value:
                options?.find(
                  (opts) =>
                    opts.value === getSearchParamsValue(String(paramKey))
                )?.label ?? '',
              label: item.label,
            };
          }

          return {
            key: paramKey,
            label: item.label,
            value: getSearchParamsValue(paramKey),
          };
        })
        .filter((item) => {
          if (item instanceof Array) {
            return item.every((value) => !!Object.entries(value ?? {}).length);
          }
          return !!item;
        }),
    [getSearchParamsValue, props.inputs]
  );

  const firstThreeInputs = appliedFilter.slice(0, 3);
  const restInputs = appliedFilter.slice(3);

  const handleCloseTag = (paramKey: string | Array<string>) => {
    if (paramKey instanceof Array) {
      handleUpdateFilter({ [paramKey[0]]: '', [paramKey[1]]: '' });
      return;
    }
    handleUpdateFilter({ [paramKey]: '' });
  };

  const handleClear = () => {
    resetFields();
    clearSearchParams();
    closeModal();
  };

  return (
    <>
      <Flex justify="space-between" align="center" gap={12} vertical={isMobile}>
        <Flex
          wrap="wrap"
          align="center"
          className={styles.filterTagsContainer}
          gap={4}
        >
          {firstThreeInputs.map((input) => (
            <FilterTag
              input={input as InputParams}
              key={
                input instanceof Array
                  ? input.map((element) => element.key ?? '').join('-')
                  : (input?.key ?? '')
              }
              onClose={handleCloseTag}
            />
          ))}
          {restInputs.length > 0 && (
            <Popover
              placement="right"
              content={
                <Space direction="vertical">
                  {restInputs.map((input) => (
                    <FilterTag
                      input={input as InputParams}
                      key={
                        input instanceof Array
                          ? input.map((element) => element.key ?? '').join('-')
                          : (input?.key ?? '')
                      }
                      onClose={handleCloseTag}
                    />
                  ))}
                </Space>
              }
              trigger="click"
            >
              <Button type="link">Lihat Semua Filter</Button>
            </Popover>
          )}
        </Flex>

        <Flex gap={16} justify="end" flex={1}>
          <Button
            size="small"
            className={styles.filterTrigger}
            icon={<FilterOutlined />}
            onClick={openModal}
          >
            Filter
          </Button>
          {extra}
        </Flex>
      </Flex>

      <Modal
        open={open}
        title={title}
        centered
        onCancel={closeModal}
        width={isMobile ? '100vw' : '80vw'}
        footer={
          <Flex justify="end" gap={12}>
            <Button onClick={handleClear}>Reset</Button>
            <Button type="primary" onClick={closeModal}>
              Terapkan
            </Button>
          </Flex>
        }
      >
        <Form form={form} layout="vertical">
          <FilterGrid
            {...props}
            inputs={props.inputs.map((item) => ({
              ...item,
              name: item.inputProps.paramKey,
            }))}
            handleUpdateFilter={handleUpdateFilter}
          />
        </Form>
      </Modal>
    </>
  );
};
