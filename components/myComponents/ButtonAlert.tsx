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
  triggerText?: string;
  title: string;
  description?: string;
  descriptionComponent?: React.ReactNode;
  cancelText: string;
  continueText: string;
  customTrigger?: React.ReactNode;
}

const ButtonAlert: React.FC<ButtonAlertProps> = ({
  triggerText,
  title,
  description,
  descriptionComponent,
  cancelText,
  continueText,
  customTrigger,
}) => {
  return (
    <div className="font-normal text-lg">
      <AlertDialog>
        <AlertDialogTrigger>
          {customTrigger || triggerText}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>
              {descriptionComponent || description}
            </AlertDialogDescription>
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