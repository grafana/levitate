import { css } from '@emotion/css';
import React, { FC } from 'react';

import { GrafanaTheme2, DataFrameType } from '@grafana/data';
import { useStyles2, AsyncSelectProps } from '@grafana/ui';

const MyComponent: FC = ({ randomParam }: { randomParam: AsyncSelectProps<Number>['invalid'] }) => {
  const styles = useStyles2(getStyles);

  if (randomParam) {
    console.log('Test fixture');
  }

  // Use styles with classNames
  return (
    <div className={styles.styleA} id={DataFrameType.TimeSeriesLong}>
      ...
    </div>
  );
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
