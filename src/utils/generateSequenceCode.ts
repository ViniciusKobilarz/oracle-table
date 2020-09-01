interface Params {
  owner: string;
  abbreviation: string;
}

export default function generateSequenceCode({ owner, abbreviation }: Params) {
  return `begin
  execute immediate 'create sequence ${owner}.sqe_${abbreviation}
                     minvalue 1
                     maxvalue 9999999999999999999999
                     start with 1
                     increment by 1
                     nocache';
exception
  when others then
     if sqlcode not in (-955) then
        raise;
     end if;
end;
/
`;
}
