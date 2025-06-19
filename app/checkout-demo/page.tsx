import { CheckoutPage } from '../components/Checkout/CheckoutPage';

export default function CheckoutDemo() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Original Version</h1>
      <CheckoutPage />
      
      <hr className="my-8" />
      
      <h1 className="text-2xl font-bold mb-4">With Issues</h1>
      <CheckoutPage 
        showPromoBadge={true}
        baseFontSize="lg"
        themeColor="purple"
        locale="es"
        useWrapper={false}
      />
    </div>
  );
}