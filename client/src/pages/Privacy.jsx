import { Helmet } from "react-helmet";

export default function Privacy() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <Helmet>
        <title>Privacy Policy - Imagify</title>
        <meta name="description" content="Our Privacy Policy explains how we collect, use, and protect your personal information." />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>
        We respect your privacy. We collect only the data necessary to provide our services.
        Your personal information will never be sold or shared without your consent.
        This policy outlines how we handle and protect your data.
      </p>
    </div>
  );
}
