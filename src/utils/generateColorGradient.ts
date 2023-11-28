const lerpColor = (color1: string, color2: string, t: number) => {
  // Extract RGB components from hexadecimal color strings
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);

  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);

  // Interpolate RGB components
  const r = Math.round((1 - t) * r1 + t * r2);
  const g = Math.round((1 - t) * g1 + t * g2);
  const b = Math.round((1 - t) * b1 + t * b2);

  // Convert RGB components back to hexadecimal
  const interpolatedColor = `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return interpolatedColor;
};

export const generateColorGradient = (
  startColor: string,
  endColor: string,
  steps: number,
) => {
  const gradient = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    gradient.push(lerpColor(startColor, endColor, t));
  }

  return gradient;
};
