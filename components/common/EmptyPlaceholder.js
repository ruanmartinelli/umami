import React from 'react';
import Icon from 'components/common/Icon';
import Logo from 'assets/logo.svg';
import styles from './EmptyPlaceholder.module.css';

export default function EmptyPlaceholder({ msg, children }) {
  return (
    <div className={styles.placeholder}>
      <Icon className={styles.icon} icon={<Logo />} size="xlarge" />
      <h2>{msg}</h2>
      {children}
    </div>
  );
}
