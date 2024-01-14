import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BellDot } from 'lucide-react';

function AlertComponent() {
  return (
    <div>
    <Alert>
    <BellDot className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
    Your message was successful
    </AlertDescription>
    </Alert>
    </div>
    );
  }
  
  export default AlertComponent;
  