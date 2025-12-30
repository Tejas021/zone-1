import Link from "next/link";
import { CrossZoneLink } from "../components/CrossZoneLink";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      <main className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Zone 1 - About Page
        </div>
        <h1 className="mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-center font-serif text-5xl font-bold tracking-tight text-transparent">
          About Us
        </h1>
        <p className="mb-8 max-w-lg text-center text-lg text-slate-400">
          This page is served from Zone 1. Navigation between pages in the same
          zone uses soft navigation (no full page reload).
        </p>
        <div className="mb-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Multi-Zones Explained
          </h2>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400">→</span>
              <span>
                <strong className="text-white">Soft navigation</strong> within
                the same zone (fast, no reload)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">→</span>
              <span>
                <strong className="text-white">Hard navigation</strong> between
                different zones (smooth with View Transitions)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">→</span>
              <span>
                Each zone can be{" "}
                <strong className="text-white">deployed independently</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-4 font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
            Back Home (Soft Nav)
          </Link>
          <CrossZoneLink
            href="/blog"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 py-4 font-medium text-white transition-all hover:bg-purple-500"
          >
            <span>Visit Blog (View Transition)</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </CrossZoneLink>
        </div>
      </main>
    </div>
  );
}
