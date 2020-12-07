interface Params {
  owner: string;
  name: string;
  initial: string;
}

export default function generateViewCode({ owner, name, initial }: Params) {
  return `create or replace view ${owner}.v$${name} as
select ${initial}.${name}_id
     , ${initial}.user_insert
     , ${initial}.date_insert
     , ${initial}.user_update
     , ${initial}.date_update
  from ${owner}.${name} ${initial}
 where ${initial}.cod_gestao = kss.getgestao;

grant select on ${owner}.v$${name} to kss_corporativo;
grant select on ${owner}.${name} to kss_corporativo;`;
}
