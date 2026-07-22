import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type SourceInfoProps = {
  sourceUrl: string;
  sourceLabel?: string;
  version: string;
  status: '번역 예정' | '초안' | '검토 중' | '검토 완료' | '선별 중';
  reviewedAt?: string;
  children?: ReactNode;
};

function getStatusClass(status: SourceInfoProps['status']) {
  if (status === '검토 완료') {
    return styles.reviewed;
  }

  if (status === '번역 예정' || status === '선별 중') {
    return styles.planned;
  }

  return styles.draft;
}

export default function SourceInfo({
  sourceUrl,
  sourceLabel = '공식 문서',
  version,
  status,
  reviewedAt,
  children,
}: SourceInfoProps) {
  return (
    <aside className={styles.card} aria-label="원문 및 번역 상태">
      <div className={styles.item}>
        <span className={styles.label}>공식 문서</span>
        <a href={sourceUrl} target="_blank" rel="noreferrer">
          {sourceLabel} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>기준 버전</span>
        <strong>{version}</strong>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>번역 상태</span>
        <span className={clsx(styles.status, getStatusClass(status))}>{status}</span>
        {reviewedAt && <small>최근 검토: {reviewedAt}</small>}
      </div>
      {children && <div className={styles.detail}>{children}</div>}
    </aside>
  );
}
