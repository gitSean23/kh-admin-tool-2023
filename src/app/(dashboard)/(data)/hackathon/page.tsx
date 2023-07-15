import { gql, useQuery } from '@apollo/client'

const GET_HACKATHON = gql`
  query ExampleQuery {
    getAllHackathons {
      name 
      id
      month
      day
      year
    }
  }
`


  
export default function Hackathon() {

  console.log("yo")

  const {loading, error, data} = useQuery(GET_HACKATHON)
  console.log({error, data, loading})

  return (
        <p className='10-px'>Hackathon Data</p>
  );
}
