export const getData = async (url) =>{
    try{
        let res = await fetch(url).then(r=>r.json());
        return res;
    }
    catch(err){
        return [];
    }
   
}