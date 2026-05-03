export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Payment Risk Management
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Early Warning System for<br />
          <span className="text-[#58a6ff]">Stripe Account Termination</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor payment patterns, transaction volumes, and risk indicators. Get alerted before Stripe flags or terminates your account — so you can act first.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Start Monitoring — $99/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts. Instant setup.</p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Real-Time Monitoring</h3>
            <p className="text-sm text-[#8b949e]">Continuous analysis of your Stripe data via webhooks and scheduled scans.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Instant Alerts</h3>
            <p className="text-sm text-[#8b949e]">Email and dashboard notifications the moment a risk pattern is detected.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="font-semibold text-white mb-1">Risk Scoring</h3>
            <p className="text-sm text-[#8b949e]">Proprietary risk score based on dispute rates, refund ratios, and volume spikes.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$99</p>
          <p className="text-[#8b949e] mb-6">/month per Stripe account</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited webhook monitoring',
              'Daily risk score reports',
              'Email + dashboard alerts',
              'Dispute & refund rate tracking',
              'Volume anomaly detection',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to my Stripe account?</h3>
            <p className="text-sm text-[#8b949e]">You provide a restricted Stripe API key with read-only access. We never store card data or initiate charges — only read transaction metadata to compute risk signals.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What risk factors do you monitor?</h3>
            <p className="text-sm text-[#8b949e]">We track dispute rates, refund ratios, sudden volume spikes, high-risk card BINs, chargeback velocity, and patterns that historically precede Stripe account reviews or terminations.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your billing portal at any time with no penalties. Your access continues until the end of the current billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Stripe Termination Backup Alerts. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
