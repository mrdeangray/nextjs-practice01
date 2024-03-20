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
    const [trucks, setTrucks] = useState(["Ram", "F150", "Silverado"]);
    const [languages, setLanguage] = useState(["English", "Spanish", "French"]);
    const [shoes, setShoes] = useState(["NB", "Sketchers"]);
    const [genres, setGenres] = useState(["Rock", "EDM"]);
    return (
        <ul>
                                        {
                genres.map((genre) => (
                    <span key={genre}>
                        <Link href={`/genre/${genre}`}>{genre.toUpperCase()} </Link> 
                    </span>
                  
                ))

            } 
                               {
                languages.map((language) => (
                    <span key={language}>
                        <Link href={`/truck/${language}`}>{language.toUpperCase()} </Link>
                    </span>
                ))

            } 
            <li>

                    {
                trucks.map((truck) => (
                    <span key={truck}>
                        <Link href={`/truck/${truck}`}>{truck.toUpperCase()} </Link>
                    </span>
                ))

            }  
             </li>  
            {
                cities.map((city) => (
                    <span key={city}>
                        <Link href={`/city/${city}`}>{city.toUpperCase()} </Link>
                    </span>
                ))

            }
            {
                daws.map((daw) => (
                    <span key={daw}>
                        <Link href={`/daw/${daw}`}>{daw.toUpperCase()} </Link>
                    </span>
                ))

            }
            {
                countries.map((country) => (
                    <span key={country}>
                        <Link href={`/country/${country}`}>{country.toUpperCase()} </Link>
                    </span>
                ))

            }
            {
                cars.map((car) => (
                    <span key={car}>
                        <Link href={`/car/${car}`}>{car.toUpperCase()} </Link>
                    </span>
                ))

            }
                        {
                companies.map((company) => (
                    <span key={company}>
                        <Link href={`/company/${company}`}>{company.toUpperCase()} </Link>
                    </span>
                ))

            }
                                  {
                states.map((state) => (
                    <span key={state}>
                        <Link href={`/state/${state}`}>{state.toUpperCase()} </Link>
                    </span>
                ))

            }  
        </ul>
    );
}
