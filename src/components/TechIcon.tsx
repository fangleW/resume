type Props = {
  slug: string
  className?: string
}

function buildUrl(slug: string) {
  return `https://cdn.simpleicons.org/${slug}`
}

export function TechIcon({ slug, className }: Props) {
  return <img src={buildUrl(slug)} alt="" className={className} loading="lazy" />
}
