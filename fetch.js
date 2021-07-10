fetch('https://api.wazirx.com/api/v2/tickers',{
})   
         .then( data= res => res.json())
         .then(data=>{console.log(data) ;

          let newinfo = new Hodlinginfo({
               name:data.polyinr.name,
                last:data.polyinr.last,
                buy:data.polyinr.buy,
                sell:data.polyinr.sell,
                volume:data.polyinr.volume,
                base_unit:data.polyinr.base_unit
                });
                 newinfo.save();
         }) 
         module.exports=fetch;