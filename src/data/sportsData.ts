export type Sport = 'Football' | 'Basketball' | 'Tennis' | 'Formula 1' | 'Cricket' | 'Rugby';

export interface Event {
  name: string;
  date: string;
  time: string;
  location: string;
  country: string;
  month: string;
}

export interface SportData {
  name: Sport;
  color: string;
  events: Event[];
}

export const sportsData: SportData[] = [
  {
    name: 'Football',
    color: '#10B981',
    events: [
      { name: 'UEFA Champions League Final', date: '2025-05-31', time: '21:00', location: 'Allianz Arena', country: 'Germany', month: 'May' },
      { name: 'FIFA Club World Cup', date: '2025-06-15', time: '20:00', location: 'MetLife Stadium', country: 'USA', month: 'June' },
      { name: 'Copa America Final', date: '2025-07-14', time: '20:00', location: 'Hard Rock Stadium', country: 'USA', month: 'July' },
      { name: 'Premier League Season Opener', date: '2025-08-16', time: '15:00', location: 'Various Stadiums', country: 'England', month: 'August' },
      { name: 'El Clasico', date: '2025-10-26', time: '21:00', location: 'Santiago Bernabeu', country: 'Spain', month: 'October' },
      { name: 'Manchester Derby', date: '2025-03-08', time: '17:30', location: 'Old Trafford', country: 'England', month: 'March' },
      { name: 'FA Cup Final', date: '2025-05-17', time: '15:00', location: 'Wembley Stadium', country: 'England', month: 'May' },
      { name: 'Serie A Derby della Madonnina', date: '2025-09-21', time: '20:45', location: 'San Siro', country: 'Italy', month: 'September' },
    ],
  },
  {
    name: 'Basketball',
    color: '#F97316',
    events: [
      { name: 'NBA Finals Game 1', date: '2025-06-05', time: '21:00', location: 'TBD Arena', country: 'USA', month: 'June' },
      { name: 'NBA All-Star Game', date: '2025-02-16', time: '20:00', location: 'Chase Center', country: 'USA', month: 'February' },
      { name: 'EuroLeague Final Four', date: '2025-05-23', time: '21:00', location: 'Stark Arena', country: 'Serbia', month: 'May' },
      { name: 'FIBA World Cup Qualifiers', date: '2025-02-21', time: '19:00', location: 'Various', country: 'Global', month: 'February' },
      { name: 'NBA Christmas Day Games', date: '2025-12-25', time: '12:00', location: 'Multiple Arenas', country: 'USA', month: 'December' },
      { name: 'Lakers vs Celtics Classic', date: '2025-01-23', time: '19:30', location: 'TD Garden', country: 'USA', month: 'January' },
      { name: 'NBA Draft', date: '2025-06-26', time: '20:00', location: 'Barclays Center', country: 'USA', month: 'June' },
    ],
  },
  {
    name: 'Tennis',
    color: '#84CC16',
    events: [
      { name: 'Australian Open Final', date: '2025-01-26', time: '19:30', location: 'Rod Laver Arena', country: 'Australia', month: 'January' },
      { name: 'French Open Final', date: '2025-06-08', time: '15:00', location: 'Roland Garros', country: 'France', month: 'June' },
      { name: 'Wimbledon Final', date: '2025-07-13', time: '14:00', location: 'Centre Court', country: 'England', month: 'July' },
      { name: 'US Open Final', date: '2025-09-07', time: '16:00', location: 'Arthur Ashe Stadium', country: 'USA', month: 'September' },
      { name: 'ATP Finals', date: '2025-11-16', time: '18:00', location: 'Pala Alpitour', country: 'Italy', month: 'November' },
      { name: 'Indian Wells Masters', date: '2025-03-16', time: '13:00', location: 'Indian Wells Tennis Garden', country: 'USA', month: 'March' },
      { name: 'Miami Open Final', date: '2025-03-30', time: '13:00', location: 'Hard Rock Stadium', country: 'USA', month: 'March' },
    ],
  },
  {
    name: 'Formula 1',
    color: '#EF4444',
    events: [
      { name: 'Monaco Grand Prix', date: '2025-05-25', time: '15:00', location: 'Circuit de Monaco', country: 'Monaco', month: 'May' },
      { name: 'British Grand Prix', date: '2025-07-06', time: '15:00', location: 'Silverstone Circuit', country: 'England', month: 'July' },
      { name: 'Italian Grand Prix', date: '2025-09-07', time: '15:00', location: 'Autodromo di Monza', country: 'Italy', month: 'September' },
      { name: 'Singapore Grand Prix', date: '2025-10-05', time: '20:00', location: 'Marina Bay Street', country: 'Singapore', month: 'October' },
      { name: 'Abu Dhabi Grand Prix', date: '2025-12-07', time: '17:00', location: 'Yas Marina Circuit', country: 'UAE', month: 'December' },
      { name: 'Australian Grand Prix', date: '2025-03-16', time: '15:00', location: 'Albert Park', country: 'Australia', month: 'March' },
      { name: 'Japanese Grand Prix', date: '2025-04-06', time: '14:00', location: 'Suzuka Circuit', country: 'Japan', month: 'April' },
      { name: 'Las Vegas Grand Prix', date: '2025-11-22', time: '22:00', location: 'Las Vegas Strip', country: 'USA', month: 'November' },
    ],
  },
  {
    name: 'Cricket',
    color: '#F59E0B',
    events: [
      { name: 'ICC Champions Trophy Final', date: '2025-03-09', time: '14:00', location: 'Lahore Stadium', country: 'Pakistan', month: 'March' },
      { name: 'IPL Final', date: '2025-05-25', time: '19:30', location: 'Narendra Modi Stadium', country: 'India', month: 'May' },
      { name: 'The Ashes - 1st Test', date: '2025-11-21', time: '10:30', location: 'The Gabba', country: 'Australia', month: 'November' },
      { name: 'T20 World Cup Final', date: '2026-02-28', time: '19:00', location: 'Eden Gardens', country: 'India', month: 'February' },
      { name: 'Big Bash League Final', date: '2025-01-27', time: '19:15', location: 'MCG', country: 'Australia', month: 'January' },
      { name: 'The Hundred Final', date: '2025-08-17', time: '14:30', location: 'Lords', country: 'England', month: 'August' },
    ],
  },
  {
    name: 'Rugby',
    color: '#14B8A6',
    events: [
      { name: 'Six Nations - England vs France', date: '2025-02-08', time: '16:45', location: 'Twickenham', country: 'England', month: 'February' },
      { name: 'Six Nations - Ireland vs Wales', date: '2025-02-01', time: '14:15', location: 'Aviva Stadium', country: 'Ireland', month: 'February' },
      { name: 'Super Rugby Final', date: '2025-06-21', time: '19:05', location: 'TBD', country: 'New Zealand', month: 'June' },
      { name: 'Rugby Championship Opener', date: '2025-08-16', time: '17:05', location: 'Ellis Park', country: 'South Africa', month: 'August' },
      { name: 'Premiership Rugby Final', date: '2025-06-14', time: '15:00', location: 'Twickenham', country: 'England', month: 'June' },
      { name: 'Lions Tour - 1st Test', date: '2025-07-19', time: '17:00', location: 'ANZ Stadium', country: 'Australia', month: 'July' },
    ],
  },
];
