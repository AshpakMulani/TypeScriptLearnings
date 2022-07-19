//REF : https://blog.logrocket.com/async-await-in-typescript/#:~:text=TypeScript%20enables%20you%20to%20type,is%20a%20wrapper%20over%20promises.
//      https://wanago.io/2018/04/16/explaining-async-await-creating-dummy-promises/



interface PokemonList {
    count: number;
    next: string;
    previous: number | null;
    results:
        {
        name: string;
        url: string;
        }[];    
}

interface Pokemon {
    id: number;
    name: string;
    stats:{
        base_stat: number;
        effort: number;
        stat :
        {
            name1 : string;
            url : string;
        };
        }[];    
}

// Return value of function in Promise <{object}> is not enforced with actual results in typescript
// Ex. Even if we dont give all returned fields form API in PokemonList interface still code works.
// and TS doesnt throw any error
async function getpokemonlist(url: string): Promise<PokemonList>{   
    console.log("Inside getpokemonlist function...")
    const pokelist = await fetch(url);    
    return await pokelist.json();
}

async function getpokemon(url: string): Promise<Pokemon>{
    const poke = await fetch(url);
    return await poke.json();
}


// async-await is syntactical suger on top of returnin Promise.
// Promise can be returned as whon below.
async function getfirstpokemon(url:string): Promise<Pokemon> {
    // need to resolve/reject each promise to return on sucess and failure case.
    // Promise object needs a function which returns resolve and reject methods
    return new Promise(async(resolve, reject) =>{
        try{
            const pookelist = await getpokemonlist(url);
            // resolve by returning first pokemon object from results
            console.log("resolving promise....");
            resolve(await getpokemon(pookelist.results[0].url));
        }
        catch(error){
            console.log("rejecting promise....");
            reject(error);
        }
    });
}


(
async function() {    
    // ============Get list of all pokemon names=================
    try{
        // to measure start time to calculate time taken by code
        console.time('For loop execution Time');

        const pokemonlist =  await getpokemonlist("https://pokeapi.co/api/v2/pokemon/");
        
        // using 'for' loop and not 'foreach' on pokemonlist.results because if we use
        // for each loop on code whihc contains 'await' on promise inside the loope doesnt wait
        // for 'await' to be fullfilled and it just moves ahead with execution.
        // 'for' loop waits for 'await' to be fullfilled and then move to next part.
        for(var pk_object of pokemonlist.results){
            const pokemon = await getpokemon(pk_object.url);
            console.log(pokemon.name);
        }
        
        console.timeEnd('For loop execution Time');       
        
    }
    catch(e){  
        console.error(e);
    }


    // ====== using custom own promise ================
    //get first pokemon using custom promise returning function
    const firstpoke = await getfirstpokemon("https://pokeapi.co/api/v2/pokemon/");
    console.log("First pokemon name : " + firstpoke.name);    


    //================== promise result caching ==========================
    // promises are invoked only once and later requests are automatically handled through cache    
    try{
        const promise_pokelist = getpokemonlist("https://pokeapi.co/api/v2/pokemon/");
        const pokelist = await promise_pokelist;
        
        // while awaiting on promise getpokemonlist function is not invoked because results from promise
        // in fullfilled state are used    
        console.log(pokelist);

        // while awaiting on promise getpokemonlist function is not invoked because results from promise
        // in fullfilled state are used
        const pokelist1 = await promise_pokelist;
        console.log(pokelist1);
    }
    catch(e){
        console.error(e);
    }
}   
)();



// ========== Promise concurrent execution ==============
// in above function we are calling promise in for loop and awaiting to resolve it
// one by one, which can cause delays while handling large numbers. To avoid delays
// we can use promise pooling where multiple promises are executed concurrantly without 
// waiting for result. Result is collected at the end of comcurrent implimnetation.


(async function() {

    // to measure start time to calculate time taken by code
    console.time('Promise all execution Time');

    const pk_list = await getpokemonlist("https://pokeapi.co/api/v2/pokemon/");

    console.log(pk_list);

    // create array of promises for indovidual pokemon details
    let pk_array = pk_list.results.map( (pk) : Promise<Pokemon> => { return getpokemon(pk.url); });    

    // returns promise array
    console.log(pk_array);
   
    // Promise.all is one of the way to execute promises concurrantly (NOT paralally).
    // concurrent means prmoises are trigerred one after another without waiting for result
    // and at the end all resutls are collected. Parallel mean all are triggerd at once whihc
    // is not ther case here due to single thread runing all code.

    //promise.all triggers promises from array one by one and then collect results from each
    // execution at the end before resturning results in 'data' variable.
    const data = await Promise.all(pk_array);
    console.log(data);
   
    // End time calculation of code execution started with same lable
    console.timeEnd('Promise all execution Time');
   
    // *******
    //concurrant execution shows almost half time reduction in comparison to for loop
    // *******
    
})();


/// ========== Promise pooling ==============
// In above example using promise.all which calls all the promises from provided array
// one after another without pooling or limiting requests, whihc can cause overloading
// or timeouts due to threshuld on target API's. We can use promise pooling in such case
// where we can limit number of requests made by controlling concurrancy 

//---todo----