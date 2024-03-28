import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
const CompanyPage = () => {
    const {companyId} = useParams();
    const [company, setCompany] = useState();

    const getCompany = () => {
        axios.get(`http://localhost:5087/${companyId}/talentmanagers`).then(res => {
            setCompany(res.data[0]);
            console.log(res.data);
        });
    }

    useEffect(() => {
        getCompany(companyId);
    }, [])


    return(
        <>
            <h1>Company Page</h1>
            <div className="flex flex-col bg-sky-300 w-[10rem] justify-center items-center align-center p-4">
                <div>
                    {company.firstname}
                </div>
                <div>
                    {company.lastname}
                </div>
                <div>
                    {company.title}
                </div>
            </div>
        </>
    )
}


export default CompanyPage;