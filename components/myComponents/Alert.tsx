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
    You can add components and dependencies to your app using the cli.     You can add components and dependencies to your app using the cli.
    You can add components and dependencies to your app using the cli.
    You can add components and dependencies to your app using the cli.
    You can add components and dependencies to your app using the cli.
    
    </AlertDescription>
    </Alert>
    </div>
    );
  }
  
  export default AlertComponent;
  