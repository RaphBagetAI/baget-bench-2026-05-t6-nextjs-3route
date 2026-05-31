import React from 'react';

export default function Home() {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <div className="bg-gradient-mesh rounded-2xl p-12 mb-12">
        <h1 className="text-5xl font-heading font-extrabold text-white mb-6">
          Shipyard
        </h1>
        <p className="text-white text-lg mb-8">
          Modern developer tools designed to streamline your team's workflow,
          accelerate deployments, and ship quality software faster.
        </p>
        <a
          href="/pricing"
          className="inline-block btn-gradient px-8 py-4 text-xl rounded-lg font-semibold hover:brightness-110 transition"
        >
          Get Started
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-6">
          <h2 className="font-heading text-xl font-bold mb-3">Automation</h2>
          <p>
            Automate repetitive tasks and deployments, saving your team valuable
            time and reducing errors.
          </p>
        </div>

        <div className="glass-card p-6">
          <h2 className="font-heading text-xl font-bold mb-3">Collaboration</h2>
          <p>
            Collaborate across teams seamlessly with integrated workflows and real-time updates.
          </p>
        </div>

        <div className="glass-card p-6">
          <h2 className="font-heading text-xl font-bold mb-3">Insights</h2>
          <p>
            Gain detailed analytics and insights into your deployment processes
            to optimize efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
