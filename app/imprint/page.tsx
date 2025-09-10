export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-8">Imprint</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information according to § 5 TMG
              </h2>
              <div className="space-y-2">
                <p>OpenQ Labs GmbH</p>
                <p>Rheinsberger Str. 76/77,</p>
                <p>10115 Berlin</p>
              </div>
              
              <div className="mt-4 space-y-2">
                <p><strong>Register number:</strong> HRB 236736 B</p>
                <p><strong>Register court:</strong> Charlottenburg (Berlin)</p>
                <p><strong>Authorized to represent:</strong> Riccardo Lamanna & Andrew O'Brien</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Responsible for the content according to § 55 Abs. 2 RStV
              </h2>
              <div className="space-y-4">
                <div>
                  <p><strong>Riccardo Lamanna</strong></p>
                  <p>Managing Director OpenQ Labs GmbH</p>
                  <p>Rheinsberger Str. 76/77,</p>
                  <p>10115 Berlin</p>
                </div>
                
                <div>
                  <p><strong>Andrew O'Brien</strong></p>
                  <p>Managing Director OpenQ Labs GmbH</p>
                  <p>Rheinsberger Str. 76/77,</p>
                  <p>10115 Berlin</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
              <p><strong>Mail:</strong> <a href="mailto:info@openq.dev" className="text-blue-400 hover:text-blue-300 transition-colors">info@openq.dev</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">§1 Liability for content</h2>
              <p className="leading-relaxed">
                As a service provider, we bear responsibility for the content we create in accordance with § 7 Abs.1 of the TMG (German Telemedia Act) and in compliance with applicable laws. However, we are not obligated, under §§ 8 to 10 of the TMG, to monitor or investigate transmitted or stored information for signs of illegal activity. Our obligations to remove or block information under general laws remain intact. Nevertheless, our liability in this matter arises only when we become aware of a specific violation of the law. Upon such awareness, we will promptly remove the relevant content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">§2 Liability for links</h2>
              <p className="leading-relaxed">
                Our website contains links to external third-party websites over which we have no control or influence regarding content. Therefore, we disclaim any liability for the content of these external websites. The respective provider or operator of the linked pages is solely responsible for their content. We conducted checks for potential legal violations when initially linking to these pages, and at that time, no illegal content was evident. However, it is unreasonable to conduct ongoing monitoring of linked page content without concrete evidence of legal violations. Should we become aware of any legal infringements, we will immediately remove the respective links.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">§3 Copyright</h2>
              <p className="leading-relaxed">
                The content and materials on our website, created by the site operators, are subject to German copyright law. Any duplication, processing, distribution, or commercial use beyond the scope of copyright law requires prior written consent from the respective author or creator. Downloads and copies from this site are permitted solely for private, non-commercial use. In cases where content on this site was not created by the operator, we respect the copyrights of third parties and clearly identify third-party content as such. If you should nonetheless become aware of a copyright infringement, please notify us accordingly, and we will promptly remove the infringing content upon awareness.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}