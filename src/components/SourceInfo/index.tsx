import type {ReactNode} from 'react';
import DocumentStatus, {type DocumentStatusValue} from '../DocumentStatus';
import styles from './styles.module.css';

type SourceInfoProps = {
  sourceUrl: string;
  sourceLabel?: string;
  documentType: '공식 문서 번역' | '공식 문서 기반 해설' | '개인 학습 정리';
  version: string;
  status: DocumentStatusValue;
  reviewedAt?: string;
  children?: ReactNode;
};

export default function SourceInfo({
  sourceUrl,
  sourceLabel = '참고 자료',
  documentType,
  version,
  status,
  reviewedAt,
  children,
}: SourceInfoProps) {
  return (
    <aside className={styles.card} aria-label="출처 및 문서 상태">
      <div className={styles.item}>
        <span className={styles.label}>출처</span>
        <a href={sourceUrl} target="_blank" rel="noreferrer">
          {sourceLabel} <span aria-hidden="true">↗</span>
        </a>
        <small>{documentType}</small>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>기준 버전</span>
        <strong>{version}</strong>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>문서 상태</span>
        <DocumentStatus status={status} />
        {reviewedAt && <small>최근 검토: {reviewedAt}</small>}
      </div>
      {children && <div className={styles.detail}>{children}</div>}
    </aside>
  );
}
