FROM node:12.16.2-alpine  as build-stage

ARG react_app_api_entrypoint
ARG react_app_tag
ARG react_app_name
ARG react_app_title
ARG react_app_logo
ARG react_app_footer_links
ARG react_app_ual_app_name
ARG react_app_ual_api_protocol
ARG react_app_ual_api_host
ARG react_app_ual_api_port
ARG react_app_ual_chain_id
ARG react_app_hasura_url
ARG react_app_producers_info_api_url
ARG react_app_myvoteeos_account
ARG react_app_block_explorer_url
ARG react_app_google_form_url
ARG react_app_twitter_account

ENV REACT_APP_TAG $react_app_tag
ENV REACT_APP_NAME $react_app_name
ENV REACT_APP_TITLE $react_app_title
ENV REACT_APP_LOGO $react_app_logo
ENV REACT_APP_FOOTER_LINKS $react_app_footer_links
ENV REACT_APP_UAL_APP_NAME $react_app_ual_app_name
ENV REACT_APP_UAL_API_PROTOCOL $react_app_ual_api_protocol
ENV REACT_APP_UAL_API_HOST $react_app_ual_api_host
ENV REACT_APP_PRODUCERS_INFO_API_URL $react_app_producers_info_api_url
ENV REACT_APP_UAL_API_PORT $react_app_ual_api_port
ENV REACT_APP_UAL_CHAIN_ID $react_app_ual_chain_id
ENV REACT_APP_HASURA_URL $react_app_hasura_url
ENV REACT_APP_MYVOTEEOS_ACCOUNT $react_app_myvoteeos_account
ENV REACT_APP_BLOCK_EXPLORER_URL $react_app_block_explorer_url
ENV REACT_APP_GOOGLE_FORM_URL $react_app_google_form_url
ENV REACT_APP_TWITTER_ACCOUNT $react_app_twitter_account
ENV TOOL_NODE_FLAGS --max_old_space_size=4096
ENV REACT_APP_API_ENTRYPOINT $react_app_api_entrypoint

WORKDIR /usr/src/app

COPY package.json .

COPY yarn*.lock .

RUN yarn --frozen-lockfile

COPY . .

ENV GENERATE_SOURCEMAP false

RUN yarn build

FROM nginx:1.17.10-alpine as run-stage

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
