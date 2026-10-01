"use client"

import React, { useState } from 'react'
import type { ReactNode, FormEvent } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyezazob'

type Status = 'idle' | 'sending' | 'success' | 'error'

function Icon({ children, size = 18 }: { children: ReactNode; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const MailIcon = ({ size }: { size?: number }) => (
  <Icon size={size}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Icon>
)

const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
)

const PinIcon = () => (
  <Icon>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
)

const ClockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Icon>
)

const BoltIcon = () => (
  <Icon size={14}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </Icon>
)

const ArrowIcon = () => (
  <Icon size={16}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Icon>
)

// Pas de gegevens hieronder aan
const contactItems = [
  { icon: PhoneIcon, label: 'Telefoon', value: '06 123 45 678' },
  { icon: MailIcon, label: 'E-mail', value: 'info@veluwedigital.nl' },
  { icon: PinIcon, label: 'Werkgebied', value: 'Veluwe en omgeving' },
  { icon: ClockIcon, label: 'Reactietijd', value: 'Binnen 1 werkdag' },
]

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-200">
      <span>
        {label}
        {required && <span className="text-blue-400"> *</span>}
      </span>
      {children}
    </label>
  )
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-normal text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40'

export default function ContactBlock() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    // Honeypot: bots vullen dit verborgen veld in, mensen niet
    if (data._gotcha) {
      setStatus('success')
      form.reset()
      return
    }

    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Versturen mislukt')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="w-full px-6 py-20 text-white">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 lg:grid-cols-2">
        {/* Links: tekst en contactgegevens */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-blue-500/10 px-4 py-1.5 text-sm text-slate-100">
              <span className="text-blue-400">
                <BoltIcon />
              </span>
              Gratis en vrijblijvend
            </span>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Laten we kennismaken.
              <br />
              <span className="text-blue-500">Zonder gedoe.</span>
            </h2>

            <p className="max-w-md text-base leading-relaxed text-slate-400">
              Vertel kort wat je nodig hebt. Je ontvangt binnen een werkdag een
              persoonlijke reactie met een duidelijke offerte, zonder
              verborgen kosten.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {contactItems.map(({ icon: ItemIcon, label, value }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-500/40 bg-blue-500/10 text-blue-400">
                  <ItemIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-sm text-slate-400">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Rechts: formulierkaart */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-b from-blue-500/10 to-white/[0.02] p-6 shadow-2xl shadow-blue-950/40 sm:p-8"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Vraag gratis een offerte aan</h3>
            <p className="text-sm text-slate-400">
              Velden met een <span className="text-blue-400">*</span> zijn verplicht.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Naam" required>
              <input
                name="naam"
                type="text"
                placeholder="Je naam"
                autoComplete="name"
                required
                className={inputClass}
              />
            </Field>

            <Field label="Telefoonnummer">
              <input
                name="telefoon"
                type="tel"
                placeholder="06 12345678"
                autoComplete="tel"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="E-mail" required>
            <input
              name="email"
              type="email"
              placeholder="Je e-mailadres"
              autoComplete="email"
              required
              className={inputClass}
            />
          </Field>

          <Field label="Waar ben je naar op zoek?">
            <select name="pakket" defaultValue="Starter website" className={inputClass}>
              <option className="bg-slate-900">Starter website</option>
              <option className="bg-slate-900">Uitgebreidere website</option>
              <option className="bg-slate-900">Aanpassing aan bestaande website</option>
              <option className="bg-slate-900">Weet ik nog niet</option>
            </select>
          </Field>

          <Field label="Bericht" required>
            <textarea
              name="bericht"
              rows={4}
              placeholder="Vertel kort over je bedrijf en wat je wilt bereiken..."
              required
              className={inputClass}
            />
          </Field>

          {/* Honeypot tegen spam: onzichtbaar voor bezoekers */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Bezig met versturen...' : 'Verstuur bericht'}
            {status !== 'sending' && <ArrowIcon />}
          </button>

          <div aria-live="polite" className="min-h-[1.25rem] text-center text-sm">
            {status === 'success' && (
              <p className="text-emerald-400">
                Bedankt! We nemen binnen een werkdag contact met je op.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400">
                Je bericht is niet verstuurd. Probeer het opnieuw of bel ons op
                06 123 45 678.
              </p>
            )}
            {status === 'idle' && (
              <p className="text-slate-500">Geen abonnement, je behoudt alles</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}