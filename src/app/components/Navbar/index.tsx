"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

    const [cities, setCities] = useState(["paris", "london"])
    const [daws, setDaw] = useState(["FLS", "REAPER", "Bitwig"])
    const [countries, setCountries] = useState(["JA", "USA", "UK"])

    return (
        <ul>
            {
                cities.map((city) => (
                    <li key={city}>
                        <Link href={`/city/${city}`}>{city.toUpperCase()}</Link>
                    </li>
                ))

            }
            {
                daws.map((daw) => (
                    <li key={daw}>
                        <Link href={`/daw/${daw}`}>{daw.toUpperCase()}</Link>
                    </li>
                ))

            }
            {
                countries.map((country) => (
                    <li key={country}>
                        <Link href={`/country/${country}`}>{country.toUpperCase()}</Link>
                    </li>
                ))

            }
        </ul>
    );
}
