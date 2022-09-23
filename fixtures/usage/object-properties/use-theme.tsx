import { css } from '@emotion/css';
import React, { FC } from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2 } from '@grafana/ui';

const MyComponent: FC = () => {
  const styles = useStyles2(getStyles);

  // Use styles with classNames
  return <div className={styles.styleA}>...</div>;
};

const getStyles = (theme: GrafanaTheme2) => ({
  styleA: css`
    padding: theme.spacing(3);
    ${theme.breakpoints.up('md')} {
      display: flex;
    }
  `,
});

export default MyComponent;
