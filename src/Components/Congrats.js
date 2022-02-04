import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

const Congrats = () => {
  const lottieContainer = useRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://assets9.lottiefiles.com/packages/lf20_aoLi6I.json',
    });
  }, []);

  return (
    <div className="congrats" ref={lottieContainer}>
      <h1 className="congrats__title">Congratulations!</h1>
      <p className="congrats__message">
        You've completed your day. Time for a beer!
      </p>
    </div>
  );
};

export default Congrats;
