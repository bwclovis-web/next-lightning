import Image from 'next/image'
import styles from '../styles/GeoCard.module.scss'
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

  return (
    <div className={styles.geoCard}>
        <h1><a href={`http://en.wikipedia.org/wiki/${city}`}>{city} - <span>{region}</span></a></h1>
        <div className={styles.country}>
          <p>Country: {country}</p>
          <Image
            alt=""
            src={`https://flagcdn.com/96x72/${country.toLowerCase()}.png`}
            width={32}
            height={20}
          />
        </div>
        <p>Primary Language: {languages}</p>
        <h2>{name}</h2>
        <div className={styles.country}>
          <span>Currency Code: {currencyCode}</span>
          <span>Symbol: {currencySymbol}</span>
        </div>
    </div>
  )
}

