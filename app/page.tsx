import { Suspense } from "react";
import { CrossZoneLink } from "./components/CrossZoneLink";

async function heavyComputation() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }

  return {
    computedValue: result.toFixed(2),
    timestamp: new Date().toISOString(),
  };
}

async function ComputationResult() {
  const data = await heavyComputation();

  return (
    <div className="rounded-xl border border-purple-500/30 bg-purple-900/30 p-4 text-center">
      <div className="text-xs uppercase tracking-wider text-purple-400">
        Server Computation Result
      </div>
      <div className="mt-1 font-mono text-2xl text-white">
        {data.computedValue}
      </div>
      <div className="mt-2 text-xs text-slate-500">
        Computed at: {data.timestamp}
      </div>
      <div className="mt-1 text-xs text-purple-400">
        (1.5s delay + 1M iterations)
      </div>
    </div>
  );
}

function ComputationSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-purple-500/30 bg-purple-900/30 p-4 text-center">
      <div className="text-xs uppercase tracking-wider text-purple-400">
        Server Computation Result
      </div>
      <div className="mx-auto mt-1 h-8 w-32 rounded bg-purple-800/50" />
      <div className="mx-auto mt-2 h-4 w-48 rounded bg-purple-800/30" />
      <div className="mt-1 text-xs text-purple-400">Loading...</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      <main className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Zone 1 - Main Application
        </div>
        <h1 className="mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-center font-serif text-6xl font-bold tracking-tight text-transparent md:text-7xl">
          Welcome Home
        </h1>
        <p className="mb-8 max-w-lg text-center text-lg text-slate-400">
          This is the main zone serving the root path. Navigate to the blog zone
          to see multi-zones in action.
        </p>
        <div className="mb-8">
          <Suspense fallback={<ComputationSkeleton />}>
            <ComputationResult />
          </Suspense>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <CrossZoneLink
            href="/blog"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-purple-600 px-8 py-4 font-medium text-white transition-all hover:bg-purple-500"
          >
            <span>Visit Blog Zone</span>
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
          <a
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-4 font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800"
          >
            About (Zone 1)
          </a>
        </div>
        <div className="mt-16 grid gap-6 text-center sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <div className="mb-2 text-2xl">🏠</div>
            <h3 className="mb-1 font-semibold text-white">Main Zone</h3>
            <p className="text-sm text-slate-500">Serves / and /about</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <div className="mb-2 text-2xl">📝</div>
            <h3 className="mb-1 font-semibold text-white">Blog Zone</h3>
            <p className="text-sm text-slate-500">Serves /blog/*</p>
          </div>
        </div>
      </main>
    </div>
  );
}
