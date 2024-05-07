const popMessage = document.querySelector('.pop-message');
const popCloseBtn = document.querySelector('.pop-close-btn')

const circleCoordinate = [];

const isCirclesTouchingOrIntersecting = () => {
  const firstCircle = circleCoordinate[0];
  const secondCircle = circleCoordinate[1];
  const x0 = firstCircle.xCoordinate;
  const y0 = firstCircle.yCoordinate;
  const x1 = secondCircle.xCoordinate;
  const y1 = secondCircle.yCoordinate;
  const r0 = firstCircle.radius;
  const r1 = secondCircle.radius;

  const distanceBetweenCirclesCentre = Math.hypot(x0 - x1, y0 - y1);

  if (distanceBetweenCirclesCentre <= r0 - r1) {
    return 'Second Circle is inside First Circle.';
  } else if (distanceBetweenCirclesCentre <= r1 - r0) {
    return 'First Circle is inside Second Circle.';
  } else if (distanceBetweenCirclesCentre < r0 + r1) {
    return 'Circles intersect each other.';
  } else if (distanceBetweenCirclesCentre == r0 + r1) {
    return 'First and Second Circles are touching each other.';
  } else {
    return 'First and Second Circles do not overlap.';
  }
};

document.addEventListener('click', (event) => {
  const totalCircles = document.querySelectorAll('.circle');
  if (totalCircles.length == 2) {
    totalCircles.forEach((circle) => {
      document.body.removeChild(circle);
      circleCoordinate.shift();
    });
  }

  const xCoordinate = event.clientX;
  const yCoordinate = event.clientY;

  const min = 10;
  const max = 100;

  const radius = Math.floor(Math.random() * (max - min + 1)) + min;

  circleCoordinate.push({ xCoordinate, yCoordinate, radius });

  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.top = (yCoordinate - radius) + 'px';
  circle.style.left = (xCoordinate - radius) + 'px';
  circle.style.width = 2 * radius + 'px';
  circle.style.height = 2 * radius + 'px';

  // Add different border color based on the index of the circle
  if (circleCoordinate.length === 1) {
    circle.classList.add('first-circle');
  } else if (circleCoordinate.length === 2) {
    circle.classList.add('second-circle');
  }

  document.body.appendChild(circle);

  if (circleCoordinate.length === 2) {
    const res = isCirclesTouchingOrIntersecting();
    console.log(res);
  }
});



  
