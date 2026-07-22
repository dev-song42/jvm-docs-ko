import type {PropsWithChildren} from 'react';
import styles from './styles.module.css';

export default function TranslatorNote({children}: PropsWithChildren) {
  return (
    <aside className={styles.note} aria-label="번역자 노트">
      <div className={styles.title}>
        <span aria-hidden="true">✎</span> 번역자 노트
      </div>
      <div className={styles.content}>{children}</div>
    </aside>
  );
}
