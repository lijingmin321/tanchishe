import Food from "../src/modules/food"

test('food', ()=>{
    const map = [
        [1, 0, 0],
        [0, 0, 0],
    ]
    const food = new Food()
    
    food.change(map)

    expect(food.x).toBeGreaterThanOrEqual(0)
    expect(food.x).toBeLessThanOrEqual(2)
    expect(food.y).toBeGreaterThanOrEqual(0)
    expect(food.y).toBeLessThanOrEqual(1)
})