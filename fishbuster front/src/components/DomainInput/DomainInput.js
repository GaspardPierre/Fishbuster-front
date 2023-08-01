import React from 'react'
import { useStore } from 'zustand';

export default function DomainInput() {
    const [domain, setDomain] = useStore(store);
  return (
    <input
    type="text"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    placeholder="Entrez l'URL du site web"
  />
  )
}
