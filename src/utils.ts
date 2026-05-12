import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple SVG-based diagram renderer for case studies
export function renderSimpleDiagram(type: 'flowchart' | 'roadmap', data: any) {
  if (type === 'flowchart') {
    return `
      <svg viewBox="0 0 400 200" class="w-full h-auto">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#2563eb" />
          </marker>
        </defs>
        <rect x="50" y="75" width="80" height="40" rx="8" fill="#1f2937" stroke="#374151" stroke-width="2"/>
        <text x="90" y="97" text-anchor="middle" fill="#f3f4f6" font-size="10" font-family="Arial">Problem</text>
        <rect x="170" y="75" width="80" height="40" rx="8" fill="#1f2937" stroke="#374151" stroke-width="2"/>
        <text x="210" y="97" text-anchor="middle" fill="#f3f4f6" font-size="10" font-family="Arial">Solution</text>
        <rect x="290" y="75" width="80" height="40" rx="8" fill="#1f2937" stroke="#374151" stroke-width="2"/>
        <text x="330" y="97" text-anchor="middle" fill="#f3f4f6" font-size="10" font-family="Arial">Impact</text>
        <line x1="130" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="250" y1="95" x2="290" y2="95" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead)"/>
      </svg>
    `;
  }

  if (type === 'roadmap') {
    return `
      <svg viewBox="0 0 400 150" class="w-full h-auto">
        <defs>
          <marker id="arrowhead-roadmap" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
          </marker>
        </defs>
        <circle cx="50" cy="75" r="15" fill="#10b981"/>
        <text x="50" y="80" text-anchor="middle" fill="white" font-size="8" font-weight="bold">1</text>
        <circle cx="150" cy="75" r="15" fill="#10b981"/>
        <text x="150" y="80" text-anchor="middle" fill="white" font-size="8" font-weight="bold">2</text>
        <circle cx="250" cy="75" r="15" fill="#10b981"/>
        <text x="250" y="80" text-anchor="middle" fill="white" font-size="8" font-weight="bold">3</text>
        <circle cx="350" cy="75" r="15" fill="#10b981"/>
        <text x="350" y="80" text-anchor="middle" fill="white" font-size="8" font-weight="bold">4</text>
        <line x1="65" y1="75" x2="135" y2="75" stroke="#10b981" stroke-width="3" marker-end="url(#arrowhead-roadmap)"/>
        <line x1="165" y1="75" x2="235" y2="75" stroke="#10b981" stroke-width="3" marker-end="url(#arrowhead-roadmap)"/>
        <line x1="265" y1="75" x2="335" y2="75" stroke="#10b981" stroke-width="3" marker-end="url(#arrowhead-roadmap)"/>
        <text x="50" y="110" text-anchor="middle" fill="#9ca3af" font-size="9">Planning</text>
        <text x="150" y="110" text-anchor="middle" fill="#9ca3af" font-size="9">Design</text>
        <text x="250" y="110" text-anchor="middle" fill="#9ca3af" font-size="9">Build</text>
        <text x="350" y="110" text-anchor="middle" fill="#9ca3af" font-size="9">Deploy</text>
      </svg>
    `;
  }

  return '';
}
