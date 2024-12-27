import { renderHook } from "@testing-library/react";
import { useValidator } from "./useValidator";

describe('useValidator', () => {

  test('should return the initial values for value, code, error and event handlers', () => {
    const { result } = renderHook(() => useValidator());
    const { value, code, error, textareaRef, handleInput, handleKeyDown, handleSubmit } = result.current;

    expect(value).toBe('');
    expect(code).toBeNull();
    expect(error).toBe('');
    expect(textareaRef).toEqual({ current: null });
    expect(handleInput).toBeDefined();
    expect(handleKeyDown).toBeDefined();
    expect(handleSubmit).toBeDefined();
  });
});
