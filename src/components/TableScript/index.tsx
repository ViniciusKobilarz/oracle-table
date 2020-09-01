import React, { FC, useCallback } from 'react';

import { ListItemText, ListItem } from '@material-ui/core';
import copy from 'copy-to-clipboard';

interface TableScriptParams {
  title: string;
  generateCode(): string;
}

const TableScript: FC<TableScriptParams> = ({ generateCode, title }) => {
  const handleTableClick = useCallback(() => {
    const code = generateCode();

    copy(code);
  }, [generateCode]);

  return (
    <ListItem button>
      <ListItemText primary={title} onClick={handleTableClick} />
    </ListItem>
  );
};

export default TableScript;
