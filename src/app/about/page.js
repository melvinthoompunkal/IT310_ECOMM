export const metadata = {
  title: "About — Nomad Gear",
  description:
    "Learn about Nomad Gear — founded by remote workers for remote workers. Based in New Jersey, shipping worldwide.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Built by Nomads,
            <br />
            for Nomads.
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 mb-10">
            <p className="text-lg text-slate-600 leading-relaxed m-0">
              Nomad Gear was founded in 2022 by a group of remote workers based
              in <strong className="text-slate-900">New Jersey</strong> who were
              tired of settling for bulky, poorly designed workstation
              accessories. We believe your tools should be as mobile and
              adaptable as you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Our Mission
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                To create the best portable workstation accessories that let you
                work from anywhere without compromising on ergonomics,
                productivity, or style.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">💡</div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Our Philosophy
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Every product we design is tested in real-world conditions —
                cafés in Lisbon, co-working spaces in Bali, and hotel rooms in
                Tokyo. If it doesn&apos;t fit in a carry-on, we don&apos;t ship it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center mb-10">
            {[
              { stat: "10K+", label: "Happy Customers" },
              { stat: "45+", label: "Countries Shipped" },
              { stat: "4.9★", label: "Avg. Rating" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {item.stat}
                </p>
                <p className="text-xs text-slate-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 text-center">
            <h3 className="text-lg font-bold mb-2">
              Join the Nomad Community
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Follow us on social media for setup inspiration, product drops,
              and stories from remote workers around the world.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              {["Twitter", "Instagram", "YouTube"].map((platform) => (
                <span
                  key={platform}
                  className="text-xs font-medium text-slate-300 hover:text-white cursor-pointer transition-colors"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
