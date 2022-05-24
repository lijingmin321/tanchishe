import { defineStore } from "pinia";

type scoreStateType = {
    score: number,
    level: number
}
 
export const useScoreStore = defineStore({
     id: 'score-store',
     state(): scoreStateType{
         return{
            score: 0,
            level: 1
         }
     },
     actions:{
        setLevel(level: number){
            this.level = level
        },
        setScore(score: number){
            this.score = score
        }
     }
 })