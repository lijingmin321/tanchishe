<template>
    <div class="game-wrapper">
        <!-- <button @click="gameStart">游戏开始</button> -->
        <div class="game-container">
            <div class="row-wrapper" v-for="rowItem in map.length" :key="rowItem">
                <template v-for="colItem in map[rowItem - 1].length" :key="colItem">
                    <cell :type="map[rowItem - 1][colItem - 1]"></cell>
                </template>
            </div>
        </div>
        <score-panel></score-panel>
    </div>
    <game-over-modal v-if="!isLive" @restart="restartGame"></game-over-modal>
</template>

<script setup lang="ts">
import ScorePanel from '../components/tanchishe/ScorePanel.vue';
import { useGameStore } from '../store/module/gameStore';
import Cell from '../components/tanchishe/Cell.vue';

import { initMap } from '../modules/initMap';
import { storeToRefs } from 'pinia';
import Game from '../modules/game'
import { unref } from 'vue';
import GameOverModal from '../components/tanchishe/GameOverModal.vue';
const { map, isLive } = storeToRefs(useGameStore()) 
const { setMap } = useGameStore()

setMap(initMap())

const game = new Game(unref(map))

game.start()

function restartGame(isLiveParam: boolean){
    game.restart()
}


</script>

<style scoped lang="less">
    @import url('../style/var.less');
    .game-wrapper{
        background: @bg-color;
        margin: 0px auto;
        border: 10px solid @black-color;
        border-radius: 40px;
        width: fit-content;
    }
    .game-container{
        width: fit-content;
        margin: 20px;
        border: 5px solid @black-color;
        .row-wrapper{
            display: flex;
            flex-wrap: nowrap;
        }
    }
</style>