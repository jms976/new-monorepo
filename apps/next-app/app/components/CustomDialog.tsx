import { isValidElement } from 'react';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@common/ui';

type BaseProps = {
  cardData: string;
  /** 확인/취소 버튼 라벨 및 콜백 */
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

type ChildrenType = { children: React.ReactElement };
type TriggerType = { trigger: React.ReactElement };

type CustomDialogProps = OnlyOne<ChildrenType, TriggerType> & BaseProps;

export default function CustomDialog({
  trigger,
  children,
  cardData,
  confirmLabel = '확인',
  cancelLabel = '취소',
  onConfirm,
  onCancel,
}: CustomDialogProps) {
  const triggerNode = children ?? trigger;

  if (!isValidElement(triggerNode)) {
    return null;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerNode}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-accent-foreground">커스텀</AlertDialogTitle>
          <AlertDialogDescription>custom discription</AlertDialogDescription>
        </AlertDialogHeader>
        <Card>
          <CardHeader>
            <CardTitle>{cardData}</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <AlertDialogFooter className="flex gap-1">
          <AlertDialogCancel onClick={onCancel}>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>{confirmLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
