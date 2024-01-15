import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ButtonAlertProps {
  triggerText: string;
  title: string;
  descriptionComponent: string | React.ReactNode;
  cancelText: string;
  continueText: string;
}

const ButtonAlert: React.FC<ButtonAlertProps> = ({
  triggerText,
  title,
  descriptionComponent,
  cancelText,
  continueText,
}) => {
  return (
    <div className="font-normal text-lg">
    <AlertDialog>
    <AlertDialogTrigger>{triggerText}</AlertDialogTrigger>
    <AlertDialogContent>
    <AlertDialogHeader>
    <AlertDialogTitle>{title}</AlertDialogTitle>
    <AlertDialogDescription>{descriptionComponent}</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
    <AlertDialogCancel>{cancelText}</AlertDialogCancel>
    <AlertDialogAction>{continueText}</AlertDialogAction>
    </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
    </div>
    );
  };
  
  export default ButtonAlert;
  