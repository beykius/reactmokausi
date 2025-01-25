import React from 'react';

const Bonuses = ({money, addPotion, hitAll, doubleDamage, addRandomMonster, addsFifty, enableAutoAttack}) => {
    return (
        <div className="">
            <div className="row p-3">Money: {money}</div>
            <div className='d-flex gap-2 mb-2'>
                <div className='box'>🧉 <br/>Potion<br/>
                    <button onClick={addPotion}>Buy</button>
                </div>
                <div className='box'>⚔️<br/>Hit all monsters at once<br/>
                    <button onClick={hitAll}>Buy</button>
                </div>
                <div className='box'>❌ <br/>Double Player Damage<br/>
                    <button onClick={doubleDamage}>Buy</button>
                </div>
            </div>
            <div className='d-flex gap-2'>
                <div className='box'>👹 <br/>Adds one more monster<br/>
                    <button onClick={addRandomMonster}>Buy</button>
                </div>
                <div className='box'>5️⃣0️⃣ <br/>On player death, <br/>ressurects with 50% HP<br/>
                    <button onClick={addsFifty}>Buy</button>
                </div>
                <div className='box'>♾️ <br/>Attacks monster<br/> automatically<br/>
                    <button onClick={enableAutoAttack}>Buy</button>
                </div>
            </div>


        </div>
    );
};

export default Bonuses;