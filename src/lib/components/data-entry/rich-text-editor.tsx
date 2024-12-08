import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  Link,
  Heading,
  List,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import { InputItem, type InputItemProps } from './input-item';

type RichTextEditorProps<T = unknown> = InputItemProps<T> & {
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
};

export const RichTextEditor = <T = unknown,>({
  defaultValue,
  form,
  placeholder = 'Masukkan Deskripsi',
  ...inputItemProps
}: RichTextEditorProps<T>) => {
  return (
    <InputItem
      fullWidth
      form={form}
      {...inputItemProps}
      getValueFromEvent={(_, editor) => {
        return editor.getData();
      }}
    >
      <CKEditor
        editor={ClassicEditor}
        disabled={inputItemProps.disabled}
        config={{
          placeholder,
          toolbar: {
            items: [
              'undo',
              'redo',
              '|',
              'heading',
              '|',
              'bold',
              'italic',
              'link',
              '|',
              'bulletedList',
              'numberedList',
            ],
          },
          plugins: [
            Bold,
            Essentials,
            Italic,
            Mention,
            Paragraph,
            Undo,
            Link,
            Heading,
            List,
          ],
        }}
        data={defaultValue}
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
            const documentRoot = editor.editing.view.document.getRoot();
            if (documentRoot) {
              writer.setStyle('min-height', '200px', documentRoot);
            }
          });
        }}
      />
    </InputItem>
  );
};
