import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'The Geist Manifesto - Privacy-First AI for Everyone',
  description: 'Learn why Geist AI was built with privacy by design. Discover our principles of local data storage, zero server retention, and GDPR compliance that make AI trustworthy.',
  keywords: 'AI manifesto, privacy-first AI, data ownership, AI ethics, GDPR AI, secure AI, local AI storage, open source AI, AI privacy principles, trustworthy AI',
  alternates: {
    canonical: '/manifesto',
  },
  openGraph: {
    title: 'The Geist Manifesto - Privacy-First AI for Everyone',
    description: 'Learn why Geist AI was built with privacy by design. Discover our principles of local data storage, zero server retention, and GDPR compliance that make AI trustworthy.',
    url: '/manifesto',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'The Geist Manifesto - Privacy-First AI for Everyone',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    title: 'The Geist Manifesto - Privacy-First AI for Everyone',
    description: 'Learn why Geist AI was built with privacy by design. Discover our principles of local data storage, zero server retention, and GDPR compliance that make AI trustworthy.',
    images: ['/thumbnail.png'],
  },
};

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-12 pt-20 lg:pt-12">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-white mb-4 sm:mb-6 tracking-tight">
            The Geist Manifesto
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-medium">
            Privacy-First AI for Everyone
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-300 space-y-12">
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              1. Why Geist Exists
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Artificial Intelligence is becoming as common as the smartphone
                itself. Millions of people now turn to AI assistants for help
                with deeply personal matters—mental health struggles, private
                finances, family questions, intimate reflections.
              </p>
              <p>
                But trust in mainstream AI is eroding. Companies talk about
                privacy, yet their systems are architected in ways that put{" "}
                <strong className="text-white">
                  your most sensitive data at risk
                </strong>
                —from accidental leaks to legal orders that override your right
                to deletion.
              </p>
              <p>
                We believe:{" "}
                <strong className="text-white">
                  if AI is going to live beside us in our most personal spaces,
                  it must be designed for privacy at its core.
                </strong>{" "}
                That's why Geist exists.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              2. When Trust Was Broken — Recent Consumer Breaches
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  ChatGPT Conversations Accidentally Indexed by Google
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In 2025, thousands of private ChatGPT chats—containing
                  everything from personal confessions to identifying
                  details—were publicly accessible on Google due to a subtle{" "}
                  <em>"Make this chat discoverable"</em> setting. Conversations
                  people thought were private turned into search results for the
                  world to see.
                </p>
                <p className="text-sm text-gray-400">
                  Sources:{" "}
                  <a
                    href="https://www.lifewire.com/google-indexed-chatgpt-conversations-11784115"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Lifewire
                  </a>
                  ,{" "}
                  <a
                    href="https://www.techradar.com/ai-platforms-assistants/chatgpt/openai-pulls-chat-sharing-tool-after-google-search-privacy-scare"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    TechRadar
                  </a>
                  ,{" "}
                  <a
                    href="https://www.pcgamer.com/software/ai/chatgpt-removes-the-ability-for-conversations-to-be-displayed-by-search-engines-as-nearly-4-500-conversations-indexed-by-google/"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    PCGamer
                  </a>
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Courts Overriding User Deletion Rights
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Later that year, a U.S. judge ordered OpenAI to{" "}
                  <strong className="text-white">
                    retain all ChatGPT logs indefinitely
                  </strong>{" "}
                  as part of ongoing litigation—even logs that users had
                  deleted. The court ruling forced OpenAI to ignore its own
                  deletion policies, effectively stripping users of control over
                  their data.
                </p>
                <p className="text-sm text-gray-400">
                  Sources:{" "}
                  <a
                    href="https://www.eff.org/deeplinks/2025/06/copyright-cases-should-not-threaten-chatbot-users-privacy"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    EFF
                  </a>
                  ,{" "}
                  <a
                    href="https://www.malwarebytes.com/blog/news/2025/06/openai-forced-to-preserve-chatgpt-chats"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Malwarebytes
                  </a>
                  ,{" "}
                  <a
                    href="https://www.adweek.com/media/a-federal-judge-ordered-openai-to-stop-deleting-data-heres-how-that-could-impact-users-privacy/"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Adweek
                  </a>
                </p>
              </div>
            </div>

            <p className="text-gray-300 mt-6 text-center font-medium">
              These events proved one thing:{" "}
              <strong className="text-white">
                your data is not truly yours on today's dominant AI platforms.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              3. The Geist Promise
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Geist was built to eliminate these risks through{" "}
              <strong className="text-white">
                architectural choices, not marketing promises.
              </strong>
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  All storage is local.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Your chats, memory, and embeddings stay on your device.
                  Deleting means gone—no shadow copies, no backups.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Inference-only servers.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our rented bare-metal servers in Germany process encrypted
                  requests to compute results. They never store or retain your
                  data—once processed, it's gone.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Mobile-first design.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Desktop already has good local AI options. But most people use
                  AI privately on their phones—where privacy protections are
                  weakest. Geist brings uncompromising privacy to the device you
                  use most.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Open source, top to bottom.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every component—client, server, inference stack—is open and
                  auditable. No black boxes, no hidden data pipelines.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  German infrastructure.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Hosted entirely in Germany under some of the world's strictest
                  data protection laws (GDPR). Operated by a German company, for
                  accountability that marketing copy can't replace.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Long-term memory, done right.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Personalization is useful—but only if it's safe. Geist keeps
                  long-term AI memory—like vector embeddings—
                  <strong className="text-white">
                    strictly on your device.
                  </strong>{" "}
                  The AI can remember without storing your personal history in
                  the cloud.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              4. Our Principles, Summarized
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-900/50">
                    <th className="border border-gray-800 px-4 py-3 text-left text-white font-medium">
                      Principle
                    </th>
                    <th className="border border-gray-800 px-4 py-3 text-left text-white font-medium">
                      Geist Approach
                    </th>
                    <th className="border border-gray-800 px-4 py-3 text-left text-white font-medium">
                      Why It Matters
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr>
                    <td className="border border-gray-800 px-4 py-3 font-medium">
                      User owns the data
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      Chats + memory local only
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      You stay in control
                    </td>
                  </tr>
                  <tr className="bg-gray-900/20">
                    <td className="border border-gray-800 px-4 py-3 font-medium">
                      Zero server retention
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      Servers compute encrypted requests, nothing stored
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      No logs to leak, subpoena, or hack
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-800 px-4 py-3 font-medium">
                      Transparency
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      100% open source
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      Trust is verifiable
                    </td>
                  </tr>
                  <tr className="bg-gray-900/20">
                    <td className="border border-gray-800 px-4 py-3 font-medium">
                      Privacy-first defaults
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      No sharing features, no hidden checkboxes
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      Accidents like indexed chats can't happen
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-800 px-4 py-3 font-medium">
                      European governance
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      German-hosted & GDPR-compliant
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      Strongest legal privacy frameworks
                    </td>
                  </tr>
                  <tr className="bg-gray-900/20">
                    <td className="border border-gray-800 px-4 py-3 font-medium">
                      Memory with integrity
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      Long-term vectors stored locally
                    </td>
                    <td className="border border-gray-800 px-4 py-3">
                      Personalization without surveillance
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              5. Our Belief
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-gray-300">
                AI should be as private as a conversation with yourself.
              </p>
              <p className="text-gray-300">
                Not public by accident.
                <br />
                Not stored against your will.
                <br />
                Not exposed because of legal loopholes.
              </p>
              <p className="text-white font-medium text-xl mt-8">
                With Geist,{" "}
                <strong>privacy is the foundation, not a feature.</strong>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
