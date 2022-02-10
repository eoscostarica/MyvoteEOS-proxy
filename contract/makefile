
build-contracts:
	@mkdir -p build
	@rm -rf build/*
	@cd build && cmake .. && make

deploy-contracts:
	$(eval -include .env)
	@cleos wallet unlock --name $(CONTRACTS_ACCOUNT) --password $(CONTRACTS_PASSWORD) || echo ""
	@cleos -u $(CONTRACTS_CHAIN_ENDPOINT) set code $(CONTRACTS_ACCOUNT) ./build/myvoteeosdao/myvoteeosdao.wasm || echo ""
	@cleos -u $(CONTRACTS_CHAIN_ENDPOINT) set abi $(CONTRACTS_ACCOUNT) ./build/myvoteeosdao/myvoteeosdao.abi || echo ""
	@cleos wallet lock --name $(CONTRACTS_ACCOUNT)