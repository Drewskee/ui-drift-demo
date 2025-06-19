import React, { useState } from 'react';
import { ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel } from '@headlessui/react';

export interface CheckoutPageProps {
  /** Version for demonstrating different UI states */
  version?: 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
  /** Show promotional badge */
  showPromoBadge?: boolean;
  /** Base font size adjustment */
  baseFontSize?: 'sm' | 'base' | 'lg';
  /** Theme color */
  themeColor?: 'indigo' | 'blue' | 'purple' | 'green';
  /** Locale for translations */
  locale?: 'en' | 'es' | 'fr';
  /** Wrapper div styling */
  useWrapper?: boolean;
}

const steps = [
  { name: 'Cart', href: '#', status: 'complete' },
  { name: 'Billing Information', href: '#', status: 'current' },
  { name: 'Confirmation', href: '#', status: 'upcoming' },
];

const products = [
  {
    id: 1,
    name: 'Premium Workshop Access',
    href: '#',
    price: '$299.00',
    type: 'Digital Access',
    duration: '3 months',
    imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop',
    imageAlt: 'Premium workshop access with mentorship and resources.',
  },
  {
    id: 2,
    name: 'Design System Course',
    href: '#',
    price: '$149.00',
    type: 'Course',
    duration: '6 weeks',
    imageSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
    imageAlt: 'Comprehensive design system course.',
  },
];

const translations = {
  en: {
    orderSummary: 'Order summary',
    contactInfo: 'Contact information',
    emailAddress: 'Email address',
    paymentDetails: 'Payment details',
    nameOnCard: 'Name on card',
    cardNumber: 'Card number',
    expirationDate: 'Expiration date (MM/YY)',
    cvc: 'CVC',
    continue: 'Continue',
    notChargedYet: "You won't be charged until the next step.",
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    taxes: 'Taxes',
    total: 'Total',
    promoBadge: 'LIMITED TIME OFFER',
    addToCalendar: 'Add workshop to calendar',
  },
  es: {
    orderSummary: 'Resumen del pedido',
    contactInfo: 'Información de contacto',
    emailAddress: 'Dirección de correo electrónico',
    paymentDetails: 'Detalles de pago',
    nameOnCard: 'Nombre completo en la tarjeta',
    cardNumber: 'Número de tarjeta de crédito',
    expirationDate: 'Fecha de vencimiento (MM/AA)',
    cvc: 'Código de verificación',
    continue: 'Continuar con el proceso',
    notChargedYet: 'No se te cobrará hasta completar el siguiente paso.',
    subtotal: 'Subtotal',
    shipping: 'Envío',
    taxes: 'Impuestos',
    total: 'Total',
    promoBadge: 'OFERTA DE TIEMPO LIMITADO - ¡SOLO HOY!',
    addToCalendar: 'Agregar taller al calendario',
  },
  fr: {
    orderSummary: 'Résumé de la commande',
    contactInfo: 'Informations de contact',
    emailAddress: 'Adresse e-mail',
    paymentDetails: 'Détails de paiement',
    nameOnCard: 'Nom complet sur la carte',
    cardNumber: 'Numéro de carte de crédit',
    expirationDate: 'Date d\'expiration (MM/AA)',
    cvc: 'Code de vérification',
    continue: 'Continuer le processus',
    notChargedYet: 'Vous ne serez pas facturé avant de terminer l\'étape suivante.',
    subtotal: 'Sous-total',
    shipping: 'Livraison',
    taxes: 'Taxes',
    total: 'Total',
    promoBadge: 'OFFRE À DURÉE LIMITÉE - AUJOURD\'HUI SEULEMENT!',
    addToCalendar: 'Ajouter l\'atelier au calendrier',
  },
};

// Simple calendar component as placeholder
const SimpleCalendarButton: React.FC<{ title: string; date: string }> = ({ title, date }) => (
  <div className="flex items-center space-x-2 p-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
    <div className="flex-shrink-0">
      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-900 truncate">{title}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  </div>
);

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  version = 'v1',
  showPromoBadge = false,
  baseFontSize = 'base',
  themeColor = 'indigo',
  locale = 'en',
  useWrapper = true,
}) => {
  const t = translations[locale];
  
  // Theme color mappings - PR #3 makes purple look like a regular text link
  const colors = {
    indigo: {
      primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
      text: 'text-indigo-600',
      outline: 'focus:outline-indigo-600',
    },
    blue: {
      primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
      text: 'text-blue-600',
      outline: 'focus:outline-blue-600',
    },
    purple: {
      // This looks like a regular link, not a button - BREAKING CHANGE
      primary: 'bg-purple-100 text-purple-800 hover:bg-purple-200 focus:ring-purple-300',
      text: 'text-purple-600',
      outline: 'focus:outline-purple-600',
    },
    green: {
      primary: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
      text: 'text-green-600',
      outline: 'focus:outline-green-600',
    },
  };

  const currentColor = colors[themeColor];

  // PR #1: Remove wrapper - causes misalignment
  const formClasses = useWrapper 
    ? 'px-4 pt-16 pb-36 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16'
    : 'pt-16 pb-36 lg:col-start-1 lg:row-start-1 lg:pb-16'; // Missing padding causes inputs to touch edges

  // PR #2: Font size causes text overflow and wrapping issues
  const labelFontSize = baseFontSize === 'lg' ? 'text-lg' : 'text-sm';
  const inputClasses = baseFontSize === 'lg' 
    ? 'block w-full rounded-md bg-white px-3 py-4 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2'
    : 'block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2';

  const content = (
    <div className="bg-white min-h-screen">
      {/* PR #5: Promotional badge pushes content down and breaks mobile layout */}
      {showPromoBadge && (
        <div className="bg-gradient-to-r from-red-600 to-pink-600 px-4 py-6 text-center relative z-50">
          <div className="max-w-4xl mx-auto">
            <span className="text-white font-bold text-lg block mb-2">
              🔥 {t.promoBadge} 🔥
            </span>
            <span className="text-white text-sm">
              Get 150% off when you complete your purchase in the next 10 minutes!
            </span>
          </div>
        </div>
      )}

      {/* Background color split screen for large screens */}
      <div aria-hidden="true" className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block" />
      <div aria-hidden="true" className="fixed top-0 right-0 hidden h-full w-1/2 bg-gray-50 lg:block" />

      <header className={`relative border-b border-gray-200 bg-white text-sm font-medium text-gray-700 ${showPromoBadge ? 'mt-20' : ''}`}>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative flex justify-end sm:justify-center">
            <a href="#" className="absolute top-1/2 left-0 -mt-4">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <nav aria-label="Progress" className="hidden sm:block">
              <ol role="list" className="flex space-x-4">
                {steps.map((step, stepIdx) => (
                  <li key={step.name} className="flex items-center">
                    {step.status === 'current' ? (
                      <a href={step.href} aria-current="page" className={currentColor.text}>
                        {step.name}
                      </a>
                    ) : (
                      <a href={step.href}>{step.name}</a>
                    )}

                    {stepIdx !== steps.length - 1 ? (
                      <ChevronRightIcon aria-hidden="true" className="ml-4 size-5 text-gray-300" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </nav>
            <p className="sm:hidden">Step 2 of 4</p>
          </div>
        </div>
      </header>

      <main className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 px-4 pt-16 pb-10 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
        >
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              {t.orderSummary}
            </h2>

            {/* Simple Calendar Integration */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-sm font-medium text-blue-900 mb-2">
                {t.addToCalendar}
              </h3>
              <SimpleCalendarButton 
                title="Premium Workshop - Design Systems"
                date="July 15, 2025 at 10:00 AM"
              />
            </div>

            <ul role="list" className="divide-y divide-gray-200 text-sm font-medium text-gray-900 mt-6">
              {products.map((product) => (
                <li key={product.id} className="flex items-start space-x-4 py-6">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="size-20 flex-none rounded-md object-cover"
                  />
                  <div className="flex-auto space-y-1">
                    <h3>{product.name}</h3>
                    <p className="text-gray-500">{product.type}</p>
                    <p className="text-gray-500">{product.duration}</p>
                  </div>
                  <p className="flex-none text-base font-medium">{product.price}</p>
                </li>
              ))}
            </ul>

            <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">{t.subtotal}</dt>
                <dd>$448.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">{t.shipping}</dt>
                <dd>$0.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">{t.taxes}</dt>
                <dd>$35.84</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">{t.total}</dt>
                <dd className="text-base">$483.84</dd>
              </div>
            </dl>
          </div>
        </section>

        <form className={formClasses}>
          <div className="mx-auto max-w-lg lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                {t.contactInfo}
              </h2>

              <div className="mt-6">
                <label htmlFor="email-address" className={`block font-medium text-gray-700 ${labelFontSize} leading-6`}>
                  {t.emailAddress}
                </label>
                <div className="mt-2">
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    className={`${inputClasses} ${currentColor.outline}`}
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-heading" className="mt-10">
              <h2 id="payment-heading" className="text-lg font-medium text-gray-900">
                {t.paymentDetails}
              </h2>

              <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                <div className="col-span-3 sm:col-span-4">
                  <label htmlFor="name-on-card" className={`block font-medium text-gray-700 ${labelFontSize} leading-6`}>
                    {t.nameOnCard}
                  </label>
                  <div className="mt-2">
                    <input
                      id="name-on-card"
                      name="name-on-card"
                      type="text"
                      autoComplete="cc-name"
                      className={`${inputClasses} ${currentColor.outline}`}
                    />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label htmlFor="card-number" className={`block font-medium text-gray-700 ${labelFontSize} leading-6`}>
                    {t.cardNumber}
                  </label>
                  <div className="mt-2">
                    <input
                      id="card-number"
                      name="card-number"
                      type="text"
                      autoComplete="cc-number"
                      className={`${inputClasses} ${currentColor.outline}`}
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3">
                  <label htmlFor="expiration-date" className={`block font-medium text-gray-700 ${labelFontSize} leading-6`}>
                    {t.expirationDate} 2
                  </label>
                  <div className="mt-2">
                    <input
                      id="expiration-date"
                      name="expiration-date"
                      type="text"
                      autoComplete="cc-exp"
                      className={`${inputClasses} ${currentColor.outline}`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cvc" className={`block font-medium text-gray-700 ${labelFontSize} leading-6`}>
                    {t.cvc}
                  </label>
                  <div className="mt-2">
                    <input
                      id="cvc"
                      name="cvc"
                      type="text"
                      autoComplete="csc"
                      className={`${inputClasses} ${currentColor.outline}`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* PR #4: Long translated text breaks button layout */}
            <div className={`mt-10 border-t border-gray-200 pt-6 ${locale !== 'en' ? 'flex flex-col space-y-4' : 'sm:flex sm:items-center sm:justify-between'}`}>
              <button
                type="submit"
                className={`${locale !== 'en' ? 'w-full' : 'w-full sm:order-last sm:ml-6 sm:w-auto'} rounded-md border border-transparent ${currentColor.primary} px-4 py-2 text-sm font-medium text-white shadow-xs focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden`}
              >
                {t.continue}
              </button>
              <p className={`${locale !== 'en' ? 'text-center text-xs' : 'mt-4 text-center text-sm sm:mt-0 sm:text-left'} text-gray-500`}>
                {t.notChargedYet}
              </p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );

  return content;
};