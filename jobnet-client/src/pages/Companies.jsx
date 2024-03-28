import {useState, useEffect} from "react";
import axios from "axios";
const Companies = () => {

    const [companies, setCompanies] = useState([]); // [state, setState

    const getCompanies = async () => {
        await axios.get('http://localhost:5087/api/Company')
            .then(res => {
                setCompanies(res.data);
            })
    }

    useEffect(() => {
        getCompanies();
    }, []);

    return(
        <>
            <h1>Companies Page</h1>
            {companies.map((company, key) => (
                <div key={key}>
                    {company.companyId}
                    {company.companyName}
                    {company.description}
                </div>
            ))}
        </>
    )
}

export default Companies;