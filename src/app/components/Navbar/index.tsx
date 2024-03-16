"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

    const [cities, setCities] = useState(["paris", "london"]);
    const [daws, setDaw] = useState(["FLS", "REAPER", "Bitwig"]);
    const [countries, setCountries] = useState(["JA", "USA", "UK"]);
    const [cars, setCars] = useState(["Nissan", "Honda", "Toyota"]);
    const [companies, setCompanies] = useState(["Nike", "Addidas", "Reebok"]);
    const [states, setStates] = useState(["Florida", "Georgia", "California"]);

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
            {
                cars.map((car) => (
                    <li key={car}>
                        <Link href={`/car/${car}`}>{car.toUpperCase()}</Link>
                    </li>
                ))

            }
                        {
                companies.map((company) => (
                    <li key={company}>
                        <Link href={`/company/${company}`}>{company.toUpperCase()}</Link>
                    </li>
                ))

            }
                                  {
                states.map((state) => (
                    <li key={state}>
                        <Link href={`/state/${state}`}>{state.toUpperCase()}</Link>
                    </li>
                ))

            }  
        </ul>
    );
}
