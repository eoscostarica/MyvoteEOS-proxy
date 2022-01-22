/*
 *
 * @author  EOSCostaRica.io [ https://eoscostarica.io ]
 *
 * @section DESCRIPTION
 *  Header file for the declaration of all functions
 *
 *  GitHub: https://github.com/eoscostarica/soul-of-EOS-proxy
 *
 */
#include <eosio/eosio.hpp>

using namespace std;
using namespace eosio;

CONTRACT souleosproxy : public contract
{
    public:
    using contract::contract;
    
    /**
     * Add proxy to the list of proxies
     *
     * This action allow add a new proxy
     *
     *
     * @return no return value.
     */
    ACTION addproxy( name proxy);

    /**
     * Remove proxy from the list of proxies
     *
     * This action allow remove a proxy
     *
     *
     * @return no return value.
     */
    ACTION rmproxy( name  proxy);

     /**
     * Add block producer to the list of block producers
     *
     * This action allow add a new block producers
     *
     *
     * @return no return value.
     */
    ACTION addproducer( name  producer);

    /**
     * Remove block producer from the list of block producers
     *
     * This action allow remove a block producers
     *
     *
     * @return no return value.
     */
    ACTION rmproducer( name producer);
    
    ACTION clear();

    private:

    TABLE proxy
    {
        name           proxy;

        auto primary_key() const
        {
            return proxy.value;
        }
    };
    typedef multi_index< name( "proxy" ), proxy > proxy_table;

    TABLE producer
    {
        name   producer;
        auto   primary_key() const
        {
            return producer.value;
        }
    };
    typedef multi_index< name( "producer" ), producer > producer_table;
};