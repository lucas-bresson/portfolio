export default function ProgressCircle({
  type,
  strokeWidth,
  strokeColor,
  progress,
  className = '',
}: {
  type: 'small' | 'large';
  strokeWidth: number;
  strokeColor: string;
  progress: number;
  className?: string;
}) {
  const radius = type === 'small' ? 136 : 235;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className={`${className} progress-ring__circle`}
    >
      <circle
        stroke={strokeColor}
        fill="transparent"
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}
