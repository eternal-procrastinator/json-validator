import { FC } from "react";
import { Button, Flex, Form, Input } from "antd";
import { useValidator } from "./useValidator";

export const Validator: FC = () => {
  const { value, error, textareaRef, handleInput, handleKeyDown, handleSubmit } = useValidator();
  
  return (
    <section className="validator-section">
      <Form>
        <Flex vertical align="center">
          <Flex justify="flex-start" style={{ width: '100%', marginBottom: '24px' }}>
            <label htmlFor="validator" style={{ fontSize: '24px', fontWeight: 'bold' }}>JSON Data</label>
          </Flex>

          <Input.TextArea
            id="validator"
            name="validator"
            rows={12}
            style={{ maxHeight: '400px' }}
            ref={textareaRef}
            value={value}
            onChange={(e) => handleInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          >
          </Input.TextArea>

          {error ? (
            <h3 style={{ marginTop: '24px', marginBottom: 0, color: 'red' }}>{error}</h3>
          ) : (
            <h3 style={{ marginTop: '24px', marginBottom: 0 }}>Valid JSON!</h3>
          )}
        </Flex>

        <Button style={{ marginTop: '24px', paddingInline: '48px' }} disabled={!value} onClick={handleSubmit}>Parse</Button>
      </Form>
    </section>
  )
}
