import React from 'react';
import SimpleAnimation from './components/SimpleAnimation';
import KeyFrame from './components/KeyFrame';
import ButtonTap from './components/ButtonTap';
import Words from './components/Words';
import TransitionTypes from './components/TransitionTypes';
import Variants from './components/Variants';
import Counter from './components/counter';
import Counter2 from './components/counter2';

const App = () => {
  return (
    <div className='p-4'>
      {/* <Words /> */}
      {/* <SimpleAnimation /> */}
      {/* <KeyFrame /> */}
      {/* <ButtonTap /> */}
      {/* <TransitionTypes /> */}
      {/* <Variants /> */}
      {/* <Counter /> */}
      <Counter2 value={122444} />
    </div>
  );
};

export default App;