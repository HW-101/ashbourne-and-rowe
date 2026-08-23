import { notFound } from 'next/navigation'
import { PropertyPage } from '@/components/property-site'
import { getProperty, properties } from '@/lib/properties'

export function generateStaticParams() { return properties.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const property = getProperty((await params).slug); return { title: property ? `${property.name} | Ashbourne & Rowe` : 'Property | Ashbourne & Rowe', description: property?.description } }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const property = getProperty((await params).slug); if (!property) notFound(); return <PropertyPage property={property} /> }
