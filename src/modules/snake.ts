import type { SnakeHead, SnakeBody } from '../type'
class Snake {
    snakeHead: SnakeHead;
    snakeBody: SnakeBody;
    maxX: number;
    maxY: number;

    constructor(maxX: number, maxY: number){
        this.snakeHead = {
            x: 0,
            y: 0,
            state: 1
        }
        this.snakeBody = []
        this.maxX = maxX
        this.maxY = maxY
    }

    get HeadX(){
        return this.snakeHead.x
    }

    get HeadY(){
        return this.snakeHead.y
    }

    set HeadX(value: number){
        if(this.HeadX === value){
            return 
        }
        if(value < 0 || value > this.maxX){
            throw new Error('蛇撞墙了')
        }
        const x = this.snakeHead.x
        this.snakeHead.x = value

        this.moveBody(x, this.snakeHead.y)
    }

    set HeadY(value: number){
        if(this.HeadY === value){
            return
        }
        if(value < 0 || value > this.maxY){
            throw new Error('蛇撞墙了')
        }
        const y = this.snakeHead.y
        this.snakeHead.y = value
        this.moveBody(this.snakeHead.x, y)
    }

     // 向蛇内增加一个div(增加身体)
    addBody(x: number, y: number){
        this.snakeBody.unshift({
            x: x,
            y: y,
            state: 2,
        });
    }

    moveBody(x: number, y: number){
        /**
         * 将后边的身体设置为前边身体的位置
         *  例如：
         *  第4节 = 第3节的位置
         */

        // console.log(this.bodyEle.length, this.bodyEle)

        
        this.snakeBody.push({
            x: x,
            y: y,
            state: 2
        })

        this.snakeBody.shift()
    }

    // 检查蛇头是否与身体相撞
    checkHeadBody(){
        for(let i = 1; i < this.snakeBody.length; i++){
            let bd = this.snakeBody[i]
            if(this.HeadX === bd.x && this.HeadY === bd.y){
                // 蛇头撞到了身体
                throw new Error('撞到自己了')
            }
        }
    }
}

export default Snake