export default function Docs() {
  return (
    <section className="mt-12 max-w-4xl mx-auto">
      <h1 className="font-sora text-4xl font-extrabold mb-6 text-center">Getting Started with Shipyard</h1>

      <p className="mb-6 text-violet">
        Shipyard empowers developers to streamline deployment workflows with ease and confidence. Follow these simple steps to get started:
      </p>

      <ol className="list-decimal list-inside space-y-4 text-violet">
        <li>Sign up for Shipyard via the pricing page and choose a plan that suits your needs.</li>
        <li>Connect your projects from popular repositories and platforms.</li>
        <li>Configure deployment pipelines using Shipyard's intuitive interface.</li>
        <li>Deploy your applications with one click and monitor progress in real-time.</li>
        <li>Get alerts and logs directly in your dashboard to keep deployments reliable.</li>
      </ol>

      <p className="mt-8">
        For detailed API documentation and advanced configurations, please explore the Shipyard docs and support resources coming soon.
      </p>
    </section>
  );
}
