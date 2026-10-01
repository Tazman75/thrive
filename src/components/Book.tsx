import type { ReactNode } from 'react'
import { HEADWAY_BOOKING_URL, trackBookOnlineClick } from '../lib/booking'

// Every booking/consult CTA links to Headway and fires the GA4 book_online_click event.
export default function Book({
  placement,
  className,
  children,
}: {
  placement: string
  className: string
  children: ReactNode
}) {
  return (
    <a
      href={HEADWAY_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBookOnlineClick(placement)}
      className={className}
    >
      {children}
    </a>
  )
}
