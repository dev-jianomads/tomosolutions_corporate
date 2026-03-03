import { Section } from "@/components/Section";
import { ScrollFade } from "@/components/ScrollFade";

export default function Home() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="min-h-screen bg-background text-primary flex flex-col justify-center px-6 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 lg:gap-12">
            <ScrollFade>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
                You don&apos;t lose LPs in meetings.
                <br />
                You lose them in the time between them.
              </h1>
              <p className="mt-8 text-secondary max-w-xl font-light leading-relaxed">
                Capital is scarce. Execution can&apos;t be. TOMO closes the
                execution gaps that quietly cost you momentum — across email,
                calendar, assistants, and internal threads.
              </p>
              <a
                href="#pilot"
                className="inline-block mt-10 bg-accent text-primary px-8 py-4 font-medium text-sm tracking-wide hover:bg-accent/90 transition-colors"
              >
                Request demo
              </a>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <Section variant="light">
        <ScrollFade>
          <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-6">
            The Problem
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] max-w-3xl">
            Most raises don&apos;t fall apart.
            <br />
            They drift.
          </h3>
          <div className="mt-16 space-y-8 max-w-2xl">
            <p className="text-lg font-light leading-relaxed">
              If you&apos;ve raised capital in the last year, you know that
              it&apos;s harder than ever — LPs move slower, diligence drags,
              cycles are stretched.
            </p>
            <p className="text-lg font-light leading-relaxed">
              But most raises don&apos;t fall apart because the story is weak.
              They drift because:
            </p>
            <ol className="space-y-6 text-lg font-light leading-relaxed list-decimal list-inside">
              <li>A follow-up goes out 1 week late (or not at all).</li>
              <li>An LP goes quiet and no one notices.</li>
              <li>
                A DDQ sits in someone&apos;s inbox while everyone assumes
                it&apos;s handled.
              </li>
            </ol>
            <p className="text-lg font-light leading-relaxed">
              No one decides to drop the ball. It just happens. Fundraising now
              runs across inboxes, executive assistants, chat threads, calendars,
              internal teams, and a CRM that&apos;s always slightly behind
              reality.
            </p>
            <p className="text-lg font-light leading-relaxed">
              That&apos;s where deals slip.
            </p>
            <p className="text-lg font-light leading-relaxed">
              Strong performance doesn&apos;t protect you from poor execution.
            </p>
          </div>
        </ScrollFade>
      </Section>

      {/* 3. OUR INSIGHT */}
      <Section variant="dark">
        <ScrollFade>
          <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-6">
            Our insight
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] max-w-3xl">
            Momentum isn&apos;t magic.
            <br />
            It&apos;s disciplined execution.
          </h3>
          <p className="mt-12 text-lg font-light text-secondary leading-relaxed max-w-2xl">
            Our top decile IR teams respond within an hour. That kind of discipline
            compounds. They don&apos;t rely on memory. They rely on systems.
          </p>
          <p className="mt-8 text-sm font-medium tracking-widest uppercase text-secondary">
            In our experience, the best fundraisers:
          </p>
          <ul className="mt-6 space-y-4 font-light text-primary/90">
            <li>Close loose ends quickly</li>
            <li>Define clear next steps after every single meeting</li>
            <li>Respond/follow-up quickly</li>
            <li>Re-engage before interest cools</li>
            <li>Know which LPs are heating up and which are cooling</li>
          </ul>
          <p className="mt-12 text-lg font-light text-secondary italic max-w-2xl">
            Successful capital raises are the result of clean, disciplined
            execution.
          </p>
          <p className="mt-8 text-lg font-light text-secondary leading-relaxed max-w-2xl">
            When execution is consistent, fundraising feels controlled and money
            flows. When it isn&apos;t, LPs lose interest — even when your
            performance is strong.
          </p>
        </ScrollFade>
      </Section>

      {/* 4. WHAT TOMO DOES */}
      <Section variant="dark">
        <ScrollFade>
          <h2 className="text-xl md:text-2xl font-medium tracking-widest uppercase text-secondary mb-6">
            What TOMO does
          </h2>
          <p className="text-xl font-light text-primary/90 max-w-2xl">
            TOMO isn&apos;t a CRM with AI bolted on. It&apos;s your fundraising
            teammate who works 24/7 with your existing tools.
          </p>
          <p className="mt-6 text-lg font-light text-secondary max-w-2xl">
            Your CRM records contacts and history. Your calendar manages your
            availability. Your inbox never stops.
          </p>
          <p className="mt-6 text-lg font-light text-primary/90 max-w-2xl">
            TOMO focuses on one thing: the next step. It ensures:
          </p>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mt-12">
            <div className="flex-1">
              <ol className="space-y-6 font-light text-primary/90 list-decimal list-inside">
                <li>Every interaction ends with a clear next step</li>
                <li>Follow-ups happen on time</li>
                <li>Ownership is visible across your team</li>
                <li>Email responses are drafted (which you approve)</li>
                <li>You can see who&apos;s active, and who&apos;s drifting</li>
              </ol>
              <p className="mt-10 text-lg font-light text-primary/90">
                You keep your stack. Nothing slips.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-primary/20 bg-background p-4 w-full max-w-sm">
                <p className="text-xs text-secondary mb-1">LP: Large Public Pension</p>
                <p className="text-xs text-secondary mb-2">
                  Last interaction: 9 days ago
                </p>
                <p className="text-sm text-primary">
                  Suggested action: Follow-up on allocation sizing
                </p>
              </div>
              <div className="border border-primary/20 bg-background p-4 w-full max-w-sm">
                <p className="text-xs text-secondary mb-1">LP: Sovereign Wealth Fund</p>
                <p className="text-xs text-secondary mb-2">
                  Last interaction: 3 days ago
                </p>
                <p className="text-sm text-primary">
                  Suggested action: Send DDQ response
                </p>
              </div>
              <div className="border border-primary/20 bg-background p-4 w-full max-w-sm">
                <p className="text-xs text-secondary mb-1">LP: Global Fund-of-Funds</p>
                <p className="text-xs text-secondary mb-2">
                  Last interaction: 14 days ago
                </p>
                <p className="text-sm text-primary">
                  Suggested action: Re-engagement check-in
                </p>
              </div>
            </div>
          </div>
        </ScrollFade>
      </Section>

      {/* 5. HOW TOMO WORKS */}
      <Section variant="dark">
        <ScrollFade>
          <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-16">
            How TOMO Works
          </h2>
          <div className="space-y-0">
            {[
              {
                title: "It understands the thread",
                desc: "TOMO connects to your email, messaging apps, calendar, and CRM. It sees the live state of conversations, not just what's been logged later.",
              },
              {
                title: "It defines the next step",
                desc: "It flags unclear ownership, missing follow-ups, and stalled exchanges.",
              },
              {
                title: "It closes loops",
                desc: "Follow-ups are drafted. Scheduling is coordinated. Reminders are surfaced. You approve. TOMO executes.",
              },
              {
                title: "It tracks momentum",
                desc: "You see who is active, who is quiet, and where risk is building — before it becomes visible externally.",
              },
            ].map((step, i) => (
              <div key={step.title}>
                <div className="py-12">
                  <h3 className="text-xl font-medium text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-secondary font-light">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="border-t border-primary/10" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-12 text-xl font-medium text-primary">
            Execution becomes deliberate — not reactive.
          </p>
        </ScrollFade>
      </Section>

      {/* 6. OUTCOMES */}
      <Section variant="dark">
        <ScrollFade>
          <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-8">
            TOMO Outcomes
          </h2>
          <p className="text-lg font-light text-primary/90 mb-8">
            Pilot teams typically see:
          </p>
          <div className="text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-primary">
            5–10 hours
          </div>
          <p className="mt-4 text-xl text-primary/90 font-light">
            per week back from coordination
          </p>
          <ul className="mt-12 space-y-4 font-light text-primary">
            <li>Follow-ups measured in hours, not days/weeks</li>
            <li>Clear visibility into who is heating up</li>
            <li>Fewer dropped threads</li>
          </ul>
          <p className="mt-16 text-lg font-light text-primary max-w-2xl">
            In tight fundraising markets, small execution wins compound.
          </p>
        </ScrollFade>
      </Section>

      {/* 7. BUILT FOR */}
      <Section variant="dark">
        <ScrollFade>
          <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-8">
            Built for the Buyside & Relationship-driven Firms
          </h2>
          <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24 lg:items-start">
            <div className="flex-1 max-w-xl">
              <p className="text-lg font-light text-secondary leading-relaxed">
                TOMO is built by fund managers who have lived this first-hand.
              </p>
              <p className="mt-6 text-lg font-light text-secondary leading-relaxed">
                If fundraising depends on responsiveness, timing, and trust,
                execution discipline matters.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:flex-shrink-0">
              <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">
                We work with top tier
              </p>
              <ul className="space-y-3 font-light text-primary/90 text-lg">
                <li>Hedge Funds</li>
                <li>Private Equity</li>
                <li>Venture Capital</li>
                <li>Family Offices</li>
                <li>Private Wealth teams</li>
              </ul>
            </div>
          </div>
        </ScrollFade>
      </Section>

      {/* 8. SECURITY */}
      <Section variant="dark">
        <ScrollFade>
          <div className="border-t border-b border-primary/10 pt-12 pb-12">
            <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-6">
              Security & Control
            </h2>
            <p className="text-lg font-light text-secondary max-w-2xl mb-8">
              TOMO is built specifically for regulated environments.
            </p>
            <ul className="space-y-4 font-light text-primary/90">
              <li>Encryption in transit and at rest</li>
              <li>Strict access controls</li>
              <li>No training on your proprietary data</li>
              <li>Full human approval for outbound actions</li>
              <li>Audit logs</li>
            </ul>
            <p className="mt-10 text-lg font-light text-primary/90">
              You are always in control.
            </p>
          </div>
        </ScrollFade>
      </Section>

      {/* 9. PILOT / FINAL CTA */}
      <section
        id="pilot"
        className="py-24 md:py-32 bg-background text-primary"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <ScrollFade>
            <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-6">
              Early Access
            </h2>
            <p className="text-xl font-light text-primary/90 max-w-2xl">
              Join our program. We&apos;re onboarding a limited number of
              founding partners into our program, which includes:
            </p>
            <ul className="mt-8 space-y-4 font-light text-primary/90">
              <li>Integration with key tools (Email, Calendar, CRM)</li>
              <li>Fundraising workflow automation</li>
              <li>Momentum signals</li>
              <li>White glove support</li>
            </ul>
            <p className="mt-10 text-lg font-light text-secondary max-w-xl">
              If you&apos;re looking for an edge in a difficult market, let&apos;s
              talk.
            </p>
            <a
              href="#"
              className="inline-block mt-10 bg-accent text-primary px-8 py-4 font-medium text-sm tracking-wide hover:bg-accent/90 transition-colors"
            >
              Request early access
            </a>
          </ScrollFade>
        </div>
      </section>
    </main>
  );
}
