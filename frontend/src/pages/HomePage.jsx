import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Server, 
  Database, 
  Layers, 
  Sparkles,
  RefreshCw,
  AlertCircle,
  Home,
  Building,
  Key
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export const HomePage = () => {
  const [healthData, setHealthData] = useState(null);
  const [loadingHealth, setLoadingHealth] = useState(true);
  const [healthError, setHealthError] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');

  const navigate = useNavigate();

  const fetchHealth = async () => {
    setLoadingHealth(true);
    setHealthError(null);
    try {
      const res = await API.get('/health');
      setHealthData(res.data);
    } catch (err) {
      setHealthError(err.message || 'Could not connect to backend server');
    } finally {
      setLoadingHealth(false);
    }
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchLocation.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchLocation.trim())}`);
    } else {
      navigate('/explore');
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-800 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Discover Verified Hotels, Villas & Apartments</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Find Your Next Perfect Stay with <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">WonderLust</span>
          </h1>
          
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Explore handpicked apartments, luxury villas, boutique hotels, and cozy cottages. Verified hosts, transparent booking, and seamless reservations.
          </p>

          {/* Functional Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-10 max-w-4xl mx-auto bg-white p-3 rounded-2xl sm:rounded-full shadow-xl shadow-slate-200/80 border border-slate-200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              
              {/* Location Input */}
              <div className="px-4 py-2 text-left sm:col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Where
                </label>
                <div className="flex items-center gap-2 mt-0.5">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search by city or country (e.g. Mumbai, Goa, Jaipur)"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Property Type Preview */}
              <div className="px-4 py-2 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Property
                </label>
                <div className="flex items-center gap-2 mt-0.5">
                  <Home className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    All Categories
                  </span>
                </div>
              </div>

              {/* Search Button */}
              <div className="px-4 py-2 flex items-center justify-between gap-2">
                <div className="text-left">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Guests
                  </label>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Users className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      1+ Guests
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex items-center justify-center hover:opacity-95 shadow-md shadow-indigo-300 transition-all shrink-0 cursor-pointer"
                  title="Search Properties"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

            </div>
          </form>

        </div>
      </section>

      {/* Live System Diagnostics / Platform Status Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <h2 className="text-lg font-bold text-slate-900">Platform Services & Database Status</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Real-time connectivity monitoring between React Client, Node.js Express API, and MongoDB.
              </p>
            </div>
            
            <button
              onClick={fetchHealth}
              disabled={loadingHealth}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingHealth ? 'animate-spin text-indigo-600' : ''}`} />
              <span>Refresh Status</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            
            {/* Backend Status */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-600 shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">REST API Server</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-800">
                    {healthData?.service || 'WonderLust Server'}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${healthData?.status === 'healthy' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {healthData?.status === 'healthy' ? 'ONLINE (Port 5000)' : 'CHECKING'}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Uptime: {healthData ? `${healthData.uptimeSeconds}s` : '...'}
                </p>
              </div>
            </div>

            {/* Database Status */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-600 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Database Engine</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-800">
                    {healthData?.database?.name ? `db: ${healthData.database.name}` : 'MongoDB'}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${healthData?.database?.status === 'Connected' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {healthData?.database?.status || 'Connecting'}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Host: {healthData?.database?.host || '127.0.0.1:27017'}
                </p>
              </div>
            </div>

            {/* Frontend Status */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-violet-100 text-violet-600 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Frontend Client</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-800">React + Vite</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                    ACTIVE (Port 5173)
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Tailwind CSS Responsive
                </p>
              </div>
            </div>

          </div>

          {healthError && (
            <div className="mt-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Backend Connectivity Issue: {healthError}. Ensure Express server is running on port 5000.</span>
            </div>
          )}
        </div>
      </section>

      {/* 3 Core Roles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Engineered for Three Distinct Roles
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Role-based authorization and customized workflows designed for comprehensive college project demonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Guest Role */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1. Guest / Traveler</h3>
            <p className="text-xs text-slate-500 mt-1">Book properties, manage reservations, write post-stay reviews.</p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Date conflict-free bookings</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Simulated payment checkout</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Favorites & booking history</li>
            </ul>
          </div>

          {/* Host Role */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">2. Property Host</h3>
            <p className="text-xs text-slate-500 mt-1">List apartments, villas & resorts, track incoming guests.</p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Complete property CRUD</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Pricing, amenities & images</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Real-time booking management</li>
            </ul>
          </div>

          {/* Admin Role */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">3. System Admin</h3>
            <p className="text-xs text-slate-500 mt-1">Platform governance, safety auditing, metrics & analytics.</p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> User & host moderation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Remove inappropriate listings</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Overall platform revenue & stats</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};
