import {get, post} from './http'

export  function GetFlag(Config) {
   return get("GetFlag", {"Config": Config})



  //  .then(res => {
  //     let bol = res.data["ValueConfig"];
  //     return bol
  //     console.log(bol)
  //   }
  // )
}
export function Chart(Chart,PostBarID){
  return get(Chart+"Chart",{"PostBarID":PostBarID})
}
export function Start(Name,PostBarIDs){
    if (Name==="Spider"){
        return  post("Start",{"Name":Name,"PostBarIDs":PostBarIDs})
    }else if(Name==="TrainModel"){
        return  get("Start",{"Name":Name})
    }

}
export function PostBarList(){
    return get("PostBarList")
}
export function PostBarFlag(){
    return get("PostBarIDs" )
}

export function PostBar(PostBar){
    return get("PostBar",{"PostBar":PostBar})
}