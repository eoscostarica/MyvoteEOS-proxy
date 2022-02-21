alter table "public"."exchange" add column "updated_at" timestamptz
 not null default now();
