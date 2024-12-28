import { useRef, useState } from "react";
import { validate } from "./validate";
import { usePersistedState } from "./usePersistedState";
import { message } from "antd";
// import { debounce } from "utils/debounce";

interface AntdTextAreaElement extends HTMLTextAreaElement {
  resizableTextArea: { textArea: HTMLTextAreaElement }
}

export function useValidator() {
  const [value, setValue] = usePersistedState<string>('code', '');
  const [code, setCode] = useState<object | null>(null);
  const [error, setError] = useState<string>('');
  const textareaRef = useRef<AntdTextAreaElement>(null);

  function handleInput(val: string) {
    setError('');
    setCode(null);

    console.log(typeof val);

    const validatedValue = validate(val);
    if (!validatedValue && val) {
      setError('Bad JSON');
    }
    setValue(val);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Tab') {
      event.preventDefault();

      let currentValue = '';

      const { value, selectionStart, selectionEnd } = textareaRef.current!.resizableTextArea.textArea;

      if (event.shiftKey) {
        const beforeStart = value
          .substring(0, selectionStart)
          .split('')
          .reverse()
          .join('');
        const indexOfTab = beforeStart.indexOf('    ');
        const indexOfNewline = beforeStart.indexOf('\n');
    
        if (indexOfTab !== -1 && indexOfTab < indexOfNewline) {
          textareaRef.current!.resizableTextArea.textArea.value =
            beforeStart
              .substring(indexOfTab + 4)
              .split('')
              .reverse()
              .join('') +
            beforeStart
              .substring(0, indexOfTab)
              .split('')
              .reverse()
              .join('') +
            value.substring(selectionEnd);
    
          textareaRef.current!.resizableTextArea.textArea.selectionStart = selectionStart - 4;
          textareaRef.current!.resizableTextArea.textArea.selectionEnd = selectionEnd - 4;
        }
      } else {
        textareaRef.current!.resizableTextArea.textArea.value = value.substring(0, selectionStart) + '    ' + value.substring(selectionEnd);
        textareaRef.current!.resizableTextArea.textArea.selectionStart = selectionEnd + 4 - (selectionEnd - selectionStart);
        textareaRef.current!.resizableTextArea.textArea.selectionEnd = selectionEnd + 4 - (selectionEnd - selectionStart);
      }
      currentValue = textareaRef.current!.resizableTextArea.textArea.value;

      setValue(currentValue);
    }
  };

  function handleSubmit() {
    const validatedValue = validate(value);
    if (validatedValue) {
      console.log(validatedValue);
      setCode(validatedValue)
      message.success('Data parsed');
    } else {
      message.error('Invalid data');
    }
  }

  return {
    value,
    code,
    error,
    textareaRef,
    handleInput,
    handleKeyDown,
    handleSubmit,
  }
}
