import React, { FC } from 'react';

import { TextField, Grid } from '@material-ui/core';

interface TableFormProps {
  owner: string;
  name: string;
  abbreviation: string;
  initial: string;

  setOwner(value: string): void;
  setName(value: string): void;
  setAbbreviation(value: string): void;
  setInitial(value: string): void;
}

const TableForm: FC<TableFormProps> = ({
  owner,
  name,
  abbreviation,
  initial,
  setOwner,
  setName,
  setAbbreviation,
  setInitial,
}) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          label="Owner"
          fullWidth
          value={owner}
          onChange={e => setOwner(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Nome"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Abreviação"
          fullWidth
          value={abbreviation}
          onChange={e => setAbbreviation(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Iniciais"
          fullWidth
          value={initial}
          onChange={e => setInitial(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default TableForm;
