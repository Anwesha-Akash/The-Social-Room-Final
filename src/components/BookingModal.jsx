import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Sparkles, User, Mail, Building, Instagram } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, preselectedTier }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    handle: '',
    tier: preselectedTier || 'Launch',
    selectedDate: '2026-09-03',
    selectedTime: '04:00 PM IST',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const dates = [
    { label: 'Wed, Sep 3', value: '2026-09-03', slots: '3 slots' },
    { label: 'Thu, Sep 4', value: '2026-09-04', slots: '4 slots' },
    { label: 'Fri, Sep 5', value: '2026-09-05', slots: '2 slots' },
    { label: 'Mon, Sep 8', value: '2026-09-08', slots: '5 slots' },
  ];

  const timeSlots = [
    '11:00 AM IST',
    '02:00 PM IST',
    '04:00 PM IST',
    '06:30 PM IST',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-hairline shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-stone hover:text-ink hover:bg-tint transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-crimson/10 text-crimson flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-ink">
              Discovery Call Confirmed!
            </h3>
            <p className="text-sm text-stone max-w-sm mx-auto leading-relaxed">
              We have reserved your 20-minute strategy session for <strong>{formData.selectedDate} at {formData.selectedTime}</strong>. A calendar invite has been sent to <strong>{formData.email || 'your email'}</strong>.
            </p>
            <div className="p-4 bg-tint rounded-2xl border border-hairline text-left text-xs space-y-1.5 max-w-sm mx-auto font-mono text-stone">
              <p><strong className="text-ink">Host:</strong> Annapurna & Shraddha</p>
              <p><strong className="text-ink">Package Focus:</strong> {formData.tier}</p>
              <p><strong className="text-ink">Platform:</strong> Google Meet (Link in invite)</p>
            </div>
            <button
              onClick={handleReset}
              className="bg-ink hover:bg-ink/80 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors mt-4"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-crimson mb-2">
                <Sparkles className="w-3.5 h-3.5 fill-crimson" />
                <span>The Social Room · Discovery Session</span>
              </div>
              <h3 id="booking-modal-title" className="text-2xl sm:text-3xl font-serif text-ink tracking-tight">
                Book your free 20-minute call
              </h3>
              <p className="text-xs sm:text-sm text-stone mt-1">
                Tell us about your brand goals. We'll map your custom 30-day strategy.
              </p>
            </div>

            {/* Package Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">
                Interested Package
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Strategy Sprint', 'Foundation', 'Launch', 'Authority'].map((pkg) => (
                  <button
                    key={pkg}
                    type="button"
                    onClick={() => setFormData({ ...formData, tier: pkg })}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      formData.tier === pkg
                        ? 'bg-crimson text-white border-crimson shadow-xs'
                        : 'bg-white text-ink border-hairline hover:bg-tint'
                    }`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">
                Select Date
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {dates.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedDate: d.value })}
                    className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                      formData.selectedDate === d.value
                        ? 'bg-ink text-white border-ink'
                        : 'bg-tint/60 text-ink border-hairline hover:bg-white'
                    }`}
                  >
                    <div className="font-bold">{d.label}</div>
                    <div className="text-[10px] opacity-70 mt-0.5">{d.slots}</div>
                  </button>
                ))}
              </div>

              <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">
                Select Time Slot
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedTime: time })}
                    className={`py-2 px-2.5 rounded-xl text-center border text-xs font-mono transition-all ${
                      formData.selectedTime === time
                        ? 'bg-crimson text-white border-crimson font-bold'
                        : 'bg-white text-stone border-hairline hover:bg-tint'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Founder Contact Form Inputs */}
            <div className="space-y-3 pt-2 border-t border-hairline">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-stone mb-1 font-medium">Your Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-tint/50 border border-hairline rounded-xl focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-stone mb-1 font-medium">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-tint/50 border border-hairline rounded-xl focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-stone mb-1 font-medium">Company Name</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-stone absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Acme AI"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-tint/50 border border-hairline rounded-xl focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-stone mb-1 font-medium">Instagram / LinkedIn Handle</label>
                  <div className="relative">
                    <Instagram className="w-4 h-4 text-stone absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="@yourhandle"
                      value={formData.handle}
                      onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-tint/50 border border-hairline rounded-xl focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-crimson hover:bg-crimson-dark text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Confirm 20-Min Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center text-stone mt-2 font-mono">
                No credit card required · Free 20-minute founder consultation
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
