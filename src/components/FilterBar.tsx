import { motion } from 'framer-motion';
import { Sport } from '../data/sportsData';

interface FilterBarProps {
  sports: Sport[];
  months: string[];
  countries: string[];
  selectedSport: Sport | 'all';
  selectedMonth: string;
  selectedCountry: string;
  onSportChange: (sport: Sport | 'all') => void;
  onMonthChange: (month: string) => void;
  onCountryChange: (country: string) => void;
}

const sportIcons: Record<Sport | 'all', string> = {
  all: '◉',
  Football: '⚽',
  Basketball: '🏀',
  Tennis: '🎾',
  'Formula 1': '🏎️',
  Cricket: '🏏',
  Rugby: '🏉',
};

const sportColors: Record<Sport | 'all', string> = {
  all: '#F5F0E8',
  Football: '#10B981',
  Basketball: '#F97316',
  Tennis: '#84CC16',
  'Formula 1': '#EF4444',
  Cricket: '#F59E0B',
  Rugby: '#14B8A6',
};

export default function FilterBar({
  sports,
  months,
  countries,
  selectedSport,
  selectedMonth,
  selectedCountry,
  onSportChange,
  onMonthChange,
  onCountryChange,
}: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-6"
    >
      {/* Sport Pills */}
      <div className="flex flex-wrap gap-3">
        {(['all', ...sports] as (Sport | 'all')[]).map((sport) => (
          <motion.button
            key={sport}
            onClick={() => onSportChange(sport)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-5 py-2.5 rounded-full font-display text-sm tracking-wider uppercase
              transition-all duration-300 overflow-hidden group
              ${selectedSport === sport
                ? 'text-[#0D0D0D]'
                : 'text-[#F5F0E8]/60 hover:text-[#F5F0E8] border border-[#F5F0E8]/10 hover:border-[#F5F0E8]/30'
              }
            `}
            style={{
              backgroundColor: selectedSport === sport ? sportColors[sport] : 'transparent',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-base">{sportIcons[sport]}</span>
              {sport === 'all' ? 'All Sports' : sport}
            </span>
            {selectedSport !== sport && (
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: sportColors[sport] }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Dropdown Filters */}
      <div className="flex flex-wrap gap-4">
        <FilterSelect
          label="Month"
          value={selectedMonth}
          options={['all', ...months]}
          onChange={onMonthChange}
        />
        <FilterSelect
          label="Country"
          value={selectedCountry}
          options={['all', ...countries]}
          onChange={onCountryChange}
        />
      </div>
    </motion.div>
  );
}

interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <div className="relative group">
      <label className="absolute -top-2.5 left-4 px-2 bg-[#0D0D0D] text-[10px] text-[#F5F0E8]/40 tracking-[0.2em] uppercase font-serif z-10">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          appearance-none bg-transparent border border-[#F5F0E8]/15 rounded-lg
          px-5 py-3 pr-12 font-serif text-sm text-[#F5F0E8]/80
          focus:outline-none focus:border-[#F5F0E8]/40
          hover:border-[#F5F0E8]/30 transition-colors duration-300
          cursor-pointer min-w-[180px]
        "
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#1A1A1A] text-[#F5F0E8]">
            {option === 'all' ? `All ${label}s` : option}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#F5F0E8]/40 group-hover:text-[#F5F0E8]/60 transition-colors">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
