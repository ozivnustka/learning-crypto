CREATE TABLE blocks (
    index integer PRIMARY KEY,
    data JSONB NOT NULL,
    mined_by varchar NOT NULL,
    nonce integer NOT NULL,
    hash varchar UNIQUE NOT NULL,
    previous_hash varchar REFERENCES blocks (hash)
);

