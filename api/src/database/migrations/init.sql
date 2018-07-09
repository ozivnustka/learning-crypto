CREATE TABLE blocks (
    index integer PRIMARY KEY,
    data TEXT NOT NULL,
    mined_by varchar NOT NULL,
    nonce integer NOT NULL,
    hash varchar UNIQUE NOT NULL,
    previous_hash varchar UNIQUE NOT NULL,
    created_at timestamp DEFAULT NOW()
);
