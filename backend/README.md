# URL Shortener API

This is a simple URL shortener service built with FastAPI and deployed using Docker.

## Prerequisites

*   Python 3.13+
*   PostgreSQL 17+

## Installation

1. pip install -r requirements.txt

2. copy the .env.example file to .env and fill in the required variables.

## Overview

- I scaffolded out the backend using FastAPI, and included the two routes to match the specification.

  * /shorten: POST request that takes a long URL as input and returns a unique short URL using a random alphanumeric string for masking.
  * /:id: GET request that takes the short URL key as input and returns the original url details.

- I used PostgreSQL to store the data, and created one table to store the simple data structure.

  * id (primary key): integer
  * original_url: string
  * short_code: string

  I enjoy using the abstraction of an ORM layer, ideally to prevent direct interaction with the database.
  This was a challenge for me as I have not set up PostgreSQL from scratch nor a SqlAlchemy model before, but have worked with ORMs in other projects.

- I added some basic validation as well:

  SHORTEN endpoint:
  * The URL must be valid (using validators for this)
  * The URL cannot already exist (in the database, we don't error for the user on this)
  * The short code must be unique
  
  EXPAND endpoint:
  * The short code must be valid (exist in the database)





