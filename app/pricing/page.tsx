export default function Pricing() {
  return (
    <section className="mt-12">
      <h1 className="font-sora text-4xl font-extrabold mb-8 text-center">
        Pricing Plans
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-card p-6 shadow-playful-peach flex flex-col items-center text-center">
          <h2 className="font-sora text-2xl font-bold mb-2">Starter</h2>
          <p className="mb-4 text-violet">For solo developers getting started.</p>
          <p className="text-3xl font-extrabold mb-6">$15/month</p>
          <ul className="mb-6 text-violet">
            <li>Basic deployment tools</li>
            <li>Up to 3 projects</li>
            <li>Email support</li>
          </ul>
          <a
            href="/"
            className="mt-auto inline-block bg-teal text-white rounded-lg px-6 py-3 font-semibold hover:bg-teal/90 transition"
          >
            Choose Starter
          </a>
        </div>

        <div className="bg-white rounded-card p-6 shadow-playful-teal flex flex-col items-center text-center">
          <h2 className="font-sora text-2xl font-bold mb-2">Pro</h2>
          <p className="mb-4 text-violet">For growing teams and professionals.</p>
          <p className="text-3xl font-extrabold mb-6">$50/month</p>
          <ul className="mb-6 text-violet">
            <li>All Starter features</li>
            <li>Unlimited projects</li>
            <li>Priority support</li>
          </ul>
          <a
            href="/"
            className="mt-auto inline-block bg-teal text-white rounded-lg px-6 py-3 font-semibold hover:bg-teal/90 transition"
          >
            Choose Pro
          </a>
        </div>

        <div className="bg-white rounded-card p-6 shadow-playful-violet flex flex-col items-center text-center">
          <h2 className="font-sora text-2xl font-bold mb-2">Enterprise</h2>
          <p className="mb-4 text-violet">For large companies needing advanced features.</p>
          <p className="text-3xl font-extrabold mb-6">Contact us</p>
          <ul className="mb-6 text-violet">
            <li>All Pro features</li>
            <li>Dedicated account manager</li>
            <li>Custom integrations</li>
          </ul>
          <a
            href="/"
            className="mt-auto inline-block bg-teal text-white rounded-lg px-6 py-3 font-semibold hover:bg-teal/90 transition"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
