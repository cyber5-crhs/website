import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Red(props: Props) {
  return <span style={{ color: 'var(--color-accent)' }}>{props.children}</span>;
}

export function RedUnderline(props: Props) {
  return (
    <u style={{ textDecorationColor: 'var(--color-accent)' }}>
      {props.children}
    </u>
  );
}

export function RedTextUnderline(props: Props) {
  return (
    <u
      style={{
        color: 'var(--color-accent)',
        textDecorationColor: 'var(--color-accent)',
      }}
    >
      {props.children}
    </u>
  );
}
