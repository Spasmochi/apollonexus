import { useQuery, gql } from '@apollo/client'
import { getQueryStatus } from '../utils/getQueryStatus'

const MyQuery = gql`
  query MyQuery {
    name
  }
`
const Error = () => <span>There was an error</span>
const Loading = () => <span>loading...</span>
const NoData = () => <span>no data...</span>
const Success = ({ data }) => <div>{JSON.stringify(data, null, 2)}</div>

const COMPONENTS = res => ({
  error: <Error />,
  loading: <Loading />,
  empty: <NoData />,
  success: <Success data={res.data} />,
})

export default function Home() {
  const res = useQuery(MyQuery)
  return COMPONENTS(res)[getQueryStatus(res)]
}
