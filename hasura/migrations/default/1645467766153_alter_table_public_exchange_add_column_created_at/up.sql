alter table "public"."exchange" add column "created_at" timestamptz
 not null default now();
