import { notFound } from 'next/navigation'

async function getData() {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return {
    message: 'Hello, Dashboard!',
  }
}
export default async function DashboardPage() {
  const { message } = await getData()
  notFound()
  return <h1>{message}</h1>
}
