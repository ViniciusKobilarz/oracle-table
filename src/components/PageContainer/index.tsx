import React, { FC } from 'react';

import useStyles from './styles';

const PageContainer: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default PageContainer;
