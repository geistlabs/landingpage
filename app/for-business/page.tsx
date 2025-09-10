export default function ForBusiness() {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-12 pt-20 lg:pt-12">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-white mb-4 sm:mb-6 tracking-tight">
            Geist for Business
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-medium">
            Enterprise-Grade AI, Privacy-First by Design
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-300 space-y-12">
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              1. Why Geist for Business
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                AI is no longer a side experiment&mdash;it&apos;s the backbone of how
                modern organizations communicate, analyze data, and serve
                customers. But with this power comes unprecedented risk:
              </p>
              <ul className="space-y-2 ml-6">
                <li>
                  <strong className="text-white">
                    Data leakage into third-party clouds
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    Loss of control over sensitive business knowledge
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    Compliance failures with GDPR and local regulations
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    Shadow AI usage by employees without oversight
                  </strong>
                </li>
              </ul>
              <p>
                For small and medium-sized enterprises (SMEs) and large
                organizations alike, the stakes are high. A single AI-related
                data incident can damage brand trust, trigger regulatory
                penalties, and compromise intellectual property.
              </p>
              <p>
                Geist is the solution: a{" "}
                <strong className="text-white">
                  privacy-first AI platform hosted in Germany or directly within
                  your infrastructure
                </strong>
                , designed for compliance, control, and secure business
                adoption.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              2. Flexible Deployment — Your Infrastructure, Your Rules
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Every organization has unique compliance and IT requirements.
              Geist adapts to you:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  On-Premises
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Run Geist entirely on your own servers or private cloud for
                  maximum data control.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Managed Hosting in Germany
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Leverage our secure Hetzner bare-metal servers, operated under
                  GDPR, for a turnkey solution.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Hybrid Models
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Keep sensitive data sources local while offloading inference
                  to our German infrastructure.
                </p>
              </div>
            </div>

            <p className="text-gray-300 mt-6 text-center font-medium">
              No matter the deployment model, Geist ensures:{" "}
              <strong className="text-white">
                no data persistence, end-to-end encryption, and complete
                transparency.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              3. Why SMEs & Enterprises Need This
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">SMEs</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Gain AI productivity without the risk of customer data ending
                  up in opaque AI provider datasets.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Enterprises
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Deploy AI at scale with{" "}
                  <strong className="text-white">
                    full administrative control
                  </strong>
                  , <strong className="text-white">policy enforcement</strong>,
                  and{" "}
                  <strong className="text-white">compliance confidence</strong>.
                </p>
              </div>
            </div>

            <p className="text-gray-300 mt-6 text-center font-medium">
              With Geist, businesses don&apos;t have to choose between innovation and
              privacy—they get both.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              4. The Geist Business Offering
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  API Access
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Integrate directly into your own systems with a clean,
                  privacy-first inference API. Ideal for building secure AI
                  features into existing products.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Web App + RAG
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Use Geist&apos;s hosted web app to query internal knowledge
                  securely. Bring your own data with{" "}
                  <strong className="text-white">
                    Retrieval-Augmented Generation (RAG)
                  </strong>{" "}
                  while keeping embeddings and indexes fully under your control.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Browser Sidebar Extension
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Instant AI assistance in the browser—summarize, draft, or
                  answer with corporate knowledge—without data leaking to third
                  parties.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Slack, Teams, Outlook Add-ins
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Secure conversational AI inside the tools your employees
                  already use. Geist integrates seamlessly while respecting
                  company policies and compliance requirements.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Admin Console
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Centralized control for IT and compliance teams:
                </p>
                <ul className="space-y-2 ml-6 text-gray-300 text-sm">
                  <li>
                    <strong className="text-white">
                      SSO & Role-based Access
                    </strong>{" "}
                    (SAML, OIDC)
                  </li>
                  <li>
                    <strong className="text-white">Policy Management</strong>{" "}
                    (e.g., data handling rules, feature restrictions)
                  </li>
                  <li>
                    <strong className="text-white">Data Sources</strong>{" "}
                    (connect internal knowledge bases, wikis, drives)
                  </li>
                  <li>
                    <strong className="text-white">Audit Logs</strong> (who
                    accessed what, when)
                  </li>
                  <li>
                    <strong className="text-white">Usage Insights</strong>{" "}
                    (track adoption, prevent shadow AI)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              5. Security & Compliance by Design
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  End-to-end encryption across all traffic
                </h3>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Inference-only servers — no retention, no shadow copies
                </h3>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  German or on-premise jurisdiction — GDPR and local compliance
                  guaranteed
                </h3>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Transparent and auditable — Geist is open source at every
                  layer
                </h3>
              </div>
            </div>

            <p className="text-gray-300 mt-6 text-center font-medium">
              Unlike providers bound by U.S. court orders, Geist ensures your
              corporate knowledge cannot be subpoenaed or retained without your
              consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              6. Business Value
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Protect intellectual property
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Your data never leaves your control.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Comply with regulations
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Meet GDPR and industry-specific compliance needs effortlessly.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Empower employees safely
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Give them AI tools they can trust, reducing reliance on unsafe
                  shadow AI.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Future-proof adoption
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Open-source foundation means no lock-in and continuous
                  transparency.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              7. Our Belief
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-gray-300">
                Businesses shouldn&apos;t have to gamble with their data to harness
                AI.
              </p>
              <p className="text-gray-300">
                With Geist, you get the productivity of AI{" "}
                <strong className="text-white">
                  without sacrificing compliance, security, or trust
                </strong>
                .
              </p>
              <p className="text-white font-medium text-xl mt-8">
                <strong>
                  Geist for Business = AI that works as hard as you do, without
                  putting your company at risk.
                </strong>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
