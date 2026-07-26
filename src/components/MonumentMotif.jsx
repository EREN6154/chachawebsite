export default function MonumentMotif({ opacity = 0.9 }) {
  return (
    <div className="hero-motif" style={{ opacity }}>
      <svg viewBox="0 0 800 260" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="230" width="800" height="30" fill="#E8A33D" opacity="0.15" />
        <rect x="150" y="170" width="10" height="60" fill="#E8A33D" opacity="0.3" />
        <circle cx="155" cy="160" r="14" fill="#E8A33D" opacity="0.3" />
        <rect x="250" y="140" width="12" height="90" fill="#E8A33D" opacity="0.4" />
        <circle cx="256" cy="128" r="16" fill="#E8A33D" opacity="0.4" />
        <path d="M330,230 L330,140 Q330,90 400,90 Q470,90 470,140 L470,230 Z" fill="#E8A33D" opacity="0.55" />
        <circle cx="400" cy="80" r="42" fill="#E8A33D" opacity="0.6" />
        <rect x="396" y="20" width="8" height="30" fill="#E8A33D" opacity="0.6" />
        <circle cx="400" cy="18" r="6" fill="#E8A33D" opacity="0.6" />
        <rect x="538" y="140" width="12" height="90" fill="#E8A33D" opacity="0.4" />
        <circle cx="544" cy="128" r="16" fill="#E8A33D" opacity="0.4" />
        <rect x="640" y="170" width="10" height="60" fill="#E8A33D" opacity="0.3" />
        <circle cx="645" cy="160" r="14" fill="#E8A33D" opacity="0.3" />
      </svg>
    </div>
  );
}
