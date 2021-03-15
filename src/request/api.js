import {get, post} from './http'

export  function GetFlag(Config) {
   return get("Flag", {"Config": Config})
}
export function Chart(Chart,PostBarID){
  return get("Chart/"+Chart,{"PostBarID":PostBarID})
}

export function Spider(PostBarIDs){
    return  post("Spider",{"PostBarIDs":PostBarIDs})
}
export function DataModel(){
    return get("DataModel")
}
export function PostBarList(){
    return get("PostBarList")
}
export function PostBarFlag(){
    return get("PostBarIDs" )
}

export function PostBar(PostBar,methods){
    if (methods=="post"){
        return post("PostBar",{"PostBar":PostBar})
    }else if (methods=="get"){
        return get("PostBar",{"PostBar":PostBar})
    }
}
export function StatisticsData(){
    return get("TotalData")
}
export function StatisticsDataByPostBar(PostBarID){
    return get("PostBarData",{"PostBarID":PostBarID})
}