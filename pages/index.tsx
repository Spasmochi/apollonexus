import { useQuery, gql } from '@apollo/client'

const MyQuery = gql`
  query MyQuery {
    name
  }
`
const Loading = () => <span>loading...</span>
const Success = ({ data }) => <div>{JSON.stringify(data, null, 2)}</div>

export default function Home() {
  const { data, loading, error } = useQuery(MyQuery)
  return (
    <>
      {loading && <Loading />}
      {data && <Success data={data} />}
      {error && <span>It's fucked</span>}
    </>
  )
}
