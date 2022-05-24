import { useRouter } from "vue-router"
import { MapType } from "../type"
import Food from "./food"
import { renderIsLive, renderLevelPanel, renderMap } from "./renderMap"
import ScorePanel from "./scorePanel"
import Snake from "./snake"

const router = useRouter()
class Game {
    map:MapType
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    // 创建一个方向（按键按下的方向）
    direction?: string
    //记录游戏是否或者
    isLive: boolean =  true

    constructor(map: MapType){
        this.snake = new Snake(map[0].length - 1, map.length - 1)
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.direction = 'Right'
        renderMap(this.snake, this.food)
        this.map = map
    }

    start(){
        this.init()
        this.run()
    }

    restart(){
        this.snake = new Snake(this.map[0].length - 1, this.map.length - 1)
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.direction = 'Right'
        this.isLive = true
        renderMap(this.snake, this.food) 
        renderIsLive(this.isLive)
        this.start()
    }


    
    // 游戏初始化方法， 调用后
    init(){
        // 绑定键盘按键按下事件
        window.addEventListener('keydown', this.keydownHandle.bind(this))
    }
    /**
     * 
     * @param 
     * event chrome IE
     * ArrowUp Up
     * ArrowDown Down
     * ArrowLeft Left
     * ArrowRight Right
     */

    // 创建一个案件按下的响应函数
    keydownHandle(event: KeyboardEvent){
        console.log(event.key)
        // 需要检查event.key 的值是否合法（用户是否按了正确的键）

        switch(event.key){
            case 'ArrowUp':
            case 'Up':
                if(this.direction !== 'ArrowDown' && this.direction !== 'Down'){
                    this.direction = event.key
                }
                break
            case 'ArrowDown':
            case 'Down':
                if(this.direction !== 'ArrowUp' && this.direction !== 'Up'){
                    this.direction = event.key
                }
                break
                break;
            case 'ArrowLeft':
            case 'Left':
                if(this.direction !== 'ArrowRight' && this.direction !== 'Right'){
                    this.direction = event.key
                }
                break;
            case 'ArrowRight':
            case 'Right':
                if(this.direction !== 'ArrowLeft' && this.direction !== 'Left'){
                    this.direction = event.key
                }
                break;
        }
    }

    // 创建蛇移动的方法
    run(){
        /**
         * 根据方向（this.direction）来使蛇的位置改变
         *      向上 top -
         *      向下 top +
         *      向左 left -
         *      向右 left +
         */

        let X = this.snake.HeadX
        let Y = this.snake.HeadY
        switch(this.direction){
            case 'ArrowUp':
            case 'Up':
                Y -= 1
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 1
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 1
                break;
            case 'ArrowRight':
            case 'Right':
                X += 1
                break;
        }

        this.checkEat(X, Y)

        try{
            this.snake.HeadX = X
            this.snake.HeadY = Y
        }catch(e: any){
            // 进入到catch说明蛇撞墙了
            // alert(`${e.message}, 游戏结束了`)
            this.isLive = false
            renderIsLive(this.isLive)
            window.removeEventListener('keydown', this.keydownHandle.bind(this))
        }
        
        renderMap(this.snake, this.food)

        this.isLive && setTimeout(this.run.bind(this), 300 - ( this.scorePanel.level - 1 ) * 30)
    }

    checkEat(x: number, y: number){
        if( x === this.food.x && y === this.food.y ){
            this.snake.addBody(this.food.x, this.food.y)
            this.scorePanel.addScore()
            this.food.change(this.map)
            renderLevelPanel(this.scorePanel)
        }
    }
}

export default Game