const players = [
  { name: 'Bradley', rating: 91, position: 'FWD', goals: 27, ballon: 3, boots: 4, avatar: '👑', number: '09', tone: 'lime' },
  { name: 'Lenny', rating: 88, position: 'FWD', goals: 21, ballon: 1, boots: 1, avatar: '⚡', number: '11', tone: 'coral' },
  { name: 'James', rating: 86, position: 'MID', goals: 12, ballon: 0, boots: 0, avatar: '🎯', number: '08', tone: 'blue' },
  { name: 'Ryan', rating: 84, position: 'FWD', goals: 14, ballon: 2, boots: 3, avatar: '🔥', number: '10', tone: 'orange' },
  { name: 'Mark', rating: 81, position: 'MID', goals: 8, ballon: 0, boots: 0, avatar: '🎨', number: '06', tone: 'violet' },
  { name: 'Jayden', rating: 80, position: 'FWD', goals: 17, ballon: 0, boots: 0, avatar: '🚀', number: '07', tone: 'cyan' },
  { name: 'Danstan', rating: 78, position: 'GK', goals: 2, ballon: 0, boots: 0, avatar: '🧤', number: '01', tone: 'gold' },
  { name: 'Raymond', rating: 78, position: 'DEF', goals: 4, ballon: 0, boots: 0, avatar: '🛡️', number: '04', tone: 'slate' }
];

const ballonDorHistory = [
  { year: '2018', winner: 'Richard' }, { year: '2019', winner: 'Ryan' },
  { year: '2020', winner: 'Bradley' }, { year: '2021', winner: 'Lenny' },
  { year: '2022', winner: 'Bradley' }, { year: '2023', winner: 'Ryan' },
  { year: '2024', winner: 'Kelly' }, { year: '2025', winner: 'Bradley' }
];

const goldenBootHistory = [
  { year: '2018', winner: 'Leon' }, { year: '2019', winner: 'Manu' },
  { year: '2020', winner: 'Bradley' }, { year: '2021', winner: 'Ryan' },
  { year: '2022', winner: 'Lenny' }, { year: '2023', winner: 'Bradley' },
  { year: '2024', winner: 'Ryan' }, { year: '2025', winner: 'Bradley' },
  { year: '2026 · Apr', winner: 'Ryan' }, { year: '2026 · Aug', winner: 'Bradley' },
  { year: '2026 · Oct', winner: 'Bradley' }
];

const topScorers = [...players]
  .sort((a, b) => b.goals - a.goals)
  .map((player, index) => ({ ...player, rank: index + 1 }));
