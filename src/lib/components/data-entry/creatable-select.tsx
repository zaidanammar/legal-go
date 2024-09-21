import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Divider,
  Input,
  type InputRef,
  Select,
  type SelectProps,
  Space,
} from 'antd';
import { type DefaultOptionType } from 'antd/lib/select';
import React, { useRef } from 'react';

export const CreatableSelect = ({ ...props }: SelectProps) => {
  const inputRef = useRef<InputRef>(null);
  const [inputValue, setInputValue] = React.useState<string>('');

  const [addedOptions, setAddedOptions] = React.useState<
    Array<DefaultOptionType>
  >([]);

  const options = React.useMemo(() => {
    return [
      ...(props.options?.map((option) => ({
        label: option.label,
        value: option.value,
      })) || []),
      ...addedOptions,
    ];
  }, [addedOptions, props.options]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const addItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (inputValue) {
      setAddedOptions((prev) => [
        ...prev,
        { label: inputValue, value: inputValue },
      ]);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <Select
      {...props}
      options={options}
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Space style={{ padding: '0 8px 4px' }}>
            <Input
              placeholder="Add new item here"
              ref={inputRef}
              value={inputValue}
              onChange={onChangeInput}
            />
            <Button
              disabled={
                !!options?.find((option) => option.value === inputValue)
              }
              type="text"
              icon={<PlusOutlined />}
              onClick={addItem}
            >
              Add item
            </Button>
          </Space>
        </>
      )}
    />
  );
};
