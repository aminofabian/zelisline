import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

interface EmailProps {
  url: string;
}

export function Email(props: EmailProps) {
  const { url } = props;
  
  return (
    <Html lang="en" dir="ltr">
    <Button href="https://example.com" style={{ color: "#61dafb" }}>
    Click me
    </Button>
    </Html>
    );
  }
  