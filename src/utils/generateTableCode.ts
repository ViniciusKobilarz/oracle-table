interface Params {
  owner: string;
  name: string;
  abbreviation: string;
}

export default function generateTableCode({
  owner,
  name,
  abbreviation,
}: Params) {
  return `begin
  execute immediate 'create table owner.nome_tabela (
                       cod_gestao     integer not null,
                       nome_tabela_id integer not null,
                       user_insert    varchar2(30) default user not null,
                       date_insert    date default sysdate not null,
                       user_update    varchar2(30) default user not null,
                       date_update    date default sysdate not null
                     )';
exception
  when others then
     if sqlcode not in (-955) then
        raise;
     end if;
end;

/
/
-- comments
comment on column owner.nome_tabela.cod_gestao
 is 'código gestão do kss';
comment on column owner.nome_tabela.nome_tabela_id
 is 'identificador';
comment on column owner.nome_tabela.user_insert
 is 'auditoria';
comment on column owner.nome_tabela.date_insert
 is 'auditoria';
comment on column owner.nome_tabela.user_update
 is 'auditoria';
comment on column owner.nome_tabela.date_update
 is 'auditoria';

-- keys
begin
  -- Primary
  begin
     execute immediate 'alter table owner.nome_tabela
                        add constraint pkc_xxx primary key (nome_tabela_id, cod_gestao)
                        deferrable';
  exception
     when others then
        if sqlcode not in (-2260) then
           raise;
        end if;
  end;
  -- Unique
  begin
     execute immediate 'alter table owner.nome_tabela
                        add constraint ukc_xxx unique ()
                        deferrable';
  exception
     when others then
        if sqlcode not in (-2261) then
           raise;
        end if;
  end;
  -- Check
  begin
     execute immediate 'alter table owner.nome_tabela
                        add constraint cc_xxx_01 check ()
                        deferrable';
  exception
     when others then
        if sqlcode not in (-2264) then
           raise;
        end if;
  end;
end;
/`;
}
