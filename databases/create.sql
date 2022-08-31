create schema dbmd;
create table departamento(id serial primary key, name text);
CREATE TABLE user (
    id serial primary key,
    name text,
    departamento_id integer,
    foreign key(departamento_id) references departamento(id)
);
CREATE TABLE agenda (
    id serial primary key,
    data_agendamento timestamp,
    creat_at timestamp,
    user_id integer,
    qtd_solicitada_ipad integer,
    periodo_aula integer,
    foreign key(user_id) references user(id)
);