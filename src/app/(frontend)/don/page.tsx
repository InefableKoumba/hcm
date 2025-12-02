'use client'

import { useState } from 'react'
import { Heart, Smartphone, CreditCard, Shield, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DonationPage() {
  const [donationAmount, setDonationAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'card' | null>(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')

  const suggestedAmounts = [
    { amount: 10000, label: '10 000 FCFA' },
    { amount: 25000, label: '25 000 FCFA' },
    { amount: 50000, label: '50 000 FCFA' },
    { amount: 100000, label: '100 000 FCFA' },
    { amount: 250000, label: '250 000 FCFA' },
  ]

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault()

    if (!donationAmount || !paymentMethod || !donorName || !donorEmail) {
      alert('Veuillez remplir tous les champs requis')
      return
    }

    if (paymentMethod === 'momo' && !phoneNumber) {
      alert('Veuillez entrer votre numéro de téléphone MoMo')
      return
    }

    if (paymentMethod === 'card') {
      if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
        alert('Veuillez remplir tous les champs de la carte bancaire')
        return
      }
    }

    alert(
      `Merci ${donorName} pour votre don de ${parseInt(donationAmount).toLocaleString(
        'fr-FR',
      )} FCFA ! Votre générosité contribue à améliorer la mobilité des personnes en situation de handicap au Congo.`,
    )

    // Reset form
    setDonationAmount('')
    setPaymentMethod(null)
    setPhoneNumber('')
    setCardNumber('')
    setCardName('')
    setCardExpiry('')
    setCardCvv('')
    setDonorName('')
    setDonorEmail('')
  }

  return (
    <main>
      <Header />
      <div className="pt-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
              <Heart size={32} className="text-secondary" fill="currentColor" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Faire un don</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Votre générosité permet d&apos;améliorer la mobilité et l&apos;inclusion des personnes
              en situation de handicap au Congo. Chaque contribution compte.
            </p>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            <form onSubmit={handleDonation} className="space-y-8">
              {/* Donor Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Vos informations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Montant du don</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                  {suggestedAmounts.map((item) => (
                    <button
                      key={item.amount}
                      type="button"
                      onClick={() => setDonationAmount(item.amount.toString())}
                      className={`px-4 py-3 rounded-lg border-2 font-medium text-sm transition-colors ${
                        donationAmount === item.amount.toString()
                          ? 'border-secondary bg-secondary-light text-secondary'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Ou entrez un montant personnalisé (FCFA) *
                  </label>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    required
                    min="1000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Montant minimum: 1 000 FCFA"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Méthode de paiement *</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('momo')}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      paymentMethod === 'momo'
                        ? 'border-secondary bg-secondary-light'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-lg ${
                          paymentMethod === 'momo' ? 'bg-secondary/20' : 'bg-gray-100'
                        }`}
                      >
                        <Smartphone
                          size={24}
                          className={paymentMethod === 'momo' ? 'text-secondary' : 'text-gray-600'}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Mobile Money</div>
                        <div className="text-sm text-gray-600">MoMo</div>
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      paymentMethod === 'card'
                        ? 'border-primary bg-primary-light'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-lg ${
                          paymentMethod === 'card' ? 'bg-primary/20' : 'bg-gray-100'
                        }`}
                      >
                        <CreditCard
                          size={24}
                          className={paymentMethod === 'card' ? 'text-primary' : 'text-gray-600'}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Carte bancaire</div>
                        <div className="text-sm text-gray-600">Visa / Mastercard</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* MoMo Payment Details */}
              {paymentMethod === 'momo' && (
                <div className="p-6 bg-secondary-light/50 rounded-lg border border-secondary/20">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Numéro de téléphone MoMo *
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="+242 06 123 4567"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Vous recevrez une demande de confirmation sur votre téléphone
                  </p>
                </div>
              )}

              {/* Card Payment Details */}
              {paymentMethod === 'card' && (
                <div className="p-6 bg-primary-light/50 rounded-lg border border-primary/20 space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Nom sur la carte *
                    </label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value.toUpperCase())}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent uppercase"
                      placeholder="JEAN DUPONT"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Numéro de carte *
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(
                          e.target.value
                            .replace(/\s/g, '')
                            .replace(/(.{4})/g, '$1 ')
                            .trim(),
                        )
                      }
                      required
                      maxLength={19}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent tracking-wider"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Date d&apos;expiration *
                      </label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, '')
                          if (value.length >= 2) {
                            value = value.slice(0, 2) + '/' + value.slice(2, 4)
                          }
                          setCardExpiry(value)
                        }}
                        required
                        maxLength={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">CVV *</label>
                      <input
                        type="text"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                        required
                        maxLength={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Security Notice */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield size={20} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-gray-600">
                  Vos informations de paiement sont sécurisées et cryptées. Nous ne stockons jamais
                  vos données bancaires.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-secondary text-white font-semibold rounded-lg hover:opacity-90 flex items-center justify-center gap-2"
              >
                Confirmer le don
                {donationAmount && parseInt(donationAmount) > 0 && (
                  <span className="ml-2">
                    ({parseInt(donationAmount).toLocaleString('fr-FR')} FCFA)
                  </span>
                )}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Impact Message */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Votre don contribue directement à l&apos;amélioration de la mobilité et de
              l&apos;inclusion des personnes en situation de handicap au Congo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
