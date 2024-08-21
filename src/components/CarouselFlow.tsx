import { useEffect, useRef } from "react";
import '../styles/CarouselFlow.css';

const RADIUS = 600;
const FLIP_RANGE = 3;
const VISIBLE_ITEMS = 5;

interface CarouselFlowProps {
  imageData: string[];
}

const CarouselFlow: React.FC<CarouselFlowProps> = ({ imageData }) => {
  const el = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  let angleUnit: number, currentIndex: number, currentAngle: number;

  function setTransform(el: HTMLDivElement, xpos: number, zpos: number, angle: number, flipAngle: number) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${angle}deg) rotateX(${flipAngle}deg)`;
  }

  useEffect(() => {
    angleUnit = 360 / imageData.length;
    currentIndex = currentAngle = 0;
    target(0, true);
  }, [imageData]);

  function target(index: number, initial: boolean = false) {
    if (!initial && index === currentIndex) pickImage(imageData[index]);

    let deltaAngle = -(index - currentIndex) * angleUnit;
    if (deltaAngle < -180) deltaAngle += 360;
    else if (deltaAngle > 180) deltaAngle -= 360;

    currentAngle += deltaAngle;
    currentIndex = index;

    const cf = el.current!;
    cf.style.transform = `translateZ(-${RADIUS}px) rotateY(${currentAngle}deg)`;

    let fliptAngle = 90;
    const items = cf.children;

    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLDivElement;
      const itemAngle = angleUnit * i;
      const itemAngleRad = itemAngle * Math.PI / 180;
      const xpos = Math.sin(itemAngleRad) * RADIUS;
      const zpos = Math.cos(itemAngleRad) * RADIUS;

      let deltaIndex = Math.abs(i - index);
      if (deltaIndex > items.length / 2) {
        deltaIndex = items.length - deltaIndex;
      }

      // Adjust visibility based on the number of visible items
      if (deltaIndex <= Math.floor(VISIBLE_ITEMS / 2)) {
        item.style.opacity = '1';
        item.style.pointerEvents = 'auto';
      } else {
        item.style.opacity = '0';
        item.style.pointerEvents = 'none';
      }

      if (deltaIndex <= FLIP_RANGE) {
        fliptAngle = deltaIndex * (90 / FLIP_RANGE);
      } else fliptAngle = 90;
      setTransform(item, xpos, zpos, itemAngle, fliptAngle);
    }
  }

  const pickImage = (imgUrl: string) => {
    img.current!.style.backgroundImage = `url(${imgUrl})`;
    img.current!.style.transform = 'scale(1, 1)';
  }

  return (
      <div className="container my-4">
        <div className="carouselflow" ref={el}>
          {imageData.map((it, index) => (
              <div
                  onClick={() => target(index)}
                  key={index}
                  style={{ backgroundImage: `url(${it})` }}
                  className='carouselflow-item'>
              </div>
          ))}
        </div>
        <div
            onClick={() => { img.current!.style.transform = 'scale(0, 0)' }}
            className='image-display'
            ref={img}>
        </div>
      </div>
  );
}

export default CarouselFlow;