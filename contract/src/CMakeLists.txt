cmake_minimum_required(VERSION 3.5)
project(souleosproxy)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract( souleosproxy souleosproxy souleosproxy.cpp )
target_include_directories( souleosproxy PUBLIC ${CMAKE_SOURCE_DIR}/../include )
target_ricardian_directory( souleosproxy '${CMAKE_SOURCE_DIR}/../ricardian/' )