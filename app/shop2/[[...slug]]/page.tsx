// app/shop/[...slug]/page.js
export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      My Shop:
      {JSON.stringify(params)}
    </div>
  )
}
