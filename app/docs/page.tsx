import React from 'react';

export default function Docs() {
  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-heading font-extrabold text-center">
        Getting Started with Shipyard
      </h1>

      <section>
        <h2 className="text-2xl font-heading font-semibold mb-3">Introduction</h2>
        <p>
          Shipyard is a developer tools platform designed to accelerate your
          team's software delivery process through automation, collaboration,
          and insightful analytics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-heading font-semibold mb-3">
          Quick Start Guide
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Sign up for an account on the Shipyard platform.</li>
          <li>Create your first project and configure your deployment settings.</li>
          <li>Integrate your version control system for continuous deployment.</li>
          <li>Set up automation workflows tailored to your team’s needs.</li>
          <li>Monitor deployments and review analytics to optimize your process.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-heading font-semibold mb-3">
          Resources
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="https://docs.shipyard.com" className="text-gradientMid hover:underline">
              Full Documentation
            </a>
          </li>
          <li>
            <a href="https://github.com/bench/shipyard" className="text-gradientMid hover:underline">
              GitHub Repository
            </a>
          </li>
          <li>Contact support at support@bench.com</li>
        </ul>
      </section>
    </article>
  );
}
