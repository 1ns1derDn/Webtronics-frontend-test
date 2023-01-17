import cn from 'classnames';
import { forwardRef, ForwardRefRenderFunction, HTMLProps, useId } from 'react';
import styles from './InputText.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  error?: string;
}

const InputText: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { id, className, error, disabled, ...props },
  ref
) => {
  const uniqueId = useId();
  const inputId = id || uniqueId;

  return (
    <div className={className}>
      <div
        className={cn(
          styles.inputText,
          error && styles.error,
          disabled && styles.disabled
        )}
      >
        <input id={inputId} ref={ref} disabled={disabled} {...props} />
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default forwardRef(InputText);
