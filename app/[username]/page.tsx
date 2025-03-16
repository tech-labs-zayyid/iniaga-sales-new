export default async function PageHome({ params }: any) {
  const { username } = await params
  return (
    <div>PageHome {username}</div>
  )
}
