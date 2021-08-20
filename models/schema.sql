-- CREATE DATABASE  naijabloodbank


CREATE TABLE admins (
  aId SERIAL PRIMARY KEY,
  Username VARCHAR(255),
  Passowrd VARCHAR(255),
  postdate TIMESTAMP --created Date
);

CREATE TABLE inmate (
  iId SERIAL PRIMARY KEY,
  f_name VARCHAR(255),
  l_name VARCHAR(255),
  m_name VARCHAR(255),
  dob DATE, --created Date
  gender VARCHAR(255),
  phone BIGINT,
  email VARCHAR(255),
  hAddress VARCHAR(255),
  iLga VARCHAR(255),
  iState VARCHAR(255),
  crime VARCHAR(255),
  cCenter VARCHAR(255),
  doi DATE,
  dor DATE,
  code VARCHAR(255) UNIQUE,
  ipic VARCHAR(255),
  postdate TIMESTAMP --created Date
);

CREATE TABLE visitingHistory (
  VHId SERIAL PRIMARY KEY,
  vDate VARCHAR(255) ,
  visitor VARCHAR(255) ,
  inmate VARCHAR(255) ,
  duration VARCHAR(255),
  postdate TIMESTAMP --created Date
);


CREATE TABLE visitor(
  vId SERIAL PRIMARY KEY,
  f_name VARCHAR(255),
  l_name VARCHAR(255),
  m_name VARCHAR(255),
  dob DATE, --created Date
  gender VARCHAR(255),
  phone BIGINT,
  email VARCHAR(255) UNIQUE,
  hAddress VARCHAR(255) ,
  vLga VARCHAR(255),
  vState VARCHAR(255),
  postdate TIMESTAMP --created Date
);



 









-- CREATE TABLE bloodcenter (
--   bc_id SERIAL PRIMARY KEY,
--   centername VARCHAR(255),  -- name of the center
--   locstate VARCHAR(255),  -- location State 
--   loclga VARCHAR(255),  -- location L.G.A
--   bg int REFERENCES bloodgroup(bg_id), --blood group
--   qty INT,  -- blood Quantity
--   postdate TIMESTAMP --created Date
--   );

-- CREATE TABLE booking (
--   bk_id SERIAL PRIMARY KEY,
--   bg int REFERENCES bloodgroup(bg_id), -- blood group
--   bc int REFERENCES bloodcenter(bc_id),  -- blood center 
--   myusers INT REFERENCES users(users_id),  -- user
--   p_status int REFERENCES payment(p_id), -- payment state
--   postdate TIMESTAMP --created Date
-- );

