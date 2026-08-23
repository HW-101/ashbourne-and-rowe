export type Property = { slug: string; name: string; location: string; price: string; beds: number; baths: number; sqft: string; image: string; description: string; features: string[] }

const images = {
  townhouse: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
  riverside: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
  hampstead: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85',
  cotswolds: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85',
  apartment: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
  estate: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
}

export const properties: Property[] = [
  { slug: 'belgravia-townhouse', name: 'The Belgravia Townhouse', location: 'Belgravia, London', price: '£6,950,000', beds: 5, baths: 4, sqft: '3,850', image: images.townhouse, description: 'A considered five-bedroom townhouse where quietly expressive interiors meet the proportions and craftsmanship of a classic Belgravia home.', features: ['Private garden', 'Five bedrooms', 'Two reception rooms', 'Period detailing'] },
  { slug: 'richmond-riverside-house', name: 'Richmond Riverside House', location: 'Richmond, London', price: '£3,750,000', beds: 4, baths: 3, sqft: '2,900', image: images.riverside, description: 'An elegant riverside residence with generous entertaining spaces, a landscaped garden and rare views towards the Thames.', features: ['River views', 'Landscaped garden', 'Off-street parking', 'Garden studio'] },
  { slug: 'hampstead-garden-residence', name: 'Hampstead Garden Residence', location: 'Hampstead, London', price: '£5,250,000', beds: 5, baths: 4, sqft: '3,400', image: images.hampstead, description: 'A light-filled family home set behind a discreet facade, with a seamless connection between its architecture and mature garden.', features: ['Mature garden', 'Garden room', 'Underfloor heating', 'Private parking'] },
  { slug: 'cotswold-house', name: 'The Cotswold House', location: 'Stow-on-the-Wold, Cotswolds', price: '£2,850,000', beds: 5, baths: 4, sqft: '4,200', image: images.cotswolds, description: 'A beautifully restored Cotswold house balancing honeyed stone, generous scale and the ease of contemporary country living.', features: ['Stone-built', 'Five bedrooms', 'Outdoor pool', 'Acre of grounds'] },
  { slug: 'notting-hill-apartment', name: 'Notting Hill Apartment', location: 'Notting Hill, London', price: '£2,395,000', beds: 3, baths: 2, sqft: '1,750', image: images.apartment, description: 'A beautifully composed lateral apartment with tall ceilings, natural light and an address moments from Portobello Road.', features: ['Lateral apartment', 'Tall ceilings', 'Resident porter', 'Private terrace'] },
  { slug: 'surrey-country-estate', name: 'Surrey Country Estate', location: 'Cobham, Surrey', price: '£4,750,000', beds: 6, baths: 5, sqft: '6,100', image: images.estate, description: 'A substantial country estate with formal gardens, exceptional entertaining rooms and a sense of privacy rarely found so close to London.', features: ['Six bedrooms', 'Formal gardens', 'Tennis court', 'Separate cottage'] },
]

export const getProperty = (slug: string) => properties.find((property) => property.slug === slug)
export { images }
