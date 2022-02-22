CREATE TABLE "public"."exchange" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "t_username" varchar NOT NULL, "name" varchar NOT NULL, "total_mention" integer NOT NULL DEFAULT 0, "url" varchar, PRIMARY KEY ("id") , UNIQUE ("t_username"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
