// Utility functions for data processing and formatting

export function formatNumber(num: number): string {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(2) + 'K';
  }
  return num.toFixed(0);
}

export function safeDiv(numerator: number, denominator: number): number {
  if (denominator === 0 || isNaN(denominator) || !isFinite(denominator)) {
    return 0;
  }
  const result = numerator / denominator;
  return isNaN(result) || !isFinite(result) ? 0 : result;
}

export function formatPercent(value: number): string {
  return (value * 100).toFixed(1) + '%';
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return seconds.toFixed(0) + 's';
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds.toFixed(0)}s`;
}

