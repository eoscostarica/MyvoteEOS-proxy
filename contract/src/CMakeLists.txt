cmake_minimum_required(VERSION 3.5)
project(myvoteeosdao)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract( myvoteeosdao myvoteeosdao myvoteeosdao.cpp )
target_include_directories( myvoteeosdao PUBLIC ${CMAKE_SOURCE_DIR}/../include )
target_ricardian_directory( myvoteeosdao '${CMAKE_SOURCE_DIR}/../ricardian/' )