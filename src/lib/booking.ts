// Headway online scheduling — insurance eligibility is checked during booking.
export const HEADWAY_BOOKING_URL =
  'https://care.headway.co/providers/simone-shepardson?state=ILLINOIS&utm_source=tfcthrive'

export function trackBookOnlineClick(placement: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'book_online_click', {
      event_category: 'booking',
      event_label: placement,
    })
  }
}
