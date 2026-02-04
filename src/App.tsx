import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterBar from './components/FilterBar';
import ScheduleCard from './components/ScheduleCard';
import Header from './components/Header';
import Footer from './components/Footer';
import { sportsData, Sport, Event } from './data/sportsData';

type ExtendedEvent = Event & { sport: string; sportColor: string };

function App() {
  const [selectedSport, setSelectedSport] = useState<Sport | 'all'>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [filteredEvents, setFilteredEvents] = useState<ExtendedEvent[]>([]);

  const allEvents = sportsData.flatMap(sport =>
    sport.events.map(event => ({ ...event, sport: sport.name, sportColor: sport.color }))
  );

  useEffect(() => {
    let events = allEvents;

    if (selectedSport !== 'all') {
      events = events.filter(e => e.sport === selectedSport);
    }
    if (selectedMonth !== 'all') {
      events = events.filter(e => e.month === selectedMonth);
    }
    if (selectedCountry !== 'all') {
      events = events.filter(e => e.country === selectedCountry);
    }

    events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setFilteredEvents(events);
  }, [selectedSport, selectedMonth, selectedCountry]);

  const sports = sportsData.map(s => s.name);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const countries = [...new Set(allEvents.map(e => e.country))].sort();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F0E8] relative overflow-x-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient orbs */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-emerald-900/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-orange-900/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <FilterBar
            sports={sports}
            months={months}
            countries={countries}
            selectedSport={selectedSport}
            selectedMonth={selectedMonth}
            selectedCountry={selectedCountry}
            onSportChange={setSelectedSport}
            onMonthChange={setSelectedMonth}
            onCountryChange={setSelectedCountry}
          />

          <div className="mt-8 mb-4 flex items-center justify-between">
            <p className="text-[#F5F0E8]/50 font-serif text-sm tracking-wide">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
            </p>
            <div className="h-px flex-1 ml-6 bg-gradient-to-r from-[#F5F0E8]/10 to-transparent" />
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <ScheduleCard
                  key={`${event.sport}-${event.name}-${event.date}`}
                  event={event}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#F5F0E8]/30 font-serif text-xl">No events match your filters</p>
              <p className="text-[#F5F0E8]/20 font-serif text-sm mt-2">Try adjusting your selection</p>
            </motion.div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
