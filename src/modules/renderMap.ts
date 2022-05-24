import { MapType } from "../type";
import Food from "./food";
import { initMap } from "./initMap";
import Snake from "./snake";

import { useGameStore } from '../store/module/gameStore'
import { useScoreStore } from '../store/module/scoreStore'
import ScorePanel from "./scorePanel";


export function renderMap(snake: Snake, food: Food):MapType{
    const { setMap } = useGameStore()
    const map:MapType = initMap()
    renderSnake(map, snake)
    renderFood(map, food)
    setMap(map)
}

export function renderSnake(map: MapType, snake:Snake){
    renderSnakeBody(map, snake)
    renderSnakeHead(map, snake)
}

export function renderSnakeHead(map: MapType, snake: Snake){
    const {x, y, state} = snake.snakeHead
    map[y][x] = state
}

export function renderSnakeBody(map: MapType, snake: Snake){
    for(let i = 0; i < snake.snakeBody.length; i++){
        const { x, y, state } = snake.snakeBody[i]
        map[y][x] = state
    }
}

export function renderFood(map: MapType, food: Food){
    const { x, y, state } = food
    map[y][x] = state
}

export function renderLevelPanel(scorePanel: ScorePanel){
    const { $patch } = useScoreStore()
    $patch((state)=>{
        state.level = scorePanel.level
        state.score = scorePanel.score
    })
}

export function renderIsLive(isLive:boolean){
    const { setIsLive } = useGameStore()
    setIsLive(isLive)
}

