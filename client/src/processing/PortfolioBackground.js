import React, { useEffect, useRef } from "react";
import p5 from "p5";

const PortfolioBackground = (props) => {
  let myP5;
  let stars = [];
  let count;

  const myRef = useRef();

  useEffect(() => {
    myP5 = new p5(sketch, myRef.current);

    // Cleanup function
    return () => {
      myP5.remove();
    };
  }, []);

  const sketch = (p) => {
    class Star {
      constructor() {
        this.reset();
        this.radius = p.random(1, 10);
        this.shrinkTime = 0;
        this.respawning = p.random(1) < 0.5;
      }

      reset() {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.brightness = p.random(90, 100);
        this.shrinkRate = p.random(0.001, 0.01);
      }

      update() {
        this.shrinkTime++;
        if (this.shrinkTime > 50 && p.random(1) < 0.01) {
          this.brightness = p.random(90, 100);
          this.shrinkRate = p.random(0.001, 0.01);
          this.shrinkTime = 0;
        }
        if (this.radius <= 0) {
          this.respawn();
        }
        if (this.respawning) {
          this.radius += this.shrinkRate;
          if (this.radius >= 10) {
            this.respawning = false;
          }
        } else {
          this.radius -= this.shrinkRate;
        }
      }

      respawn() {
        this.reset();
        this.respawning = true;
      }

      show() {
        p.fill(0, 0, this.brightness);
        p.noStroke();
        p.circle(this.x, this.y, this.radius);
      }
    }

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.colorMode(p.HSB, 360, 100, 100);
      count = Math.floor((p.width + p.height) / 50);

      for (let i = 0; i < count; i++) {
        stars.push(new Star());
      }
    };

    p.draw = () => {
      p.background(10);
      stars.forEach((s) => {
        s.update();
        s.show();
      });

      handleMouseMove();
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    function handleMouseMove() {
      let radius = 1000;
      let steps = 25;
      for (let i = 0; i < steps; i++) {
        let interp = p.map(i, 0, steps - 1, 0, 1);
        let colorValue = p.lerpColor(p.color(25), p.color(255), interp);
        p.fill(colorValue, 0, 10);
        let circleRadius = p.map(i, 0, steps - 1, radius, 0);
        p.circle(p.mouseX, p.mouseY, circleRadius);
      }
    }
  };

  return (
    <div
      ref={myRef}
      id="canvas-container"
      className="portfolio-background"
      style={props.style}
    ></div>
  );
};

export default PortfolioBackground;
