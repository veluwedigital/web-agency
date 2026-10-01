import React from 'react'
import { Metadata } from 'next';
import ContactBlock from '../../components/contact-maps';

export const metadata: Metadata = {
  title: "Contact pagina",
  description: "Kom in contact met ons",
};

export default function Page() {
  return (
    <div>
        <ContactBlock/>
    </div>
  )
}
