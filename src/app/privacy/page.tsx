import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalArticle,
  LegalH3,
  LegalLead,
  LegalMeta,
  LegalP,
  LegalSection,
  LegalTable,
  LegalTitle,
  LegalUl,
} from "@/components/LegalProse";

export const metadata: Metadata = {
  title: "Privacy Policy — Tomo Solutions",
  description:
    "How Tomo Solutions Inc. collects, uses, discloses, retains, and protects personal information in connection with TOMO.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-primary px-6 md:px-8 pt-24 pb-16">
      <LegalArticle>
        <LegalTitle>Privacy Policy</LegalTitle>
        <LegalMeta>Last updated: July 2026</LegalMeta>
        <LegalLead>
          <strong className="font-medium text-primary">Entity:</strong> Tomo
          Solutions Inc., a Delaware corporation (“Tomo Solutions”, “we”, “us”,
          or “our”)
          <br />
          <strong className="font-medium text-primary">Product:</strong> TOMO —
          AI for fundraising (“TOMO”, “Tomo”, or “the Service”)
          <br />
          <strong className="font-medium text-primary">Contact:</strong>{" "}
          <a
            href="mailto:support@tomosolutions.ai"
            className="text-primary underline underline-offset-2 hover:text-secondary"
          >
            support@tomosolutions.ai
          </a>
        </LegalLead>
        <LegalP>
          This Privacy Policy explains how we collect, use, disclose, retain, and
          protect personal information in connection with the Service and our
          websites (including tomosolutions.ai). It should be read together with
          our{" "}
          <Link
            href="/terms"
            className="text-primary underline underline-offset-2 hover:text-secondary"
          >
            Terms &amp; Conditions
          </Link>
          .
        </LegalP>
        <LegalP>
          If you use TOMO on behalf of a fund, firm, or other organisation, that
          organisation is typically the <strong className="font-medium text-primary">controller</strong>{" "}
          (or “business”) of investor and pipeline personal data it instructs us
          to process, and Tomo Solutions acts as a{" "}
          <strong className="font-medium text-primary">processor</strong> (or
          “service provider”) for that Customer Content. Tomo Solutions is the
          controller of account, billing, website, and marketing data we collect
          directly about users and prospects.
        </LegalP>

        <LegalSection title="1. Scope">
          <LegalP>This Policy covers:</LegalP>
          <LegalUl>
            <li>visitors to our public websites;</li>
            <li>
              users of the TOMO application (general partners, IR teammates, and
              other workspace members); and
            </li>
            <li>
              personal data contained in Customer Content that customers sync or
              upload (for example, limited partner / allocator contact details
              and correspondence).
            </li>
          </LegalUl>
          <LegalP>
            It does <strong className="font-medium text-primary">not</strong>{" "}
            cover third-party websites or services you connect (Microsoft,
            Google, CRM vendors, Slack, Stripe, etc.), which have their own
            policies.
          </LegalP>
        </LegalSection>

        <LegalSection title="2. Personal data we collect">
          <LegalH3>2.1 Account and workspace data</LegalH3>
          <LegalUl>
            <li>
              Name, work email, authentication identifiers, and password hashes
              (if email/password sign-in is used).
            </li>
            <li>
              Sign-in metadata from identity providers (for example Google or
              Microsoft) when you choose SSO-style sign-in.
            </li>
            <li>
              Organisation / fund / workspace names, roles, preferences,
              notification settings, and timezone.
            </li>
            <li>Team membership (who is invited to a workspace).</li>
          </LegalUl>

          <LegalH3>2.2 Connected mailbox, calendar, and meeting data</LegalH3>
          <LegalP>
            If you authorise integrations, we process data from those providers
            as needed to operate the Service, which may include:
          </LegalP>
          <LegalUl>
            <li>
              email metadata (participants, timestamps, subject lines,
              folders/labels as exposed by the API);
            </li>
            <li>
              email body content for messages in scope of your historical and
              ongoing sync settings;
            </li>
            <li>
              extracted text from certain attachments (for example PDF/DOCX)
              where the feature is enabled — we do{" "}
              <strong className="font-medium text-primary">not</strong> require
              storing original attachment binaries for core V1 processing;
            </li>
            <li>
              calendar events (titles, times, attendees, locations, conferencing
              links);
            </li>
            <li>
              meeting transcripts and/or AI meeting recaps when you enable
              transcript features and your provider makes them available; and
            </li>
            <li>
              contacts from connected directories where you grant that scope.
            </li>
          </LegalUl>
          <LegalP>
            You control which providers you connect and can disconnect them in
            Settings (where available).
          </LegalP>

          <LegalH3>2.3 CRM / pipeline and fundraising records</LegalH3>
          <LegalP>
            Data you import (CSV/Excel or similar) or sync via supported CRM
            connectors, which may include:
          </LegalP>
          <LegalUl>
            <li>
              organisation and contact names, titles, emails, phones, geography;
            </li>
            <li>
              pipeline stages, ticket sizes, mandate notes, owners, and related
              IR fields;
            </li>
            <li>interaction history and notes you store in TOMO; and</li>
            <li>
              materials you upload for drafting or workflow context.
            </li>
          </LegalUl>

          <LegalH3>2.4 Product-generated data</LegalH3>
          <LegalUl>
            <li>
              Drafts, summaries, classifications, signal outputs, reminders,
              daily briefs, workflow configuration, and action logs.
            </li>
            <li>
              Tone-calibration / personalisation artefacts derived from your
              writing samples so drafts can match your voice (see Section 5).
            </li>
            <li>
              Approvals, edits, skips, and related audit events for outbound
              actions.
            </li>
          </LegalUl>

          <LegalH3>2.5 Usage, device, and diagnostics</LegalH3>
          <LegalUl>
            <li>
              Log data such as IP address, browser/user agent, device type,
              approximate location derived from IP, pages/features used, and
              timestamps.
            </li>
            <li>
              Cookies and similar technologies for session continuity, security,
              and analytics (see Section 11).
            </li>
            <li>
              Error and performance telemetry (configured to minimise unnecessary
              personal data).
            </li>
          </LegalUl>

          <LegalH3>2.6 Billing</LegalH3>
          <LegalUl>
            <li>
              Billing name, email, organisation details, plan, invoices, and
              limited payment metadata from our payment processor.
            </li>
            <li>
              We do <strong className="font-medium text-primary">not</strong>{" "}
              store full payment card numbers; card data is handled by our
              payment processor (for example Stripe).
            </li>
          </LegalUl>

          <LegalH3>2.7 Communications with us</LegalH3>
          <LegalUl>
            <li>
              Emails, intro requests, support tickets, and call/meeting notes
              when you contact us.
            </li>
            <li>Marketing preferences if you subscribe to updates.</li>
          </LegalUl>

          <LegalH3>2.8 Data we do not intentionally seek</LegalH3>
          <LegalP>
            We do not require special-category data (for example health data) to
            use TOMO. Please do not upload such data unless necessary and lawful.
            If it appears incidentally in mailbox content, it is processed only
            as part of providing the Service under your instructions.
          </LegalP>
        </LegalSection>

        <LegalSection title="3. How we use personal data">
          <LegalP>We use personal data to:</LegalP>
          <LegalUl>
            <li>provide, operate, secure, and support the Service;</li>
            <li>authenticate users and manage workspaces;</li>
            <li>sync and index connected data sources you enable;</li>
            <li>
              compute relationship signals, reminders, metrics, and briefings;
            </li>
            <li>
              generate drafts and other AI outputs for{" "}
              <strong className="font-medium text-primary">
                your review and approval
              </strong>
              ;
            </li>
            <li>
              send service notifications (in-app, email, and optional Slack);
            </li>
            <li>personalise drafting tone for your user/workspace;</li>
            <li>
              prevent abuse, debug issues, and maintain availability;
            </li>
            <li>process payments and prevent fraud;</li>
            <li>comply with law and enforce our Terms; and</li>
            <li>
              communicate product updates or marketing where permitted (you may
              opt out of non-essential marketing).
            </li>
          </LegalUl>
          <LegalP>
            <strong className="font-medium text-primary">
              Human-in-the-loop:
            </strong>{" "}
            outbound investor or external email is not sent without an explicit
            user approval action in the product (unless a future feature
            expressly discloses a different control model and you enable it).
          </LegalP>
        </LegalSection>

        <LegalSection title="4. Legal bases (GDPR / UK GDPR and similar laws)">
          <LegalP>Where these laws apply, we rely on:</LegalP>
          <LegalTable
            headers={["Purpose", "Typical legal basis"]}
            rows={[
              [
                "Providing the Service to a customer organisation",
                "Performance of a contract; and/or legitimate interests of the customer as controller for investor-relationship management",
              ],
              [
                "Our processing of Customer Content as processor",
                "Documented customer instructions + DPA; customer’s lawful basis",
              ],
              [
                "Account security, fraud prevention, service integrity",
                "Legitimate interests; legal obligation where applicable",
              ],
              [
                "Optional marketing emails",
                "Consent or soft opt-in where permitted; legitimate interests with opt-out where permitted",
              ],
              [
                "Optional product analytics cookies (non-essential)",
                "Consent where required",
              ],
              [
                "Compliance with legal process",
                "Legal obligation",
              ],
            ]}
          />
        </LegalSection>

        <LegalSection title="5. Artificial intelligence, training, and model providers">
          <LegalH3>5.1 How AI is used</LegalH3>
          <LegalP>
            We use AI systems (currently including Google Cloud Vertex AI /
            Gemini for production inference, subject to change with notice via
            our sub-processor disclosures) to:
          </LegalP>
          <LegalUl>
            <li>draft messages and summaries;</li>
            <li>classify or prioritise items;</li>
            <li>
              support contact suggestions and workflow drafting; and
            </li>
            <li>generate other in-product assistance.</li>
          </LegalUl>
          <LegalP>
            Prompts may include relevant Customer Content (for example recent
            correspondence excerpts, CRM fields, or transcript snippets) needed
            for the task.
          </LegalP>

          <LegalH3>5.2 No training on customer data for shared models</LegalH3>
          <LegalP>
            <strong className="font-medium text-primary">
              We do not use Customer Content to train foundation models or to
              improve generalised models that serve other customers.
            </strong>
          </LegalP>
          <LegalP>
            Any future programme that would use Customer Content for shared model
            training would require{" "}
            <strong className="font-medium text-primary">
              explicit consent
            </strong>{" "}
            and an updated DPA or addendum before it begins.
          </LegalP>

          <LegalH3>5.3 Tone calibration (personalisation for you only)</LegalH3>
          <LegalP>
            To make drafts sound like you, we may build{" "}
            <strong className="font-medium text-primary">
              per-user or per-workspace personalisation artefacts
            </strong>{" "}
            (for example style profiles) from your sent messages and related
            writing samples. These artefacts:
          </LegalP>
          <LegalUl>
            <li>
              exist to provide the Service{" "}
              <strong className="font-medium text-primary">to you</strong>;
            </li>
            <li>
              are <strong className="font-medium text-primary">not</strong> used
              to train foundation models for other customers; and
            </li>
            <li>
              are deleted or de-identified when your account/workspace is deleted
              according to our retention rules.
            </li>
          </LegalUl>

          <LegalH3>
            5.4 Zero retention at the LLM provider (where available)
          </LegalH3>
          <LegalP>
            We configure supported LLM providers for{" "}
            <strong className="font-medium text-primary">
              zero data retention
            </strong>{" "}
            of prompts and responses (process in-memory / no training use under
            the provider’s enterprise terms), subject to the provider’s
            then-current documentation and our contractual terms with them.
            Operational API metadata (for example request IDs, token counts) may
            still be logged by providers or by us for reliability and billing.
          </LegalP>

          <LegalH3>5.5 Important clarification about storage</LegalH3>
          <LegalP>
            AI inference may be ephemeral at the model provider, but{" "}
            <strong className="font-medium text-primary">
              TOMO itself stores Customer Content as needed to operate the
              product
            </strong>{" "}
            — including email bodies, metadata, drafts, transcripts, signals, and
            audit logs — under the retention rules in Section 8. Claims that
            content is “never stored” apply only to certain provider-side
            inference settings,{" "}
            <strong className="font-medium text-primary">not</strong> to TOMO’s
            application database and related storage.
          </LegalP>
        </LegalSection>

        <LegalSection title="6. When we share personal data">
          <LegalP>
            We do not sell personal information for money. We do not “sell” or
            “share” personal information for cross-context behavioural
            advertising as those terms are defined under the CCPA/CPRA, and we do
            not use Customer Content for advertising networks.
          </LegalP>
          <LegalP>
            We disclose personal data only as follows:
          </LegalP>

          <LegalH3>6.1 Sub-processors / service providers</LegalH3>
          <LegalP>
            Vendors that process data on our instructions to run the Service.
            Current categories and representative providers:
          </LegalP>
          <LegalTable
            headers={["Sub-processor / category", "Purpose", "Typical data"]}
            rows={[
              [
                "Supabase",
                "Database, file storage, related backend",
                "Workspace and product data",
              ],
              [
                "Vercel",
                "Application hosting / edge delivery",
                "Request data in transit",
              ],
              [
                "Amazon Web Services (AWS)",
                "Workers, queues, object storage, secrets, transactional email (if used)",
                "Workspace and operational data",
              ],
              [
                "Google Cloud — Firebase Authentication",
                "Sign-in",
                "Account identifiers, auth metadata",
              ],
              [
                "Google Cloud — Vertex AI",
                "LLM inference",
                "Prompts/responses (zero retention where configured)",
              ],
              [
                "Google (Workspace APIs)",
                "Mail/calendar/meet sync when you connect Google",
                "Data already in your Google account, plus tokens we store",
              ],
              [
                "Microsoft (Graph API)",
                "Mail/calendar/Teams sync when you connect Microsoft",
                "Data already in your Microsoft account, plus tokens we store",
              ],
              [
                "Stripe",
                "Billing",
                "Customer billing details",
              ],
              [
                "Postmark and/or AWS SES",
                "Transactional product email",
                "Recipient email + message content",
              ],
              [
                "Slack",
                "Optional daily brief / notifications",
                "Content you enable to send to Slack",
              ],
              [
                "Sentry (or similar)",
                "Error monitoring",
                "Stack traces; configured to limit PII",
              ],
              [
                "PostHog, Vercel Analytics, or similar",
                "Product analytics",
                "Pseudonymous usage events, workspace IDs",
              ],
              [
                "Affinity / Backstop (optional)",
                "CRM connectors you enable",
                "Data per your grant with that CRM",
              ],
            ]}
          />
          <LegalP>
            We maintain a current sub-processor list for customers and aim to
            provide{" "}
            <strong className="font-medium text-primary">
              at least 30 days’ notice
            </strong>{" "}
            before adding a new sub-processor that processes Customer Content,
            except for urgent security replacements.
          </LegalP>

          <LegalH3>6.2 Integrations you enable</LegalH3>
          <LegalP>
            When you connect a third party, data flows according to the
            permissions you grant that party.
          </LegalP>

          <LegalH3>6.3 Workspace teammates and authorised users</LegalH3>
          <LegalP>
            Members of your workspace can access shared Customer Content
            according to product permissions.
          </LegalP>

          <LegalH3>6.4 Professional advisors and corporate transactions</LegalH3>
          <LegalP>
            Advisors under confidentiality obligations; or parties to a merger,
            acquisition, financing, or sale of assets, subject to appropriate
            protections.
          </LegalP>

          <LegalH3>6.5 Legal and safety</LegalH3>
          <LegalP>
            Where required by law, regulation, legal process, or to protect
            rights, safety, and security of Tomo Solutions, our users, or others.
          </LegalP>

          <LegalH3>6.6 Staff support access</LegalH3>
          <LegalP>
            In early customer programmes, authorised Tomo Solutions personnel may
            access workspace data as needed for onboarding and support, under
            internal access controls and logging. In-product “login as customer”
            impersonation is not a standard V1 feature; support is typically
            provided with your participation (for example screen share) plus
            limited backend operational access when necessary.
          </LegalP>
        </LegalSection>

        <LegalSection title="7. International transfers and data location">
          <LegalH3>7.1 Primary hosting (current)</LegalH3>
          <LegalP>
            <strong className="font-medium text-primary">
              V1 production systems are hosted primarily in the United States
            </strong>{" "}
            (for example AWS <code className="text-primary">us-east-1</code> and
            related US-region services). Personal data you submit will generally
            be processed and stored in the United States.
          </LegalP>

          <LegalH3>7.2 EU / UK customers</LegalH3>
          <LegalP>
            We implement GDPR/UK GDPR controls (DPA, SCCs or equivalent transfer
            tools where required, security measures, and data-subject request
            handling).{" "}
            <strong className="font-medium text-primary">
              Dedicated EU data residency is not guaranteed in V1
            </strong>{" "}
            and is planned as a later option (for example EU-region hosting). Do
            not rely on marketing shorthand such as “EU &amp; UK data residency”
            unless confirmed in your order form or DPA.
          </LegalP>

          <LegalH3>7.3 Transfer safeguards</LegalH3>
          <LegalP>
            Where we transfer personal data from the EEA, UK, or Switzerland to
            the US or other countries, we use appropriate safeguards such as the
            European Commission’s Standard Contractual Clauses (and UK addenda
            where applicable), plus supplementary measures as needed.
          </LegalP>
        </LegalSection>

        <LegalSection title="8. Retention">
          <LegalP>
            We retain personal data only as long as needed for the purposes
            described in this Policy, including security, dispute resolution, and
            legal compliance. Representative product rules (which may be refined
            in your DPA):
          </LegalP>
          <LegalTable
            headers={["Data class", "Typical retention"]}
            rows={[
              [
                "Full email / transcript body text and extracted attachment text",
                <>
                  About <strong className="font-medium text-primary">12 months</strong> from the interaction date, then bodies are nulled or purged while metadata may remain
                </>,
              ],
              [
                "Email/interaction metadata (without full body)",
                <>
                  Up to about <strong className="font-medium text-primary">36 months</strong>, then deleted
                </>,
              ],
              [
                "Drafts, CRM/pipeline records, briefs, workflows, materials",
                "While the workspace remains active; deleted on workspace/account closure after any grace period",
              ],
              [
                "Append-only operational logs (signals, action log, delivery/safety logs, auth events)",
                "Retained while the account is active for product integrity and audit; personal identifiers may be scrubbed on erasure requests",
              ],
              [
                "OAuth tokens",
                "Revoked on disconnect; ciphertext zeroised; residual audit row may remain",
              ],
              [
                "CSV import originals",
                <>
                  About <strong className="font-medium text-primary">90 days</strong>, then auto-purged
                </>,
              ],
              [
                "Account after deletion request",
                <>
                  Soft-delete grace period (about <strong className="font-medium text-primary">30 days</strong>), then hard deletion / scrubbing
                </>,
              ],
              [
                "Backups",
                "Per provider backup schedules (rolling windows), then expire",
              ],
              [
                "Billing records",
                "As required for tax and accounting",
              ],
            ]}
          />
          <LegalP>
            When you disconnect an integration,{" "}
            <strong className="font-medium text-primary">new</strong> ingestion
            stops; data already stored remains until deletion rules or an
            explicit purge/erasure request applies.
          </LegalP>
        </LegalSection>

        <LegalSection title="9. Security">
          <LegalP>
            We apply administrative, technical, and organisational measures
            appropriate to the sensitivity of fundraising and LP relationship
            data, including:
          </LegalP>
          <LegalUl>
            <li>
              encryption{" "}
              <strong className="font-medium text-primary">in transit</strong>{" "}
              (TLS) and{" "}
              <strong className="font-medium text-primary">at rest</strong> for
              datastores and sensitive secrets;
            </li>
            <li>
              envelope encryption / vaulting for OAuth tokens and similar
              secrets;
            </li>
            <li>access controls, authentication, and audit logging;</li>
            <li>network and application security monitoring; and</li>
            <li>vendor diligence for material sub-processors.</li>
          </LegalUl>
          <LegalP>
            <strong className="font-medium text-primary">Clarification:</strong>{" "}
            “Encryption in transit and at rest” is not the same as classical
            end-to-end encryption where only you hold decryption keys. We (and
            subprocessors under our instruction) must be able to decrypt and
            process data to provide AI drafting, search, signals, and sync.
          </LegalP>
          <LegalP>
            No method of transmission or storage is 100% secure. You are
            responsible for securing your devices, upstream email/CRM accounts,
            and workspace invitations.
          </LegalP>
          <LegalP>
            We pursue institutional compliance attestations (for example SOC 2
            Type 1 and Google CASA Tier 2 for relevant OAuth scopes) according to
            our roadmap. Availability of a particular report on a given date is
            confirmed in diligence materials, not assumed from this Policy alone.
          </LegalP>
        </LegalSection>

        <LegalSection title="10. Your rights and choices">
          <LegalH3>10.1 Product controls</LegalH3>
          <LegalP>
            Depending on features available to you, you may:
          </LegalP>
          <LegalUl>
            <li>access and update profile and workspace settings;</li>
            <li>connect or disconnect integrations;</li>
            <li>
              control notification channels (including Slack opt-in);
            </li>
            <li>
              export workspace data (where the export feature is enabled); and
            </li>
            <li>
              approve, edit, or reject AI drafts before sending.
            </li>
          </LegalUl>

          <LegalH3>
            10.2 Privacy rights (GDPR, UK GDPR, CCPA/CPRA, and similar)
          </LegalH3>
          <LegalP>
            Subject to verification and legal exceptions, you may have the right
            to:
          </LegalP>
          <LegalUl>
            <li>
              <strong className="font-medium text-primary">access</strong>{" "}
              personal data;
            </li>
            <li>
              <strong className="font-medium text-primary">correct</strong>{" "}
              inaccurate data;
            </li>
            <li>
              <strong className="font-medium text-primary">delete</strong>{" "}
              personal data;
            </li>
            <li>
              <strong className="font-medium text-primary">port</strong> data in a
              usable format;
            </li>
            <li>
              <strong className="font-medium text-primary">restrict</strong> or{" "}
              <strong className="font-medium text-primary">object</strong> to
              certain processing;
            </li>
            <li>
              <strong className="font-medium text-primary">
                withdraw consent
              </strong>{" "}
              where processing is consent-based; and
            </li>
            <li>
              for California residents: know, delete, correct, and opt out of
              sale/sharing (we do not sell/share as defined above), and not be
              discriminated against for exercising rights.
            </li>
          </LegalUl>
          <LegalP>
            <strong className="font-medium text-primary">
              How to submit a request:
            </strong>{" "}
            email{" "}
            <a
              href="mailto:support@tomosolutions.ai"
              className="text-primary underline underline-offset-2 hover:text-secondary"
            >
              support@tomosolutions.ai
            </a>{" "}
            with the subject line “Privacy Request”.
          </LegalP>
          <LegalUl>
            <li>
              If you are an{" "}
              <strong className="font-medium text-primary">end user</strong> of a
              customer workspace, we may redirect you to your organisation (the
              controller) for Customer Content requests, or act on their
              instructions.
            </li>
            <li>
              We aim to respond within statutory timelines (for example, about 30
              days under GDPR for many requests; CCPA timelines as applicable).
            </li>
          </LegalUl>

          <LegalH3>10.3 “Do Not Sell or Share”</LegalH3>
          <LegalP>
            We do not sell personal information or share it for cross-context
            behavioural advertising. If that changes, we will update this Policy
            and provide required opt-out mechanisms.
          </LegalP>

          <LegalH3>10.4 Marketing opt-out</LegalH3>
          <LegalP>
            You can unsubscribe from marketing emails via the link in those
            emails or by contacting us. Service/transactional messages are not
            marketing and may still be sent.
          </LegalP>
        </LegalSection>

        <LegalSection title="11. Cookies and similar technologies">
          <LegalP>We use cookies and similar technologies to:</LegalP>
          <LegalUl>
            <li>keep you signed in and secure sessions;</li>
            <li>remember preferences; and</li>
            <li>understand product and website usage (analytics).</li>
          </LegalUl>
          <LegalP>
            Where required, we request consent for non-essential cookies. You can
            control cookies through browser settings; some features may not work
            if essential cookies are blocked.
          </LegalP>
        </LegalSection>

        <LegalSection title="12. Children’s privacy">
          <LegalP>
            The Service is for business users and is not directed to children. We
            do not knowingly collect personal data from anyone under 16 (or higher
            age required in your jurisdiction). If you believe a minor’s data was
            provided, contact us and we will delete it.
          </LegalP>
        </LegalSection>

        <LegalSection title="13. Automated decision-making">
          <LegalP>
            TOMO uses automated processing to score, classify, and prioritise
            relationship signals and to generate drafts. These outputs are
            assistive. Material outbound actions require human approval. We do
            not use Customer Content for solely automated decisions that produce
            legal or similarly significant effects about individuals without
            human involvement, within the meaning of GDPR Article 22, as part of
            the core Service.
          </LegalP>
        </LegalSection>

        <LegalSection title="14. Changes to this Policy">
          <LegalP>
            We may update this Policy from time to time. The “Last updated” date
            will change when we do. Material changes will be communicated by
            email or in-product notice where appropriate. Continued use after the
            effective date means you acknowledge the updated Policy, except where
            law requires a different consent mechanism.
          </LegalP>
        </LegalSection>

        <LegalSection title="15. Contact and complaints">
          <LegalP>
            <strong className="font-medium text-primary">
              Tomo Solutions Inc.
            </strong>
            <br />
            Email:{" "}
            <a
              href="mailto:support@tomosolutions.ai"
              className="text-primary underline underline-offset-2 hover:text-secondary"
            >
              support@tomosolutions.ai
            </a>
            <br />
            Website:{" "}
            <a
              href="https://tomosolutions.ai"
              className="text-primary underline underline-offset-2 hover:text-secondary"
            >
              https://tomosolutions.ai
            </a>
          </LegalP>
          <LegalP>
            For GDPR/UK GDPR matters you may also contact your organisation’s
            administrator if your data was provided through a customer workspace.
            You may have the right to lodge a complaint with a supervisory
            authority in your place of residence or work (for example an EU/EEA
            DPA or the UK ICO).
          </LegalP>
          <LegalP>
            If we designate an external Data Protection Officer or EU/UK
            representative, contact details will be published here or in your DPA
            when appointed.
          </LegalP>
        </LegalSection>

        <LegalSection title="16. Region-specific notices">
          <LegalH3>16.1 California (CCPA/CPRA)</LegalH3>
          <LegalP>
            Categories of personal information we collect track Sections 2 and 6
            (identifiers, commercial information, internet activity, professional
            information, and inferences used to personalise the Service). We
            collect this information for the business purposes in Section 3. We
            disclose personal information to service providers as described in
            Section 6. We do not sell personal information or share it for
            cross-context behavioural advertising. California residents may
            exercise rights via{" "}
            <a
              href="mailto:support@tomosolutions.ai"
              className="text-primary underline underline-offset-2 hover:text-secondary"
            >
              support@tomosolutions.ai
            </a>
            . We will verify requests as required by law. Authorised agents may
            submit requests with proof of authorisation.
          </LegalP>

          <LegalH3>16.2 EEA / UK</LegalH3>
          <LegalP>
            Additional detail on lawful bases, transfers, retention, and
            processor/controller roles appears above. Customers requiring a
            signed DPA should contact{" "}
            <a
              href="mailto:support@tomosolutions.ai"
              className="text-primary underline underline-offset-2 hover:text-secondary"
            >
              support@tomosolutions.ai
            </a>{" "}
            before enabling mailbox or CRM ingestion.
          </LegalP>
        </LegalSection>
      </LegalArticle>
    </main>
  );
}
