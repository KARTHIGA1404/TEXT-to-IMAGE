import { Helmet } from "react-helmet";

export default function Terms() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <Helmet>
        <title>Terms & Conditions - Imagify</title>
        <meta name="description" content="Please read our terms and conditions before using our service." />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p>
        By using our website, you agree to comply with our terms. You must not misuse or redistribute our content or services.
        All services are provided as-is, and usage is at your own risk.
      </p>
    </div>
  );
}
