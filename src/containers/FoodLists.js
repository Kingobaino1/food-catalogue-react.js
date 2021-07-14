import React from 'react';
import { connect, useSelector } from 'react-redux';

const Foodlist = () => {
  const food = useSelector((state) => state);
  console.log(food, 'hello')
  return (
      <div>
        <ul>
          {food.forEach((foo) => <li>foo.strInstructions</li>)}
        </ul>
        
      </div>
  )

}

export default connect()(Foodlist);
