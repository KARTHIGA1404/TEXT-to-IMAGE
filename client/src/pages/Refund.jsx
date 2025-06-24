import { Helmet } from "react-helmet";

export default function Refund() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <Helmet>
        <title>Refund & Cancellation Policy - Imagify</title>
        <meta name="description" content="Learn about our refund and cancellation policy." />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Refund & Cancellation Policy</h1>
      <p>
        All credit purchases are final and non-refundable. If a payment issue occurs,
        please contact support within 48 hours for resolution. Refunds will only be considered for duplicate or failed transactions.
      </p>
    </div>
  );
}
