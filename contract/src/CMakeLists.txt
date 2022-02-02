cmake_minimum_required(VERSION 3.5)
project(novotebuyeos)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract( novotebuyeos novotebuyeos novotebuyeos.cpp )
target_include_directories( novotebuyeos PUBLIC ${CMAKE_SOURCE_DIR}/../include )
target_ricardian_directory( novotebuyeos '${CMAKE_SOURCE_DIR}/../ricardian/' )