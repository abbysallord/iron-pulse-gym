import React, { useState } from 'react';
import { Dumbbell, Flame, Trophy, Users, Zap, Clock, MapPin, Phone, CheckCircle2, ChevronRight, Menu as MenuIcon, X } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('strength');
  const [passRequested, setPassRequested] = useState(false);
  const [passName, setPassName] = useState('');

  const handlePassSubmit = (e) => {
    e.preventDefault();
    if (passName.trim()) {
      setPassRequested(true);
    }
  };

  const programs = {
    strength: {
      title: "STRENGTH & POWERLIFTING",
      desc: "Olympic lifting platforms, calibrated Eleiko plates, competition racks, and expert coaching to shatter your PRs.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      stats: ["500kg Deadlift Platforms", "Competition Bumper Plates", "Chalk Provided"]
    },
    hypertrophy: {
      title: "BODYBUILDING & HYPERTROPHY",
      desc: "State-of-the-art selectorized and plate-loaded machines designed for maximum isolation and muscle growth.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      stats: ["Dumbbells up to 150 lbs", "Isolated Cable Towers", "Posing Mirrors"]
    },
    conditioning: {
      title: "HIIT & FUNCTIONAL FITNESS",
      desc: "Turf tracks, sleds, battle ropes, assault bikes, and rowers engineered to torch fat and skyrocket endurance.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      stats: ["30m Astro Turf", "Concept2 Ergometers", "Plyo Boxes"]
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-red-600 selection:text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg text-white">
              <Dumbbell className="w-6 h-6 animate-pulse" />
            </div>
            <span className="text-xl font-black tracking-wider italic uppercase">IRON <span className="text-red-600">PULSE</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
            <a href="#features" className="hover:text-red-500 transition">WHY US</a>
            <a href="#programs" className="hover:text-red-500 transition">PROGRAMS</a>
            <a href="#schedule" className="hover:text-red-500 transition">CLASSES</a>
            <a href="#pricing" className="hover:text-red-500 transition">MEMBERSHIP</a>
            <a href="#pass" className="hover:text-red-500 transition">FREE PASS</a>
          </nav>

          <div className="hidden md:block">
            <a href="#pricing" className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg transition tracking-wide text-sm shadow-lg shadow-red-600/30">
              JOIN THE ELITE
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-neutral-300 hover:text-white">
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-6 space-y-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-semibold hover:text-red-500">WHY US</a>
            <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-semibold hover:text-red-500">PROGRAMS</a>
            <a href="#schedule" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-semibold hover:text-red-500">CLASSES</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-semibold hover:text-red-500">MEMBERSHIP</a>
            <a href="#pass" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-semibold hover:text-red-500">FREE PASS</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-red-600 text-white font-bold py-3 rounded-lg">JOIN THE ELITE</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85" 
            alt="Gym background" 
            className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-600/40 px-4 py-2 rounded-full text-red-400 text-xs font-bold tracking-widest uppercase">
            <Flame className="w-4 h-4 text-red-500 animate-bounce" /> 24/7 HARDCORE TRAINING FACILITY
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase leading-none">
            FORGE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-glow">LEGACY.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-normal">
            No gimmicks. No excuses. Just elite equipment, raw atmosphere, and the unstoppable drive to transform your physique.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#pass" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded-xl transition tracking-wider text-base shadow-xl shadow-red-600/40 flex items-center justify-center gap-3">
              CLAIM 1-DAY FREE PASS <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#programs" className="w-full sm:w-auto bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 font-bold px-8 py-4 rounded-xl border border-neutral-700 transition tracking-wider text-base flex items-center justify-center gap-2">
              EXPLORE PROGRAMS
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto border-t border-neutral-800/80 text-left">
            <div className="bg-neutral-900/40 backdrop-blur border border-neutral-800/60 p-4 rounded-xl">
              <p className="text-3xl font-black text-red-500 italic">15,000</p>
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mt-1">SQ. FT. TRAINING FLOOR</p>
            </div>
            <div className="bg-neutral-900/40 backdrop-blur border border-neutral-800/60 p-4 rounded-xl">
              <p className="text-3xl font-black text-red-500 italic">100+</p>
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mt-1">PRO MACHINES</p>
            </div>
            <div className="bg-neutral-900/40 backdrop-blur border border-neutral-800/60 p-4 rounded-xl">
              <p className="text-3xl font-black text-red-500 italic">24 / 7</p>
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mt-1">UNRESTRICTED ACCESS</p>
            </div>
            <div className="bg-neutral-900/40 backdrop-blur border border-neutral-800/60 p-4 rounded-xl">
              <p className="text-3xl font-black text-red-500 italic">12+</p>
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mt-1">EXPERT TRAINERS</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-neutral-900/50 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-red-500 tracking-widest uppercase">THE IRON ADVANTAGE</h2>
            <p className="text-3xl md:text-5xl font-black italic uppercase">BUILT FOR THOSE WHO DEMAND MORE</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition group">
              <div className="w-14 h-14 bg-red-600/10 border border-red-600/30 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition">
                <Dumbbell className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold tracking-wide">ELITE GRADE EQUIPMENT</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Imported competition-grade machines, heavy-duty racks, and specialized bars engineered for maximum ergonomic biomechanics and zero compromises.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition group">
              <div className="w-14 h-14 bg-red-600/10 border border-red-600/30 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold tracking-wide">24/7 SECURE ACCESS</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Train on your schedule. Biometric entry gives you round-the-clock access to crush your workouts at 3 AM or mid-day.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition group">
              <div className="w-14 h-14 bg-red-600/10 border border-red-600/30 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold tracking-wide">UNCOMPROMISING CULTURE</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Surround yourself with dedicated athletes, powerlifters, and fitness enthusiasts who push each other to break limits every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-xs font-bold text-red-500 tracking-widest uppercase">TRAINING ARSENAL</h2>
            <p className="text-3xl md:text-5xl font-black italic uppercase">CHOOSE YOUR BATTLEFIELD</p>
          </div>

          <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
            {Object.keys(programs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition ${
                  activeTab === key 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' 
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-red-500 font-bold text-xs tracking-widest uppercase">PROVEN RESULTS</span>
                <h3 className="text-3xl md:text-4xl font-black italic uppercase">{programs[activeTab].title}</h3>
                <p className="text-neutral-400 text-base leading-relaxed">{programs[activeTab].desc}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800">
                {programs[activeTab].stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-200 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>

              <div>
                <a href="#pass" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 rounded-xl transition text-sm">
                  TEST THIS ZONE FREE <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative min-h-[300px] lg:min-h-full">
              <img 
                src={programs[activeTab].image} 
                alt={programs[activeTab].title} 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE SECTION */}
      <section id="schedule" className="py-24 bg-neutral-900/50 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-red-500 tracking-widest uppercase">HIGH INTENSITY CLASSES</h2>
            <p className="text-3xl md:text-5xl font-black italic uppercase">DAILY BOOTCAMPS & SESSIONS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center text-xs font-bold text-neutral-400">
                <span className="bg-red-950 text-red-400 px-3 py-1 rounded-full border border-red-900/50">06:00 AM</span>
                <span>45 MINS</span>
              </div>
              <h3 className="text-xl font-bold uppercase italic">RAW STRENGTH CIRCUIT</h3>
              <p className="text-neutral-400 text-sm">Compound lifts, kettlebells, and explosive power movements to jumpstart your day.</p>
              <div className="pt-4 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-400">
                <span>Trainer: Marcus Vance</span>
                <span className="text-red-500 font-bold">12 spots left</span>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center text-xs font-bold text-neutral-400">
                <span className="bg-red-950 text-red-400 px-3 py-1 rounded-full border border-red-900/50">05:30 PM</span>
                <span>60 MINS</span>
              </div>
              <h3 className="text-xl font-bold uppercase italic">METABOLIC CONDITIONING</h3>
              <p className="text-neutral-400 text-sm">High-speed sled pushes, rower intervals, and core shredding complexes.</p>
              <div className="pt-4 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-400">
                <span>Trainer: Sarah Jenkins</span>
                <span className="text-red-500 font-bold">5 spots left</span>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center text-xs font-bold text-neutral-400">
                <span className="bg-red-950 text-red-400 px-3 py-1 rounded-full border border-red-900/50">07:00 PM</span>
                <span>50 MINS</span>
              </div>
              <h3 className="text-xl font-bold uppercase italic">POWERLIFTING LAB</h3>
              <p className="text-neutral-400 text-sm">Deep dive technical breakdown of Squat, Bench, and Deadlift mechanics.</p>
              <div className="pt-4 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-400">
                <span>Trainer: Jaxson Steel</span>
                <span className="text-red-500 font-bold">8 spots left</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-red-500 tracking-widest uppercase">INVEST IN YOURSELF</h2>
            <p className="text-3xl md:text-5xl font-black italic uppercase">MEMBERSHIP TIERS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase tracking-wider text-neutral-300">MONTH-TO-MONTH</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black italic">$69</span>
                  <span className="text-xs text-neutral-400 font-bold">/ MONTH</span>
                </div>
                <p className="text-neutral-400 text-sm">For those who want maximum flexibility with zero long-term commitment.</p>
                <div className="space-y-3 pt-4 border-t border-neutral-800">
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> 24/7 Gym Access</div>
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> Locker Room & Showers</div>
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> Free Fitness Assessment</div>
                </div>
              </div>
              <a href="#pass" className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 rounded-xl transition text-center text-sm">
                GET STARTED
              </a>
            </div>

            <div className="bg-neutral-900 border-2 border-red-600 p-8 rounded-3xl space-y-6 flex flex-col justify-between relative shadow-2xl shadow-red-600/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-black uppercase px-4 py-1 rounded-full tracking-widest">
                MOST POPULAR
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase tracking-wider text-white">ANNUAL ELITE</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black italic text-red-500">$49</span>
                  <span className="text-xs text-neutral-400 font-bold">/ MONTH</span>
                </div>
                <p className="text-neutral-400 text-sm">Billed annually ($588). Save 30% and get unlimited guest passes.</p>
                <div className="space-y-3 pt-4 border-t border-neutral-800">
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> Everything in Monthly</div>
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> 2 Guest Passes / Month</div>
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> Free Iron Pulse Shaker</div>
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> 1 Free PT Session</div>
                </div>
              </div>
              <a href="#pass" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition text-center text-sm shadow-lg shadow-red-600/40">
                JOIN THE ELITE
              </a>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase tracking-wider text-neutral-300">VIP ALL-ACCESS</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black italic">$99</span>
                  <span className="text-xs text-neutral-400 font-bold">/ MONTH</span>
                </div>
                <p className="text-neutral-400 text-sm">The ultimate package with custom programming and recovery lounge access.</p>
                <div className="space-y-3 pt-4 border-t border-neutral-800">
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> Unlimited Guest Passes</div>
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> Saunas & Cold Plunges</div>
                  <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-red-500" /> Monthly Body Composition Scan</div>
                </div>
              </div>
              <a href="#pass" className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 rounded-xl transition text-center text-sm">
                GO VIP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FREE PASS SECTION */}
      <section id="pass" className="py-24 bg-neutral-900/50 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 bg-red-950 text-red-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-red-900">
                <Trophy className="w-4 h-4 text-red-500" /> NO OBLIGATION
              </div>

              <h2 className="text-3xl md:text-5xl font-black italic uppercase">CLAIM YOUR 1-DAY FREE PASS</h2>
              <p className="text-neutral-400 text-base">
                Experience Iron Pulse Gym firsthand. Test our equipment, meet our trainers, and feel the energy.
              </p>

              {passRequested ? (
                <div className="bg-red-950/80 border border-red-600/50 p-6 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-red-500 mx-auto" />
                  <p className="text-lg font-bold text-white">PASS SECURED, {passName.toUpperCase()}!</p>
                  <p className="text-xs text-neutral-300">We've sent your digital day pass QR code to your phone. Show it at the front desk when you arrive.</p>
                </div>
              ) : (
                <form onSubmit={handlePassSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your full name" 
                    value={passName}
                    onChange={(e) => setPassName(e.target.value)}
                    className="flex-1 bg-neutral-950 border border-neutral-800 px-4 py-3 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-600"
                  />
                  <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition text-sm tracking-wide">
                    GET FREE PASS
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-neutral-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-1.5 rounded-lg text-white">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-wider italic uppercase text-white">IRON <span className="text-red-600">PULSE</span></span>
            </div>
            <p className="text-xs text-neutral-400">
              The ultimate hardcore training facility for athletes who refuse to settle.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">HOURS OF OPERATION</h4>
            <div className="flex items-center gap-2 text-xs">
              <Clock className="w-4 h-4 text-red-500" />
              <span>Monday – Sunday: 24 / 7</span>
            </div>
            <p className="text-xs text-neutral-500">Staffed Hours: 6:00 AM – 10:00 PM</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">LOCATION</h4>
            <div className="flex items-start gap-2 text-xs">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>742 Evergreen Terrace, Iron District, Workout City</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">CONTACT</h4>
            <div className="flex items-center gap-2 text-xs">
              <Phone className="w-4 h-4 text-red-500" />
              <span>+1 (555) 987-IRON</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-500">
          © 2026 IRON PULSE GYM. ALL RIGHTS RESERVED. FORGED IN STEEL.
        </div>
      </footer>
    </div>
  );
}
