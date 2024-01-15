import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BellDot } from 'lucide-react';

function AlertComponent() {
  return (
    <div className="justify-center items-center">
    <Alert>
    <BellDot className="h-4 w-4" />
    <AlertTitle>
    Your message has been successfully delivered to our email box.
    </AlertTitle>
    <AlertDescription>
    Your message has been successfully delivered to our email box. 
    </AlertDescription>
    </Alert>
    </div>
    );
  }
  
  export default AlertComponent;
  