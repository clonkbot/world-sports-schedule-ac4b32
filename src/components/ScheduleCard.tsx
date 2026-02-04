import { motion } from 'framer-motion';
import { Event } from '../data/sportsData';

interface ScheduleCardProps {
  event: Event & { sport: string; sportColor: string };
  index: number;
}

export default function ScheduleCard({ event, index }: ScheduleCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    };
  };

  const dateInfo = formatDate(event.date);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        layout: { duration: 0.3 },
      }}
      whileHover={{ y: -8 }}
      className="group relative bg-[#141414] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 -translate-y-12 translate-x-12 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: event.sportColor }}
      />

      {/* Sport indicator line */}
      <div
        className="absolute top-0 left-0 w-1 h-full transition-all duration-500 group-hover:w-1.5"
        style={{ backgroundColor: event.sportColor }}
      />

      <div className="p-6 pl-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] font-display tracking-[0.2em] uppercase px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${event.sportColor}20`,
                color: event.sportColor,
              }}
            >
              {event.sport}
            </span>
          </div>

          {/* Date block */}
          <div className="text-right">
            <div className="text-[10px] text-[#F5F0E8]/40 font-serif tracking-wider">
              {dateInfo.weekday}
            </div>
            <div className="font-display text-3xl leading-none text-[#F5F0E8]">
              {dateInfo.day}
            </div>
            <div className="text-[10px] text-[#F5F0E8]/40 font-serif tracking-wider">
              {dateInfo.month}
            </div>
          </div>
        </div>

        {/* Event name */}
        <h3 className="font-display text-xl mb-4 text-[#F5F0E8] group-hover:text-white transition-colors leading-tight">
          {event.name}
        </h3>

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <DetailItem label="Location" value={event.location} />
          <DetailItem label="Country" value={event.country} />
          <DetailItem label="Time" value={event.time} />
          <DetailItem label="Month" value={event.month} />
        </div>

        {/* Hover reveal button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div
            className="inline-flex items-center gap-2 text-xs font-display tracking-wider uppercase"
            style={{ color: event.sportColor }}
          >
            View Details
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${event.sportColor}50, transparent)`,
        }}
      />
    </motion.article>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] text-[#F5F0E8]/30 font-serif tracking-wider uppercase mb-1">
        {label}
      </div>
      <div className="text-[#F5F0E8]/70 font-serif text-sm truncate">{value}</div>
    </div>
  );
}
