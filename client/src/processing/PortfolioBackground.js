import React, { useEffect, useRef, useCallback } from "react";
import p5 from "p5";

const PortfolioBackground = (props) => {
  let stars = [];
  let count;

  const myRef = useRef();
  const myP5 = useRef();

  let sketch = useCallback((p) => {
    // Your sketch function here...
  }, []); // Include any dependencies of the sketch function here

  useEffect(() => {
    myP5.current = new p5(sketch, myRef.current);

    return () => {
      myP5.current.remove();
    };
  }, [sketch]);

  sketch = (p) => {
    class Star {
      constructor() {
        this.reset();
        this.radius = p.random(1, 5);
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
          if (this.radius >= 5) {
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
      count = Math.floor((p.width + p.height) / 20);

      for (let i = 0; i < count; i++) {
        stars.push(new Star());
      }
    };

    p.draw = () => {
      // Create a gradient background with purple, blue, and black
      p.background(240, 100, 10);

      stars.forEach((s) => {
        s.update();
        s.show();
      });

      // if count changes, add or remove stars
      let newCount = Math.floor((p.width + p.height) / 20);
      if (newCount > count) {
        for (let i = count; i < newCount; i++) {
          stars.push(new Star());
        }
      } else if (newCount < count) {
        stars.splice(newCount);
      }
      count = newCount;
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };

  return (
    <div
      ref={myRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {props.children}
    </div>
  );
};

export default PortfolioBackground;
