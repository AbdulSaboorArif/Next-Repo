import countries from "../component/Data";
import Link from "next/link";
export default function Country (){
    
    
    return(
        <div>
            <h1 className="text-xl font-semibold font">This is the country page</h1>
           <ul>
            {countries.map((country) => (
                <li key={countries.indexOf(country)}>
                    <Link href={`/country/${country.name.toLowerCase()}`}>{country.name}</Link>
                </li>
            ))}
           </ul>
        </div>
    )
}