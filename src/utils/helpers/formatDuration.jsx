export const formatDuration = (duration) =>
  `${parseInt(duration / 60)}h ${duration % 60}min`;
