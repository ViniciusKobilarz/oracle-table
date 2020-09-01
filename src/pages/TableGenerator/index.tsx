import React, { FC, useState } from 'react';

import { Grid, List } from '@material-ui/core';

import PageContainer from '../../components/PageContainer';
import TableForm from '../../components/TableForm';
import TableScript from '../../components/TableScript';
import generateTableCode from '../../utils/generateTableCode';
import generateSequenceCode from '../../utils/generateSequenceCode';
import generateTriggerCode from '../../utils/generateTriggerCode';
import generateFkcCode from '../../utils/generateFkcCode';
import generateViewCode from '../../utils/generateViewCode';

import useStyles from './styles';

const TableGenerator: FC = () => {
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [abbreviation, setAbbreviation] = useState('');
  const [initial, setInitial] = useState('');

  const classes = useStyles();

  return (
    <PageContainer>
      <h1>Gerador de Tabelas</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item className={classes.fullWidth}>
          <TableForm
            owner={owner}
            setOwner={setOwner}
            name={name}
            setName={setName}
            abbreviation={abbreviation}
            setAbbreviation={setAbbreviation}
            initial={initial}
            setInitial={setInitial}
          />
        </Grid>
        <Grid item className={classes.fullWidth}>
          <List>
            {name && owner && abbreviation && (
              <TableScript
                title={`1_table.${owner}.${name}.sql`}
                generateCode={() =>
                  generateTableCode({ abbreviation, owner, name })
                }
              />
            )}
            {owner && abbreviation && name && (
              <TableScript
                title={`2_sequence.${owner}.${name}.sql`}
                generateCode={() =>
                  generateSequenceCode({ abbreviation, owner })
                }
              />
            )}
            {owner && abbreviation && name && (
              <TableScript
                title={`3_triggers.${owner}.${name}.sql`}
                generateCode={() =>
                  generateTriggerCode({ abbreviation, owner, name })
                }
              />
            )}
            {owner && abbreviation && name && (
              <TableScript
                title={`4_fkcs.${owner}.${name}.sql`}
                generateCode={() =>
                  generateFkcCode({ abbreviation, owner, name })
                }
              />
            )}
            {initial && owner && name && (
              <TableScript
                title={`${owner}.v$${name}.sql`}
                generateCode={() => generateViewCode({ initial, owner, name })}
              />
            )}
          </List>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TableGenerator;
