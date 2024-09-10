let w, h, particles;
let particleDistance = 40;
let mouse = {
  x: undefined,
  y: undefined,
  radius: 100,
};
let mouseMoving = false;
let visibilityRadius = 150;

function init(canvas) {
  const ctx = canvas.getContext('2d');
  resizeReset(canvas);
  animationLoop(ctx);
}

function resizeReset(canvas) {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

  particles = [];
  for (
    let y = (((h - particleDistance) % particleDistance) + particleDistance) / 2;
    y < h;
    y += particleDistance
  ) {
    for (
      let x = (((w - particleDistance) % particleDistance) + particleDistance) / 2;
      x < w;
      x += particleDistance
    ) {
      particles.push(new Particle(x, y));
    }
  }
}

function animationLoop(ctx) {
  ctx.clearRect(0, 0, w, h);
  drawScene(ctx);
  requestAnimationFrame(() => animationLoop(ctx));
}

function drawScene(ctx) {
  for (let i = 0; i < particles.length; i++) {
    let dx = particles[i].x - mouse.x;
    let dy = particles[i].y - mouse.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < visibilityRadius) {
      particles[i].update();
      particles[i].draw(ctx, mouseMoving);
    }
  }
  drawLine(ctx);
}

function drawLine(ctx) {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      let distanceA = Math.sqrt((particles[a].x - mouse.x) ** 2 + (particles[a].y - mouse.y) ** 2);
      let distanceB = Math.sqrt((particles[b].x - mouse.x) ** 2 + (particles[b].y - mouse.y) ** 2);

      if (distance < particleDistance * 1.5 && (distanceA < visibilityRadius || distanceB < visibilityRadius)) {
        let opacity = mouseMoving ? 1 - distance / (particleDistance * 1.5) : 0.2;
        ctx.strokeStyle = `rgba(173, 216, 230, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function mousemove(e) {
  mouse.x = e.x;
  mouse.y = e.y;
  mouseMoving = true;
}

function mouseout() {
  mouse.x = undefined;
  mouse.y = undefined;
  mouseMoving = false;
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 4;
    this.baseX = this.x;
    this.baseY = this.y;
    this.speed = Math.random() * 25 + 5;
  }
  draw(ctx, isMouseMoving) {
    ctx.fillStyle = isMouseMoving ? 'rgba(173, 216, 230, 1)' : 'rgba(173, 216, 230, 0.5)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let directionX = forceDirectionX * force * this.speed;
    let directionY = forceDirectionY * force * this.speed;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

export { init, resizeReset, mousemove, mouseout };
