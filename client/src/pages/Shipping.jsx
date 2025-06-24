import { Helmet } from "react-helmet";

export default function Shipping() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <Helmet>
        <title>Shipping Policy - Imagify</title>
        <meta name="description" content="Shipping details for digital products purchased through our platform." />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Shipping Policy</h1>
      <p>
        All our services are digital. No physical shipping is involved. Credits and digital access are delivered immediately upon successful payment.
      </p>
    </div>
  );
}
