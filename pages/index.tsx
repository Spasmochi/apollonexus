import { useQuery, gql } from "@apollo/client";

const MyQuery = gql`
  query MyQuery {
    name
  }
`;
const Loading = () => <span>loading...</span>;
const Success = ({ data }) => {
  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default function Home() {
  const { data, loading, error } = useQuery(MyQuery);
  if (loading) return <Loading />;
  if (error) return <span>Not gone to plan</span>;
  if (data.hasOwnProperty("name")) return <Success data={data} />;
  return <span>No data...</span>;
}
