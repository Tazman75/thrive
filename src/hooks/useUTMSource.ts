import { useEffect, useState } from 'react'

export interface UTMParams {
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
}

const STORAGE_KEY = 'tfc_utm'

export function useUTMSource(): UTMParams {
  const [params, setParams] = useState<UTMParams>(() => {
    // Check sessionStorage first (persists across navigation within session)
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    return { utm_source: null, utm_medium: null, utm_campaign: null }
  })

  useEffect(() => {
    const url = new URL(window.location.href)
    const utm_source = url.searchParams.get('utm_source')
    const utm_medium = url.searchParams.get('utm_medium')
    const utm_campaign = url.searchParams.get('utm_campaign')

    if (utm_source) {
      const utmData: UTMParams = { utm_source, utm_medium, utm_campaign }
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utmData))
      setParams(utmData)

      // Clean UTM params from URL without reload
      url.searchParams.delete('utm_source')
      url.searchParams.delete('utm_medium')
      url.searchParams.delete('utm_campaign')
      window.history.replaceState({}, '', url.pathname + url.search + url.hash)
    }
  }, [])

  return params
}

export function isPsychologyTodayVisitor(params: UTMParams): boolean {
  return params.utm_source === 'psychologytoday'
}
