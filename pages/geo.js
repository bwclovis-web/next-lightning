import Image from 'next/image'

export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function Index({
  name,
  languages,
  city,
  region,
  country,
  currencyCode,
  currencySymbol,
}) {
  name = decodeURIComponent(name)
  city = decodeURIComponent(city)

  console.log(name)
  return (
    <div>
        <h1>{city}</h1>
    </div>
  )
}

