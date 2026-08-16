import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/coffeeData';
import MenuModal from '../components/MenuModal';
import { Search, Sparkles, Filter, SlidersHorizontal, Info, Coffee } from 'lucide-react';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  // Filtered and sorted menu items
  const filteredItems = useMemo(() => {
    let result = MENU_ITEMS;

    // Filter by Category
    if (activeCategory !== 'all') {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          (item.details?.flavorNotes &&
            item.details.flavorNotes.some((note) => note.toLowerCase().includes(q)))
      );
    }

    // Sort by Price
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-12 pb-20">
      
      {/* PAGE HERO HEADER */}
      <section className="relative py-16 bg-[#1F1813] text-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#28201A] border border-[#A67844]/40 text-[#A67844] text-xs font-mono font-bold tracking-widest uppercase">
            <Coffee className="w-3.5 h-3.5" />
            <span>FULL MENU CATALOGUE</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#FAF7F2]">
            Artisanal Beverages & Fresh Bakery
          </h1>
          <p className="text-xs sm:text-sm text-[#A89A8B] max-w-xl mx-auto font-light">
            Every item is crafted using premium ingredients, organic single-origin Arabica, and precise temperature extractions.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-lg space-y-6">
          
          {/* SEARCH & SORT INPUTS */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* SEARCH INPUT */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#8C7B6C] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, flavor (e.g. Sea Salt, Matcha)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs text-[#1F1813] placeholder-[#8C7B6C] focus:outline-none focus:border-[#5E3E29]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#8C7B6C] hover:text-[#1F1813]"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* SORT SELECTOR */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <SlidersHorizontal className="w-4 h-4 text-[#5E3E29]" />
              <span className="font-mono text-xs text-[#5C4E43]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2 rounded-xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs font-mono text-[#1F1813] focus:outline-none focus:border-[#5E3E29]"
              >
                <option value="default">Default Order</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* CATEGORY TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#5E3E29] text-white shadow-md'
                      : 'bg-[#F4F0E8] text-[#5C4E43] hover:bg-[#EBE5DA] border border-[#E2D9C8]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* MENU CATALOGUE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center space-y-4 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8]">
            <Info className="w-8 h-8 text-[#8C7B6C] mx-auto" />
            <h3 className="font-heading text-lg font-bold text-[#1F1813]">No items found matching "{searchQuery}"</h3>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-5 py-2 rounded-full bg-[#5E3E29] text-white font-mono text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group p-5 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* IMAGE PREVIEW */}
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-[#E2D9C8]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1F1813]/80 backdrop-blur-md text-white font-mono text-xs font-bold shadow-md">
                      {item.price}
                    </div>
                    {item.category === 'signatures' && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#A67844] text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3" />
                        <span>SIGNATURE</span>
                      </div>
                    )}
                  </div>

                  {/* ITEM INFO */}
                  <div className="space-y-2 text-left">
                    <h3 className="font-heading text-xl font-bold text-[#1F1813] group-hover:text-[#5E3E29] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#5C4E43] leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* FLAVOR NOTES PILLS */}
                  {item.details?.flavorNotes && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.details.flavorNotes.map((note, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full bg-[#EAE4D8] border border-[#DCD3C3] text-[10px] font-mono text-[#5E3E29]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* ACTION CTA */}
                <div className="pt-5 border-t border-[#E2D9C8] mt-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#8C7B6C] uppercase font-bold">
                    {item.category}
                  </span>
                  <button
                    onClick={() => setSelectedMenuItem(item)}
                    className="px-4 py-2 rounded-xl bg-[#5E3E29] hover:bg-[#1F1813] text-white font-mono text-xs font-bold transition-all"
                  >
                    VIEW SPECS
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* DETAIL MODAL */}
      {selectedMenuItem && (
        <MenuModal
          item={selectedMenuItem}
          onClose={() => setSelectedMenuItem(null)}
        />
      )}

    </div>
  );
}
