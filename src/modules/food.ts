import type { FoodType, MapType } from '../type'

class Food {
    x: number
    y: number
    state: number = -1

    constructor(){
        this.x = 4
        this.y = 5
    }

    change(map: MapType){
        // 生成一个随机位置
        // 食物的位置最小是0,最大是290
        // 因为蛇每次移动都是一格（10px）所以要求食物位置必须是10的倍数
        // Math.random*290  0-290之间   但有小数
        // Math.round(Math.random()* 290) 0-290之间取整
        // Math.round(Math.random()* 29) * 10

        const yMax = map.length - 1
        const xMax = map[0].length - 1

        this.x = Math.round(Math.random()* xMax)
        this.y = Math.round(Math.random()* yMax)
    }
}

export default Food