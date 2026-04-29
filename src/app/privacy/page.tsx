import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Tomo Solutions",
  description:
    "How Tomo Solutions Inc. handles information in connection with the TOMO service.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-primary px-6 md:px-8 pt-24 pb-16">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-6 text-secondary text-sm">
            Last updated: April 29, 2026
          </p>
          <p className="mt-8 text-secondary text-sm leading-relaxed">
            Tomo Solutions Inc. (&quot;Tomo&quot;, &quot;we&quot;,
            &quot;us&quot;) provides the TOMO platform and related services
            (collectively, the &quot;Service&quot;). This Privacy Policy
            describes how we collect, use, disclose, and otherwise process
            information in connection with the Service. Tomo Solutions Inc. is a
            corporation incorporated under the laws of the State of Delaware,
            United States.
          </p>

          <section className="mt-14 space-y-4">
            <h2 className="text-xl font-medium text-primary">
              1. Scope and applicability
            </h2>
            <p className="text-secondary font-light leading-relaxed">
              This policy applies when you use our websites, demos, pilots, or
              other offerings that reference this Privacy Policy. TOMO is
              designed to help investment and relationship-driven organizations
              improve fundraising execution—for example by surfacing next steps,
              follow-ups, and momentum signals across communications and tools
              you connect (&quot;such as&quot; email, calendar, CRM, or messaging
              systems), subject to our agreements with you and your controls.
            </p>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="text-xl font-medium text-primary">
              2. Information we collect
            </h2>
            <p className="text-secondary font-light leading-relaxed">
              We collect information that you choose to provide (such as contact
              details and account credentials for integrations), information
              received from integrations you authorize with the Service, and
              technical and usage data (such as device, log, diagnostic, and
              security signals) needed to operate, secure, and improve the
              Service.
            </p>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="text-xl font-medium text-primary">
              3. How we use information
            </h2>
            <p className="text-secondary font-light leading-relaxed">
              We use information to provide and improve the Service, communicate
              with you, troubleshoot and secure our systems, comply with legal
              obligations, and enforce our agreements. Consistent with our
              public materials, we do not train general-purpose artificial
              intelligence models on your proprietary Customer Data for unrelated
              products unless we tell you otherwise in writing and you agree.
              Where outbound actions may be drafted or initiated through the
              Service, deployment is subject to the controls described in our
              product terms and onboarding (including human approval where
              applicable).
            </p>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="text-xl font-medium text-primary">
              4. Disclosure and subprocessors
            </h2>
            <p className="text-secondary font-light leading-relaxed">
              We may share information with service providers who process data on
              our behalf under contractual safeguards, where required by law, or
              to protect rights, safety, and security. We may also share
              aggregated or de-identified information that cannot reasonably be
              used to identify you.
            </p>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="text-xl font-medium text-primary">
              5. Retention and security
            </h2>
            <p className="text-secondary font-light leading-relaxed">
              We retain information only as long as needed for the purposes
              described above, consistent with applicable law and your
              agreement with us (including archival and backups). We use
              technical and organizational measures designed to protect
              information—for example encryption in transit and at rest where
              applicable and access controls as described in your order form or
              security documentation where provided.
            </p>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="text-xl font-medium text-primary">
              6. Your choices and rights
            </h2>
            <p className="text-secondary font-light leading-relaxed">
              Depending on where you live, you may have rights regarding access,
              correction, deletion, portability, objection, or limiting certain
              uses of information. You may exercise rights consistent with law by
              contacting us at the address below. If you reside in California or
              another jurisdiction that requires specific disclosures, additional
              information may be posted or provided as required when we formally
              offer the Service commercially in those regions.
            </p>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="text-xl font-medium text-primary">
              7. Children and international transfers
            </h2>
            <p className="text-secondary font-light leading-relaxed">
              The Service is not directed to children under 16. If information is
              processed across borders, we use appropriate safeguards as
              required by applicable law or contract.
            </p>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="text-xl font-medium text-primary">
              8. Changes
            </h2>
            <p className="text-secondary font-light leading-relaxed">
              We may update this Privacy Policy from time to time. We will post
              the updated policy on our site with a revised &quot;last
              updated&quot; date unless another notice method is legally required.
            </p>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="text-xl font-medium text-primary">9. Contact</h2>
            <p className="text-secondary font-light leading-relaxed">
              Tomo Solutions Inc.
              <br />
              Attention: Privacy
              <br />
              Email: privacy@tomosolutions.com
            </p>
          </section>
        </article>
      </main>
  );
}
