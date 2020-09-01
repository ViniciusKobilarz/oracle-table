import React, { FC } from 'react';

import useStyles from './styles';

interface TableScriptProps {
  title: string;
  code: string;
}

const TableScript: FC<TableScriptProps> = ({ title, code }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>{title}</h3>
      </div>
      <div className={classes.content}>
        <code>
          <pre>{code}</pre>
        </code>
      </div>
    </div>
  );
};

export default TableScript;
