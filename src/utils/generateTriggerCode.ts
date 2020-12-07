interface Params {
  owner: string;
  name: string;
  abbreviation: string;
}

export default function generateTriggerCode({
  owner,
  name,
  abbreviation,
}: Params) {
  return `create or replace trigger ${owner}.tr_${abbreviation}_bir_pkc
 before insert on ${owner}.${name}
 referencing old as old new as new
 for each row
begin
   if nvl(:new.${name}_id, 0) <= 0 then
      select ${owner}.sqe_${abbreviation}.nextval
       into :new.${name}_id
       from dual;
   end if;
end;
/

create or replace trigger ${owner}.tr_${abbreviation}_bir_audit
 before insert on ${owner}.${name}
 referencing old as old new as new
 for each row
begin
   :new.cod_gestao := kss.getgestao;
end;
/

create or replace trigger ${owner}.tr_${abbreviation}_bur_audit
 before update on ${owner}.${name}
 referencing old as old new as new
 for each row
begin
   :new.user_update := user;
   :new.date_update := sysdate;
end;
/`;
}
