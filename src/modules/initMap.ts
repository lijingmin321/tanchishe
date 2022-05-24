import type { MapType } from '../type'
import { useGameStore } from '../store/module/gameStore'


export function initMap(): MapType {
    const { row, col} = useGameStore()
    const map: MapType = []

    for(let i = 0; i < row; i++ ){
        const arr:Array<number> = []
        for(let j = 0; j < col; j++ ){
            arr.push(0)
        }
        map.push(arr)
    }
    return map
}