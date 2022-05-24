import { useScoreStore } from '../store/module/scoreStore'

// 定义表示记分牌的类

class ScorePanel{
    score: number = 0
    level: number = 1

    // 设置变量限制等级
    maxLevel:number

    // 设置变量 表示多少分升级
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10){
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    addScore(){
        this.score ++
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
    }

    levelUp(){
        if(this.level < this.maxLevel) {
            this.level++
        }   
    }
}
export default ScorePanel