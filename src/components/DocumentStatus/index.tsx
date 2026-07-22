import clsx from 'clsx';
import styles from './styles.module.css';

export type DocumentStatusValue = '작성 전' | '작성 중' | '작성 완료';

type DocumentStatusProps = {
  status: DocumentStatusValue;
};

function getStatusClass(status: DocumentStatusValue) {
  if (status === '작성 완료') {
    return styles.completed;
  }

  if (status === '작성 중') {
    return styles.writing;
  }

  return styles.planned;
}

export default function DocumentStatus({status}: DocumentStatusProps) {
  return <span className={clsx(styles.status, getStatusClass(status))}>{status}</span>;
}
