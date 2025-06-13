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
} from './AlertDialog';

type BaseProps = {
  /** 다이얼로그 제목 */
  title: string;

  /** 다이얼로그 설명 */
  description?: string;

  /** 확인/취소 버튼 라벨 및 콜백 */
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

type ChildrenType = { children: React.ReactElement };
type TriggerType = { trigger: React.ReactElement };

type ConfirmDialogProps = OnlyOne<ChildrenType, TriggerType> & BaseProps;

export default function ConfirmAlertDialog({
  trigger,
  children,
  title,
  description,
  confirmLabel = '확인',
  cancelLabel = '취소',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const triggerNode = children ?? trigger;

  if (!isValidElement(triggerNode)) {
    console.warn('ConfirmDialog: 유효한 trigger 또는 children 이 필요합니다.');
    return null;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerNode}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-accent-foreground">{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-1">
          <AlertDialogCancel onClick={onCancel}>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>{confirmLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
