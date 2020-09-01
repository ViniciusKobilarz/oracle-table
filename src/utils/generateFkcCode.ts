interface Params {
  owner: string;
  name: string;
  abbreviation: string;
}

export default function generateFkcCode({ owner, name, abbreviation }: Params) {
  return `begin
   begin
      execute immediate 'alter table ${owner}.${name}
                         add constraint fkc_${abbreviation}_yyy foreign key (campo_id)
                         references ${owner}.tabela_referencia (campo_id)
                         deferrable';
   exception
      when others then
         if sqlcode not in (-2275) then
            raise;
         end if;
   end;
   -- Index dessa FK
   begin
      execute immediate 'create index ${owner}.idx_fkc_${abbreviation}_yyy on ${owner}.${name} (campo_id)';
   exception
      when others then
         if sqlcode not in (-955, -1408) then
            raise;
         end if;
   end;
end;
/
/`;
}
