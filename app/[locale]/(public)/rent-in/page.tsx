import { redirect } from 'next/navigation'

// This page is redirected via next.config.js (301).
// This component serves as a fallback.
export default function RentInPage() {
  redirect('/services/home-finding')
}
