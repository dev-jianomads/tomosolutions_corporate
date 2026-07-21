import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalArticle,
  LegalH3,
  LegalLead,
  LegalMeta,
  LegalP,
  LegalSection,
  LegalTitle,
  LegalUl,
} from "@/components/LegalProse";

export const metadata: Metadata = {
  title: "Terms & Conditions — Tomo Solutions",
  description:
    "Terms & Conditions governing access to and use of TOMO by Tomo Solutions Inc.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-primary px-6 md:px-8 pt-24 pb-16">
      <LegalArticle>
        <LegalTitle>Terms &amp; Conditions</LegalTitle>
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
          These Terms &amp; Conditions (“Terms”) govern access to and use of the
          Service. By accessing or using the Service, creating an account, or
          clicking to accept these Terms, you agree to be bound by them. If you
          do not agree, do not use the Service.
        </LegalP>
        <LegalP>
          If you use the Service on behalf of an organisation, you represent that
          you have authority to bind that organisation, and “you” includes that
          organisation.
        </LegalP>

        <LegalSection title="1. The Service">
          <LegalH3>1.1 What TOMO is</LegalH3>
          <LegalP>
            TOMO is an AI-assisted execution workspace for institutional
            fundraising and investor relations. Depending on your plan and
            enabled features, the Service may:
          </LegalP>
          <LegalUl>
            <li>connect to your email, calendar, and meeting tools;</li>
            <li>ingest pipeline or CRM data you import or connect;</li>
            <li>
              analyse relationship and engagement signals across those sources;
            </li>
            <li>
              surface priorities, reminders, and daily briefings;
            </li>
            <li>
              draft outbound messages, follow-ups, and related materials in your
              voice;
            </li>
            <li>
              support workflows, lists, relationship records, insights, and
              activity history; and
            </li>
            <li>
              deliver notifications in-product, by email, and (if you enable it)
              via Slack or similar channels.
            </li>
          </LegalUl>
          <LegalP>
            TOMO is designed to sit alongside your existing CRM and other systems
            of record. Unless we expressly agree otherwise in writing, your CRM
            (or equivalent) remains authoritative for compliance, legal, and
            audit records of commitments and investor documentation.
          </LegalP>

          <LegalH3>1.2 Human approval for outbound communications</LegalH3>
          <LegalP>
            <strong className="font-medium text-primary">
              Nothing is sent on your behalf without your explicit approval.
            </strong>{" "}
            Drafts, suggested follow-ups, scheduling proposals, and other
            outbound communications are presented for your review. You decide
            whether to approve, edit, skip, or discard them. TOMO does not
            auto-send investor or other external email.
          </LegalP>
          <LegalP>
            When you approve a send, the message is generally sent from your
            connected mailbox (for example, your Microsoft 365 or Google
            Workspace account), not from a Tomo-operated mailbox, unless a
            different delivery path is expressly configured and disclosed for a
            specific feature.
          </LegalP>

          <LegalH3>1.3 AI-generated content — important limitations</LegalH3>
          <LegalP>
            The Service uses machine learning and large language models to
            generate drafts, summaries, classifications, signals, and
            recommendations. You acknowledge that:
          </LegalP>
          <LegalUl>
            <li>
              AI output may be incomplete, inaccurate, outdated, or inappropriate
              for your situation;
            </li>
            <li>
              you are solely responsible for reviewing all drafts and actions
              before approving them;
            </li>
            <li>
              TOMO does{" "}
              <strong className="font-medium text-primary">not</strong> provide
              investment, legal, tax, accounting, regulatory, or fiduciary
              advice;
            </li>
            <li>
              TOMO does{" "}
              <strong className="font-medium text-primary">not</strong> guarantee
              fundraising outcomes, capital raised, LP conversions, response
              rates, or time saved; and
            </li>
            <li>
              metrics, signals, and “heating / cooling” style indicators are
              assistive analytics, not warranties of investor intent.
            </li>
          </LegalUl>

          <LegalH3>1.4 Changes to the Service</LegalH3>
          <LegalP>
            We may add, modify, or discontinue features at any time. Where a
            change materially reduces core paid functionality, we will provide
            reasonable notice where practicable. We may offer beta or early-access
            features that are provided “as is” and may change or end without
            notice.
          </LegalP>

          <LegalH3>1.5 Founding Circle and custom agreements</LegalH3>
          <LegalP>
            If you participate in a Founding Circle, pilot, or other custom
            commercial programme, a separate order form, pilot letter, or master
            services agreement may apply. In the event of conflict between that
            agreement and these Terms on commercial terms (fees, term, service
            levels, or special commitments), the signed agreement controls for
            those topics. These Terms still govern use of the Service unless
            expressly overridden.
          </LegalP>
        </LegalSection>

        <LegalSection title="2. Accounts, workspaces, and security">
          <LegalH3>2.1 Registration</LegalH3>
          <LegalP>
            You must provide accurate, complete, and current account information.
            You may sign in with email/password or supported identity providers
            (for example, Google or Microsoft), as offered.
          </LegalP>

          <LegalH3>2.2 Workspaces and teammates</LegalH3>
          <LegalP>
            The Service is organised around{" "}
            <strong className="font-medium text-primary">workspaces</strong>{" "}
            (teams). Members of a workspace may access shared fundraising data,
            integrations, drafts, and settings according to the permissions model
            then in effect. In early releases, workspace members may have
            substantially equivalent access; role-based restriction may be
            introduced later. You are responsible for:
          </LegalP>
          <LegalUl>
            <li>who you invite to your workspace;</li>
            <li>their compliance with these Terms; and</li>
            <li>activity under your workspace accounts.</li>
          </LegalUl>

          <LegalH3>2.3 Credentials and OAuth grants</LegalH3>
          <LegalP>
            You are responsible for safeguarding login credentials and for OAuth
            (or similar) grants you authorise to email, calendar, CRM, Slack, or
            other data sources. You must notify us promptly of any suspected
            unauthorised access. We are not responsible for unauthorised access
            resulting from your failure to maintain security of credentials,
            devices, or upstream accounts.
          </LegalP>

          <LegalH3>2.4 Age and eligibility</LegalH3>
          <LegalP>
            The Service is for business users. You must be at least 18 years old
            (or the age of majority in your jurisdiction) and able to form a
            binding contract. The Service is not directed to consumers acting in
            a personal capacity for non-business use where restricted by law.
          </LegalP>
        </LegalSection>

        <LegalSection title="3. Acceptable use">
          <LegalH3>3.1 Lawful use only</LegalH3>
          <LegalP>
            You may use the Service only for lawful purposes and in accordance
            with these Terms and applicable law (including securities, privacy,
            anti-spam, and export laws).
          </LegalP>

          <LegalH3>3.2 Prohibited conduct</LegalH3>
          <LegalP>You agree not to:</LegalP>
          <LegalUl>
            <li>
              interfere with or disrupt the Service, its infrastructure, or other
              customers;
            </li>
            <li>
              attempt to gain unauthorised access to systems, accounts, or data;
            </li>
            <li>
              reverse-engineer, decompile, or create derivative works of the
              Service except to the extent such restriction is prohibited by law;
            </li>
            <li>
              use scrapers, bots, or automated access except through documented
              APIs we expressly make available to you;
            </li>
            <li>
              use the Service to send spam, unlawful, deceptive, or harassing
              communications;
            </li>
            <li>upload or process data you do not have rights to use;</li>
            <li>
              circumvent usage limits, safety controls, approval gates, or billing
              mechanisms;
            </li>
            <li>
              misrepresent that AI-generated content was solely human-authored
              where disclosure is required; or
            </li>
            <li>
              use the Service to build a competing product by systematically
              extracting non-public features, prompts, or datasets.
            </li>
          </LegalUl>

          <LegalH3>3.3 Suspension</LegalH3>
          <LegalP>
            We may suspend or terminate access for misuse, security risk,
            non-payment, legal obligation, or material breach of these Terms.
          </LegalP>
        </LegalSection>

        <LegalSection title="4. Customer content and data licence">
          <LegalH3>4.1 Your ownership</LegalH3>
          <LegalP>
            You (and your licensors) retain ownership of content and data you
            submit to or sync into the Service, including emails, calendar
            events, CRM/pipeline records, transcripts, notes, drafts you create
            or edit, materials you upload, and workspace configuration
            (“Customer Content”).
          </LegalP>

          <LegalH3>4.2 Licence to Tomo Solutions</LegalH3>
          <LegalP>
            You grant Tomo Solutions a worldwide, non-exclusive licence to host,
            store, process, transmit, display, and create derivative works from
            Customer Content{" "}
            <strong className="font-medium text-primary">
              solely as needed to provide, secure, maintain, and support the
              Service
            </strong>
            , including:
          </LegalP>
          <LegalUl>
            <li>syncing and indexing connected data sources;</li>
            <li>
              generating signals, metrics, reminders, and briefs;
            </li>
            <li>generating and storing drafts for your approval;</li>
            <li>running AI inference through our subprocessors;</li>
            <li>delivering notifications you enable; and</li>
            <li>
              creating backups, logs, and security/abuse monitoring artefacts.
            </li>
          </LegalUl>
          <LegalP>
            This licence ends when Customer Content is deleted from our systems
            in accordance with our Privacy Policy and retention practices, except
            for copies retained as required by law or for legitimate residual
            purposes described in the Privacy Policy (for example, scrubbed audit
            records).
          </LegalP>

          <LegalH3>4.3 Your responsibilities for Customer Content</LegalH3>
          <LegalP>
            You represent that you have all rights, consents, and lawful bases
            needed to provide Customer Content to us and to instruct us to
            process it (including personal data about limited partners,
            prospects, colleagues, and other contacts). You are responsible for
            the accuracy of data you enter and for how you use outputs in your
            fundraising activities.
          </LegalP>

          <LegalH3>4.4 Feedback</LegalH3>
          <LegalP>
            If you provide feedback or suggestions about the Service, we may use
            them without restriction or obligation to you.
          </LegalP>
        </LegalSection>

        <LegalSection title="5. Privacy, training, and data protection">
          <LegalH3>5.1 Privacy Policy</LegalH3>
          <LegalP>
            Our{" "}
            <Link
              href="/privacy"
              className="text-primary underline underline-offset-2 hover:text-secondary"
            >
              Privacy Policy
            </Link>{" "}
            explains how we collect and process personal data and forms part of
            these Terms.
          </LegalP>

          <LegalH3>
            5.2 No training on your Customer Content (current practice)
          </LegalH3>
          <LegalP>
            <strong className="font-medium text-primary">
              We do not use your Customer Content to train our foundation models
              or to improve generalised models that serve other customers
            </strong>
            , except:
          </LegalP>
          <LegalUl>
            <li>
              where you give explicit written consent and (if required) a
              separate data processing addendum for a future programme; or
            </li>
            <li>
              for{" "}
              <strong className="font-medium text-primary">
                tone calibration and personalisation for your own
                user/workspace
              </strong>{" "}
              — limited profiles or embeddings derived from your sent-mail and
              related writing samples so drafts sound like you. These
              personalisation artefacts are used to provide the Service to you
              and are not used to train foundation models for other customers.
            </li>
          </LegalUl>
          <LegalP>
            We configure our LLM providers for{" "}
            <strong className="font-medium text-primary">
              zero retention of prompts and responses
            </strong>{" "}
            where that option is available and contractually supported, as
            further described in the Privacy Policy.
          </LegalP>

          <LegalH3>5.3 Data processing agreement</LegalH3>
          <LegalP>
            Where required by law (for example, GDPR) or by your institutional
            diligence, we will enter into a Data Processing Agreement (“DPA”). If
            a DPA is executed, it governs processing of personal data to the
            extent of conflict with these Terms on that subject.
          </LegalP>

          <LegalH3>5.4 Confidentiality</LegalH3>
          <LegalP>
            We will treat Customer Content as confidential and use it only as
            permitted by these Terms and the Privacy Policy, except for
            information that is or becomes public through no fault of ours, was
            independently developed, or was rightfully received from a third
            party without duty of confidentiality.
          </LegalP>
        </LegalSection>

        <LegalSection title="6. Third-party services and integrations">
          <LegalH3>6.1 Optional integrations</LegalH3>
          <LegalP>
            The Service may integrate with third-party providers you choose to
            connect, which may include (as available over time):
          </LegalP>
          <LegalUl>
            <li>
              Microsoft 365 / Outlook (mail, calendar, contacts, Teams
              meetings/transcripts);
            </li>
            <li>
              Google Workspace (Gmail, Calendar, Contacts, Meet);
            </li>
            <li>
              CRM or pipeline sources via file import (CSV/Excel and similar)
              and, where offered, native read connectors (for example Affinity or
              Backstop);
            </li>
            <li>Slack (for notifications you enable);</li>
            <li>payment processors (for example Stripe); and</li>
            <li>
              other providers listed in our Privacy Policy or product
              documentation.
            </li>
          </LegalUl>
          <LegalP>
            Availability of a connector depends on product roadmap, your licence
            with the third party, and successful OAuth or credential setup.
            Marketing references to future or planned connectors do not create a
            contractual obligation to ship them on a particular date.
          </LegalP>

          <LegalH3>6.2 Third-party terms</LegalH3>
          <LegalP>
            Your use of third-party services is subject to those providers’ terms
            and privacy policies. Tomo Solutions is not responsible for the
            availability, accuracy, security, or acts of third-party services. If
            a provider changes APIs, scopes, or pricing, related TOMO features
            may degrade or require reconfiguration.
          </LegalP>

          <LegalH3>6.3 Permissions you grant upstream</LegalH3>
          <LegalP>
            Connecting a data source requires you to grant permissions via that
            provider’s consent screen. You can disconnect integrations in product
            settings (where available). Disconnecting stops new ingestion;
            historical data already processed is retained until deleted under our
            retention and deletion practices unless you request earlier purge as
            described in the Privacy Policy.
          </LegalP>
        </LegalSection>

        <LegalSection title="7. Fees and payment">
          <LegalH3>7.1 Plans and pricing</LegalH3>
          <LegalP>
            Certain features require payment. Prices, billing cycles, taxes, and
            refund rules are as stated on our website, checkout flow, order form,
            or invoice at the time of purchase.
          </LegalP>

          <LegalH3>7.2 Authorisation</LegalH3>
          <LegalP>
            If you subscribe to a paid plan, you authorise us (and our payment
            processor) to charge the selected payment method on a recurring basis
            until you cancel. You must keep billing information current.
          </LegalP>

          <LegalH3>7.3 Cancellation</LegalH3>
          <LegalP>
            You may cancel as described in account settings or your order form.
            Unless stated otherwise, cancellation takes effect at the end of the
            then-current billing period. Fees already charged are non-refundable
            except where required by law or expressly stated in writing.
          </LegalP>

          <LegalH3>7.4 Trials and special commercial terms</LegalH3>
          <LegalP>
            Any trial, pilot, “value guarantee,” Founding Circle pricing, or
            introduction-only commercial arrangement applies only as set out in
            the applicable order form or written offer. Public website marketing
            language does not, by itself, create a refund or termination right
            beyond what is stated in these Terms or your signed agreement.
          </LegalP>

          <LegalH3>7.5 Late payment</LegalH3>
          <LegalP>
            We may suspend the Service for overdue amounts after notice. You
            remain responsible for fees incurred before suspension or
            termination.
          </LegalP>
        </LegalSection>

        <LegalSection title="8. Intellectual property">
          <LegalH3>8.1 Our IP</LegalH3>
          <LegalP>
            The Service — including software, interfaces, workflows, models we
            provide (excluding Customer Content), documentation, trademarks, and
            branding — is owned by Tomo Solutions or its licensors. These Terms
            do not transfer ownership to you.
          </LegalP>

          <LegalH3>8.2 Licence to you</LegalH3>
          <LegalP>
            Subject to these Terms and timely payment of applicable fees, we
            grant you a limited, non-exclusive, non-transferable,
            non-sublicensable, revocable licence to access and use the Service
            for your internal business fundraising and IR operations.
          </LegalP>

          <LegalH3>8.3 Restrictions</LegalH3>
          <LegalP>
            You may not copy, modify, distribute, sell, lease, or publicly
            display the Service except as allowed by these Terms or written
            permission from us.
          </LegalP>
        </LegalSection>

        <LegalSection title="9. Support and institutional diligence">
          <LegalP>
            We provide support via the channels we publish (for example, email at{" "}
            <a
              href="mailto:support@tomosolutions.ai"
              className="text-primary underline underline-offset-2 hover:text-secondary"
            >
              support@tomosolutions.ai
            </a>
            ). Founding Circle or enterprise customers may receive additional
            onboarding or review sessions as agreed in writing.
          </LegalP>
          <LegalP>
            For security diligence, we may make documentation available under NDA
            (for example, architecture summaries, control descriptions, or
            attestation reports when available). SOC 2, CASA, or similar
            attestations are pursued according to our compliance roadmap and are
            not automatically warranted as complete on any given date unless
            confirmed in writing.
          </LegalP>
        </LegalSection>

        <LegalSection title="10. Disclaimers">
          <LegalP>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED “AS
            IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER
            EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NON-INFRINGEMENT.
          </LegalP>
          <LegalP>
            We do not warrant that the Service will be uninterrupted, error-free,
            or free of harmful components, or that defects will be corrected. We
            do not warrant that integrations will remain available on unchanged
            terms from third parties.
          </LegalP>
          <LegalP>
            Some jurisdictions do not allow certain disclaimers; in those
            jurisdictions, disclaimers apply to the fullest extent permitted.
          </LegalP>
        </LegalSection>

        <LegalSection title="11. Limitation of liability">
          <LegalP>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</LegalP>
          <LegalUl>
            <li>
              Tomo Solutions and its officers, directors, employees, and agents
              will not be liable for any indirect, incidental, special,
              consequential, exemplary, or punitive damages, or for lost profits,
              lost revenue, lost capital commitments, loss of data, business
              interruption, or cost of substitute services, even if advised of
              the possibility of such damages; and
            </li>
            <li>
              Tomo Solutions’ total aggregate liability arising out of or
              relating to the Service or these Terms will not exceed the amounts
              you paid to Tomo Solutions for the Service in the twelve (12)
              months preceding the claim.
            </li>
          </LegalUl>
          <LegalP>
            The above limitations apply regardless of theory of liability
            (contract, tort, including negligence, strict liability, or
            otherwise) and form an essential basis of the bargain. Some
            jurisdictions do not allow certain limitations; in those cases, our
            liability is limited to the maximum extent permitted by law.
          </LegalP>
        </LegalSection>

        <LegalSection title="12. Indemnification">
          <LegalP>
            You will indemnify, defend, and hold harmless Tomo Solutions and its
            officers, directors, employees, and agents from and against any
            claims, damages, losses, liabilities, costs, and expenses (including
            reasonable legal fees) arising out of or related to:
          </LegalP>
          <LegalUl>
            <li>your Customer Content;</li>
            <li>
              your use of the Service in violation of these Terms or law;
            </li>
            <li>
              your communications with investors or other third parties
              (including messages you approve and send);
            </li>
            <li>
              disputes between you and your investors, limited partners,
              employees, or counterparties; or
            </li>
            <li>
              your infringement or violation of third-party rights.
            </li>
          </LegalUl>
        </LegalSection>

        <LegalSection title="13. Term and termination">
          <LegalH3>13.1 Term</LegalH3>
          <LegalP>
            These Terms apply from your first access or acceptance until
            terminated.
          </LegalP>

          <LegalH3>13.2 Termination by you</LegalH3>
          <LegalP>
            You may stop using the Service at any time and may request account or
            workspace closure through product settings or by contacting{" "}
            <a
              href="mailto:support@tomosolutions.ai"
              className="text-primary underline underline-offset-2 hover:text-secondary"
            >
              support@tomosolutions.ai
            </a>
            .
          </LegalP>

          <LegalH3>13.3 Termination by us</LegalH3>
          <LegalP>
            We may suspend or terminate access immediately for material breach,
            unlawful use, security risk, or as otherwise stated in these Terms.
            We may also terminate for convenience with reasonable notice if we
            discontinue the Service generally.
          </LegalP>

          <LegalH3>13.4 Effect of termination</LegalH3>
          <LegalP>
            Upon termination, your licence to use the Service ends. Provisions
            that by their nature should survive — including ownership, Customer
            Content licence for residual retention/deletion wind-down,
            confidentiality, disclaimers, limitations of liability, indemnities,
            and governing law — survive termination. Deletion of Customer Content
            follows the Privacy Policy (including any soft-delete grace period).
          </LegalP>
        </LegalSection>

        <LegalSection title="14. Governing law and disputes">
          <LegalH3>14.1 Governing law</LegalH3>
          <LegalP>
            These Terms are governed by the laws of the State of Delaware, USA,
            without regard to conflict-of-law principles.
          </LegalP>

          <LegalH3>14.2 Informal resolution</LegalH3>
          <LegalP>
            Before filing a claim, either party must attempt in good faith to
            resolve the dispute informally by written notice to the other party.
            If not resolved within thirty (30) days of notice, either party may
            proceed as below.
          </LegalP>

          <LegalH3>14.3 Venue</LegalH3>
          <LegalP>
            Subject to mandatory consumer or data-protection rights that cannot
            be waived, exclusive jurisdiction and venue lie in the state or
            federal courts located in Delaware, and each party consents to
            personal jurisdiction there.
          </LegalP>
        </LegalSection>

        <LegalSection title="15. Miscellaneous">
          <LegalP>
            <strong className="font-medium text-primary">
              15.1 Entire agreement.
            </strong>{" "}
            These Terms, the Privacy Policy, any DPA, and any applicable order
            form or signed commercial agreement constitute the entire agreement
            between you and Tomo Solutions regarding the Service and supersede
            prior or contemporaneous understandings on that subject.
          </LegalP>
          <LegalP>
            <strong className="font-medium text-primary">15.2 Conflicts.</strong>{" "}
            Order of precedence for conflicts: (1) signed order form / MSA
            commercial terms; (2) DPA (for personal-data processing); (3) these
            Terms; (4) Privacy Policy (for privacy disclosures); (5) product
            documentation.
          </LegalP>
          <LegalP>
            <strong className="font-medium text-primary">
              15.3 Severability.
            </strong>{" "}
            If any provision is unenforceable, the remainder remains in effect.
          </LegalP>
          <LegalP>
            <strong className="font-medium text-primary">
              15.4 Force majeure.
            </strong>{" "}
            We are not liable for delays or failures caused by events beyond
            reasonable control, including outages of cloud or identity providers,
            network failures, labour disputes, pandemics, natural disasters, war,
            or government action.
          </LegalP>
          <LegalP>
            <strong className="font-medium text-primary">15.5 Assignment.</strong>{" "}
            You may not assign these Terms without our prior written consent. We
            may assign them in connection with a merger, acquisition, corporate
            reorganisation, or sale of assets.
          </LegalP>
          <LegalP>
            <strong className="font-medium text-primary">15.6 No waiver.</strong>{" "}
            Failure to enforce a provision is not a waiver.
          </LegalP>
          <LegalP>
            <strong className="font-medium text-primary">15.7 Notices.</strong>{" "}
            We may notify you via email, in-product message, or posting on our
            website. Legal notices to us should be sent to{" "}
            <a
              href="mailto:support@tomosolutions.ai"
              className="text-primary underline underline-offset-2 hover:text-secondary"
            >
              support@tomosolutions.ai
            </a>{" "}
            with a copy retained for your records, unless we designate another
            address.
          </LegalP>
          <LegalP>
            <strong className="font-medium text-primary">
              15.8 Export and sanctions.
            </strong>{" "}
            You must comply with applicable export control and sanctions laws and
            may not use the Service if you are prohibited from receiving US or
            other applicable services under those laws.
          </LegalP>
          <LegalP>
            <strong className="font-medium text-primary">15.9 Language.</strong>{" "}
            These Terms are in English. Any translation is for convenience only.
          </LegalP>
          <LegalP>
            <strong className="font-medium text-primary">
              15.10 Changes to Terms.
            </strong>{" "}
            We may update these Terms from time to time. The “Last updated” date
            will change when we do. Material changes will be notified by email or
            in-product notice where appropriate. Continued use after the
            effective date constitutes acceptance of the updated Terms, except
            where applicable law requires a different method of acceptance.
          </LegalP>
        </LegalSection>

        <LegalSection title="Contact">
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
        </LegalSection>
      </LegalArticle>
    </main>
  );
}
