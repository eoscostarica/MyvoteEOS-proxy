# MyvoteEOS Proxy Website

<p align="center">
	<a href="myvoteeos.com">
		<img src="./docs/my-vote-eos-logo.png" />
	</a>
</p>
<br/>

![](https://img.shields.io/github/license/eoscostarica/MyvoteEOS-proxy) ![](https://img.shields.io/badge/code%20style-standard-brightgreen.svg) ![](https://img.shields.io/github/forks/eoscostarica/MyvoteEOS-proxy?style=social)

The EOS based proxy facilitates the transition into a truly democratic based chain that is free from Pareto control by voting for BP’s that do not engage with direct vote rebate.

# Features!

This project features all the latest tools and practices in the industry.

- _React.js_ - **React 16**✨, React Router 5
- _Rematch/core_ - Rematch a Redux Framework
- _Material-ui/core_ - React components for faster and easier web development
- _universal-authenticator-library_ - A library for allowing apps to easily use different auth providers (optional)
- _Lint_ - ESlint
- _Styles_ - Material-UI Theme (customizable)

## Installation

### Getting Started

Somethings you need before getting started:

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/es/)
- [yarn](https://yarnpkg.com/)

### First time

Copy the `.env.example` then update the environment variables according to your needs

```
cp .env.example .env
```

_If you want to the website using UAL login integration, please make sure that `REACT_APP_USE_UAL` env variable is set as true._

## Development

### Quick start

1.  Clone this repo using `git clone --depth=1 https://github.com/eoscostarica/MyvoteEOS-proxy.git <YOUR_PROJECT_NAME>`
2.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3.  Run `yarn` in order to install dependencies.
    _At this point you can run `yarn start` to see the example app at `http://localhost:3000`._

## File Structure

Within the download you'll find the following directories and files:

```
/
|── contract
├── public
│   ├── index.html
│   └── manifest.json
├──  src
│   ├── api
│   ├── components
│   ├── config
│   ├── containers
│   ├── models
│   ├── routes
│   ├── theme
│   ├── utils
│   ├── App.js
│   ├── index.js
│   └── store.js
├── .dockerignore
├── .gitignore
├── .env.example
├── .eslintrc
├── .prettierrc
├── Dockerfile
├── LICENSE
├── README.md
├── docker-compose.yml
├── nginx.conf
└── package.json
```

## Smart Contract

Deployed on Jungle3 testnet as: [`myvoteeosdao`](https://jungle3.bloks.io/account/myvoteeosdao)

## Contributing

Let us know if you have any cool ideas for this project and please report bugs big and small by [opening an issue](https://github.com/eoscostarica/MyvoteEOS-proxy/issues/new/choose)

Please Read EOS Costa Rica's [Open Source Contributing Guidelines](https://developers.eoscostarica.io/docs/open-source-guidelines).

## About EOS Costa Rica

<p align="center">
	<a href="https://eoscostarica.io">
		<img src="https://github.com/eoscostarica/eos-rate/raw/master/docs/eoscostarica-logo-black.png" width="300">
	</a>
</p>
<br/>

EOS Costa Rica is an independently-owned, self-funded, bare-metal Genesis block producer that provides stable and secure infrastructure for EOSIO blockchains. We support open source software for our community while offering enterprise solutions and custom smart contract development for our clients.

[eoscostarica.io](https://eoscostarica.io)

## License

MIT © [EOS Costa Rica](https://eoscostarica.io)
