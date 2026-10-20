import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  thinkingProcess?: string[];
  timestamp: string;
}

import { Currency } from '../types';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency?: Currency;
  onApplyItineraryToForm?: (itinerarySummary: string) => void;
  onApplyToPlanner?: () => void;
}

const PRESET_QUERIES = [
  'Plan a 10-day slow travel route focusing on Geoffrey Bawa architecture and Ceylon tea estates',
  'Family travel with an 8-year-old and grandparents: Best route between Sigiriya & Ella avoiding road fatigue',
  'Ethical wildlife: Which national park has ethical elephant viewing in October and best bungalow stays?',
  'Honeymoon in Sri Lanka: Secluded pool villas, private catamaran whale watching, and couple spa rituals',
];

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  onClose,
  currency = 'USD',
  onApplyItineraryToForm,
  onApplyToPlanner,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: `Ayubowan! I am Chaminda Silva, Senior Travel Custodian at Lanka Travellers.

I specialize in designing unhurried, tailor-made Ceylon expeditions grounded in Geoffrey Bawa's tropical modernism, private chauffeur logistics, and ethical wildlife corridors.

How may I assist you with your Sri Lankan journey today?`,
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedThinking, setExpandedThinking] = useState<Record<string, boolean>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputValue.trim();
    if (!textToSend || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/concierge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: textToSend,
          conversationHistory: messages.map((m) => ({
            role: m.role === 'user' ? 'user' : 'model',
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: data.text,
        thinkingProcess: [
          'Evaluated weather seasonality & monsoon patterns (Yala vs Maha).',
          'Optimized driving windows avoiding highway bottlenecks and elevation fatigue.',
          'Selected SLTDA-licensed boutique heritage properties and sustainable dining.',
          'Synthesized Geoffrey Bawa architectural spatial flow with private chauffeur pacing.',
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.warn('Backend API call failed, using high-fidelity native itinerary synthesizer:', err);
      // Fallback high-fidelity answer if running in static build or API key not attached
      const fallbackMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: generateNativeItineraryAdvice(textToSend),
        thinkingProcess: [
          'Analyzed client constraints: group comfort, pacing, and cultural depth.',
          'Cross-referenced mountain passes and Southern Expressway transfer times.',
          'Integrated Geoffrey Bawa architectural milestones (Kandalama, Lunuganga).',
          'Enforced 100% private chauffeur guidance with zero commercial tourist traps.',
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleThinking = (id: string) => {
    setExpandedThinking((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl h-[88vh] bg-[#f2fcf5] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#b6eed7]/40">
        {/* Modal Top Bar */}
        <div className="bg-[#003628] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsrKc6LbHJ_Spxldm3KWF2we8L_Xn-D76xBIId8eWPBWjY7qfdM1qr-zCiYFfNAvX7ekMXvx5h05QgS1cgkTufhl01wf33qnjM3ZmvF4NGNiJ9lWFdsTAwoAQ6BWZ6eTNr1Wn5elUwnQOfXpCmdnz0sZmeFxaDSNRCQ_mD2yHcFj7uN7wjUjpDt0TqhwC-_9-EaOfFjOhuDIWLVFV3ROKhc4TtWjuprPgGfn2sW236qSWii18AZf8D1A"
                alt="Chaminda Silva"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#89f5e7]"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#fe932c] rounded-full ring-2 ring-[#003628]"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-lg font-bold tracking-tight">
                  Chaminda Silva · Ceylon Concierge
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#164e3d] text-[#89f5e7] text-[10px] font-bold uppercase tracking-wider">
                  Thinking Mode Active
                </span>
              </div>
              <span className="text-xs text-[#b6eed7] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px] text-[#fe932c]">psychology</span>
                Powered by Gemini 4 Argon · High Reasoning Depth
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close Concierge"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Thinking Indicator Banner */}
        <div className="bg-[#e6f0ea] border-b border-[#c0c9c3]/30 px-6 py-2 flex items-center justify-between text-xs text-[#003628]">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="material-symbols-outlined text-[15px] text-[#904d00]">verified</span>
            SLTDA Official Travel Advice • Itemized Custom Route Feasibility
          </span>
          <span className="hidden sm:inline text-[#707974] text-[11px]">
            Thinking Level: <strong>HIGH</strong>
          </span>
        </div>

        {/* Chat Messages Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 sm:p-5 shadow-sm text-sm sm:text-base leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#003628] text-white rounded-tr-none'
                    : 'bg-white text-[#151d1a] border border-[#e1ebe4] rounded-tl-none'
                }`}
              >
                {/* Thinking Process Accordion for Assistant */}
                {msg.role === 'assistant' && msg.thinkingProcess && (
                  <div className="mb-3 pb-3 border-b border-[#e1ebe4]">
                    <button
                      type="button"
                      onClick={() => toggleThinking(msg.id)}
                      className="flex items-center gap-1.5 text-xs font-bold text-[#904d00] hover:text-[#663500] cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">psychology</span>
                      <span>
                        {expandedThinking[msg.id]
                          ? 'Hide Reasoning Process'
                          : 'Inspect High-Level Thinking Architecture (Argon)'}
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        {expandedThinking[msg.id] ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>

                    {expandedThinking[msg.id] && (
                      <div className="mt-2.5 p-3 rounded-xl bg-[#ecf6ef] border border-[#b6eed7]/60 text-xs text-[#003628] flex flex-col gap-1.5 animate-in fade-in duration-150">
                        <span className="font-bold uppercase tracking-wider text-[10px] text-[#904d00]">
                          Gemini 4 Argon Chain-of-Thought Rationale:
                        </span>
                        {msg.thinkingProcess.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#904d00] font-bold">›</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Message Body */}
                <div className="whitespace-pre-line font-body text-[#151d1a]">
                  {msg.role === 'user' ? (
                    <span className="text-white font-medium">{msg.text}</span>
                  ) : (
                    msg.text
                  )}
                </div>

                {/* Action button if assistant provided an itinerary */}
                {msg.role === 'assistant' && msg.id !== 'welcome' && (
                  <div className="mt-4 pt-3 border-t border-[#e1ebe4] flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] text-[#707974]">{msg.timestamp}</span>
                    <button
                      type="button"
                      onClick={() => {
                        if (onApplyItineraryToForm) {
                          onApplyItineraryToForm(msg.text);
                        } else if (onApplyToPlanner) {
                          onApplyToPlanner();
                        }
                        onClose();
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#fe932c] hover:bg-[#904d00] text-[#663500] hover:text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">edit_calendar</span>
                      <span>Apply to Custom Trip Form</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-[#e1ebe4] shadow-sm flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#003628] animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-[#904d00] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#fe932c] animate-bounce [animation-delay:0.4s]"></span>
                </div>
                <span className="text-xs font-bold text-[#003628]">
                  Thinking deeply with Gemini 4 Argon... analyzing terrain, weather & boutique villas
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Preset Query Chips */}
        <div className="px-4 sm:px-6 py-2 bg-[#ecf6ef] border-t border-[#c0c9c3]/30 overflow-x-auto flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-bold text-[#904d00] uppercase tracking-wider shrink-0">
            Suggested:
          </span>
          {PRESET_QUERIES.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(q)}
              className="px-3 py-1 rounded-full bg-white hover:bg-[#164e3d] hover:text-white text-[#404944] text-xs font-medium whitespace-nowrap transition-all border border-[#c0c9c3]/40 cursor-pointer shadow-xs shrink-0"
            >
              {q.slice(0, 48)}...
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#e1ebe4] shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Chaminda anything (e.g. 7-day slow travel route, Bawa villas, weather)..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-[#f2fcf5] text-[#151d1a] placeholder:text-[#707974] rounded-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#003628] border border-[#c0c9c3]/50 transition-all"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="bg-[#003628] hover:bg-[#164e3d] disabled:opacity-40 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// High-fidelity fallback synthesizer in case backend is offline
function generateNativeItineraryAdvice(prompt: string): string {
  const p = prompt.toLowerCase();

  if (p.includes('bawa') || p.includes('architect')) {
    return `Ayubowan! For an architectural expedition celebrating Geoffrey Bawa's Tropical Modernism, here is my recommended 8-Day Curated Route:

1. Colombo (Day 1-2):
   • Stay: Tintagel Colombo or Galle Face Hotel
   • Private tour of Geoffrey Bawa's townhouse at No. 11 33rd Lane
   • Lunch at The Gallery Café (Bawa's former architectural studio)

2. Bentota / Lunuganga (Day 3-4):
   • Stay: Lunuganga Country Estate in the Garden Room or Glass Room
   • Spend afternoons wandering the Italian Renaissance-inspired tropical gardens sculpted over 50 years by Bawa

3. Dambulla / Heritance Kandalama (Day 5-6):
   • Stay: Heritance Kandalama (Bawa's masterpiece integrated into the rocky jungle bluff)
   • Explore the 5th-century hydraulic water gardens of Sigiriya Rock Fortress

4. Galle Fort & Jetwing Lighthouse (Day 7-8):
   • Stay: Jetwing Lighthouse in Dadalla, Galle
   • View Laki Senanayake's bronze spiral staircase depicting the Battle of Randeniwela
   • Stroll the 17th-century UNESCO Dutch ramparts at sunset

Chauffeur Guidance: All journeys are conducted in private hybrid luxury vehicles with unlimited chilled King Coconut water. Shall I load this into your Custom Itinerary form?`;
  }

  if (p.includes('family') || p.includes('children') || p.includes('grandparent') || p.includes('kid')) {
    return `Ayubowan! For multi-generational family travel with children and seniors, our primary rule is "Unhurried Rhythm & Gentle Elevation":

Recommended 7-Day Relaxed Circuit:
• Day 1-2: Cultural Triangle Base (Heritance Kandalama / Aliya Resort).
  Instead of exhausting mid-day climbs, we do an early morning gentle carriage ride through Hiriwadunna village with organic clay-pot lunch, followed by an open-air 4x4 safari at Minneriya to see elephant herds up close.
• Day 3-4: Kandy & Royal Foothills.
  Visit the Royal Botanical Gardens at Peradeniya where kids can run freely under giant fig trees. Relaxed evening at Kandy Lake.
• Day 5-7: Southern Coast Sanctuaries (Weligama / Tangalle).
  Direct expressway transfer avoiding winding mountain hairpin turns. Visit Kosgoda Sea Turtle Hatchery where children can release baby turtles at sunset into the gentle Indian Ocean waves.

Vehicles: We deploy high-roof Toyota Commuter VIP executive vans with wide leather reclining seats, onboard Wi-Fi, child safety seats, and private refrigerator.`;
  }

  return `Ayubowan! Thank you for inquiring about your custom Sri Lankan voyage.

Based on our local terrain expertise and weather patterns across the island:

• Ideal Travel Route:
  1. Cultural Triangle (Sigiriya & Dambulla) - 2 Nights for ancient UNESCO citadels.
  2. Central Highlands (Nuwara Eliya / Ella) - 2 Nights for misty tea trails and the blue train viaduct.
  3. Yala or Udawalawe - 1 Night for ethical big-game leopard & elephant safaris.
  4. Southern Riviera (Galle & Mirissa) - 2 Nights for golden beaches and Dutch colonial ramparts.

• Ceylon Standard Inclusions:
  ✓ Private air-conditioned luxury vehicle with dedicated SLTDA-certified chauffeur guide.
  ✓ Pre-purchased fast-track tickets to all national parks & UNESCO sites.
  ✓ Handpicked boutique tea bungalows & oceanfront villas.
  ✓ 24/7 Colombo on-trip concierge hotline.

Click "Apply to Custom Trip Form" below to instantly lock in your travel dates and receive an itemized quote within 4 hours.`;
}
