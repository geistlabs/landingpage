export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy for Geist</h1>
          
          <div className="space-y-8 text-gray-300">
            <p className="text-sm text-gray-400">Last updated: September 2025</p>
            
            <p className="leading-relaxed">
              At Geist, your privacy is our top priority. We designed Geist to be a privacy-first AI companion. This Privacy Policy explains what information we collect, how we use it, and your rights.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. What This Policy Covers</h2>
              <p className="leading-relaxed">This policy applies to:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>The Geist mobile app (iOS and future platforms)</li>
                <li>The Geist landing page and waitlist</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">In the Geist App</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>No personal data is collected.</li>
                    <li>No chats, prompts, or history are stored or logged.</li>
                    <li>All inference is processed in real-time on secure servers hosted in Germany (Hetzner) without persistence.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">On the Geist Landing Page</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>We use Google Analytics to understand general visitor traffic.</li>
                    <li>Google Analytics may use cookies or similar technologies to measure page views and visits.</li>
                    <li>This data is aggregated and does not personally identify you.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Waitlist Sign-Up</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>If you provide your email address, we only use it to notify you about product availability or important updates.</li>
                    <li>You can unsubscribe at any time.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">App Store / Platform Data</h3>
                  <p className="leading-relaxed">
                    Apple (App Store) may collect information related to app downloads, purchases, crash reports, or usage statistics. This is outside of Geist's control and subject to Apple's own privacy policy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To improve our website (via aggregated analytics).</li>
                <li>To notify waitlist subscribers about updates.</li>
                <li>To ensure secure inference requests.</li>
              </ul>
              
              <div className="mt-6">
                <p className="font-semibold">We never:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Sell your data</li>
                  <li>Share it with advertisers</li>
                  <li>Use it for profiling</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Third Parties</h2>
              <p className="leading-relaxed mb-4">We rely on:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Google Analytics (website visitor analytics)</li>
                <li>Hetzner (Germany) for secure inference hosting</li>
                <li>Apple App Store for app distribution</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Each provider has their own privacy policies and compliance measures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Emails:</strong> Kept until you unsubscribe or request deletion.</li>
                <li><strong>Analytics data:</strong> Retained by Google in aggregated form.</li>
                <li><strong>App usage:</strong> Geist itself does not store or retain any personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Security</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All requests to our servers are end-to-end encrypted.</li>
                <li>Servers are hosted in Germany with strict privacy protections.</li>
                <li>No logs or persistent storage of conversations are kept.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Children's Privacy</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Our Services are not directed to, or intended for, children under 13.
                </p>
                <p className="leading-relaxed">
                  We do not knowingly collect personal data from children under 13. If you believe that a child under 13 has provided personal data to Geist, please email us at <a href="mailto:info@openq.dev" className="text-blue-400 hover:text-blue-300 transition-colors">info@openq.dev</a>. We will investigate and, if appropriate, delete the data.
                </p>
                <p className="leading-relaxed">
                  Users under 18 must have permission from their parent or guardian to use our Services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                Under GDPR and other privacy laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent (e.g., unsubscribe from the waitlist)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:info@openq.dev" className="text-blue-400 hover:text-blue-300 transition-colors">info@openq.dev</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy. If we do, the updated version will always be posted here with the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact</h2>
              <p className="leading-relaxed">
                If you have questions or privacy concerns, reach out at:
              </p>
              <p className="mt-4">
                📧 <a href="mailto:info@openq.dev" className="text-blue-400 hover:text-blue-300 transition-colors">info@openq.dev</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">✨ Plain English Promise</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>We don't store your chats.</li>
                <li>We don't sell your data.</li>
                <li>We only track basic website visits (Google Analytics) and App Store downloads.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}