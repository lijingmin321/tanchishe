// 定义游戏空间每个单元格的状态： 0： 正常格子 -1：食物格子；1:蛇头位置； 2: 蛇身格子 
export type MapType = Array<Array<number>>

type SnakeNode = {
    x: number,
    y: number,
    state: number
}

export type SnakeHead = SnakeNode

export type SnakeBody = Array<SnakeNode>

export type FoodType = SnakeNode