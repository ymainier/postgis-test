# Creation des containers

```
docker run --name some-postgis -e POSTGRES_PASSWORD=mysecretpassword -d mdillon/postgis
docker run -it --link some-postgis:postgres --rm postgres \
    sh -c 'exec psql -h "$POSTGRES_PORT_5432_TCP_ADDR" -p "$POSTGRES_PORT_5432_TCP_PORT" -U postgres'
```

# Creation de la table

```
CREATE TABLE cities ( id serial PRIMARY KEY, name VARCHAR(128), value SMALLINT, geom GEOMETRY(POINT) );

INSERT INTO cities (name, value, geom) VALUES ('Arbouans', 3, ST_GeomFromText('POINT(6.81772 47.48872)'));

SELECT ST_Distance(
    ST_GeogFromText('SRID=4326;POINT(-72.1235 42.3521)') As gg1,
    ST_GeogFromText('SRID=4326;LINESTRING(-72.1260 42.45, -72.123 42.1546)') As gg2
) AS distance
```
