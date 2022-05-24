import { defineStore } from "pinia";
import { MapType } from "../../type";

type GameStoreStateType = {
    col: number,
    row: number,
    isLive: boolean,
    map: MapType
}

export const useGameStore = defineStore({
    id: 'game-store',
    state(): GameStoreStateType{
        return {
            col: 25, 
            row: 30,
            isLive: true,           
            map: []
        }
    },
    actions: {
        setMap(map: MapType){
            this.map = map
        },
        setRow(row: number){
            this.row = row
        },
        setCol(col: number){
            this.col = col
        },
        setIsLive(isLive: boolean){
            this.isLive = isLive
        }
    }
})