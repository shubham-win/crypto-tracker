import { useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
// import { CurrencyContext } from "../../context/CurrencyContext";
import currencyStore from "../../state/store";

function CoinTable() {

    const { currency } = currencyStore();

    const [page,setPage] = useState(1);
    const { data, isLoading, isError, error } = useQuery(['coins', page], () => fetchCoinData(page, currency), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
    });

    /**  useEffect(() => {
    *        console.log(data);
    *    }, [data]);
    */
    

    if(isLoading) {
        return <div>Loading...</div>;
    }
    if(isError) {
        return <div>Error: {error.message}</div>;
    } 

    /***  useEffect(() => {
    *     fetchCoinData(1, 'usd');
    *     }, []);
    */

        

    return(
        // <>CoinTable <button onClick = {() => setPage(page + 1)}>Click</button> { page }</>

        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">

        {/* Table List */}
            <div className = "flex items-center w-full px-2 py-4 font-semibold text-black bg-yellow-400">
                {/* Header of Table */}
                <div className="basis-[35%]">
                    Coin
                </div>
                <div className="basis-[25%]">
                    Price
                </div>
                <div className="basis-[20%]">
                    24h change
                </div>
                <div className="basis-[20%]">
                    24h volume
                </div>
                <div className="basis-[20%]">
                    Market cap
                </div>
            </div>

        {/* table content */}
            <div className = "flex flex-col w-[80vw] mx-auto">
            { isLoading && <div>Loading...</div>}
                { data?.map((coin) => {
                    return (
                        <div key={coin.id} className='flex items-center justify-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent'>

                            <div className='flex items-center justify-start gap-3 basis-[35%]'>
                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" />
                                </div>
                                <div className='flex flex-col'>
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>
                            </div>

                            <div className="basis-[25%]">{coin.high_24h}</div>
                            <div className="basis-[20%]">{coin.price_change_24h}</div>
                            <div className="basis-[20%]">{coin.total_volume}</div>
                            <div className="basis-[20%]">{coin.market_cap}</div>

                        </div>
                    );
                })}
            </div>

                {/* Next &&& Previous */}

            <div className="flex items-center justify-center gap-4">
                <button
                    disabled = {page===1} 
                    onClick={() => setPage(page - 1)} 
                    className="text-2xl text-white btn btn-primary btn-wide"
                >
                    Prev
                </button>
                <button 
                    onClick={() => setPage(page + 1)} 
                    className="text-2xl text-white btn btn-secondary btn-wide"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default CoinTable;