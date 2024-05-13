
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCart from './JobCart';
import { useEffect, useState } from 'react';
import axios from 'axios'

const CategoryTab = () => {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getdata = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getdata();
    }, [])

    return (
        <div>
            <Tabs>
                <div className='flex justify-center'>
                    <TabList>
                        <Tab>All Jobs</Tab>
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Part-Time</Tab>
                        <Tab>Hybrid</Tab>
                    </TabList>
                </div>

                <div className='mt-5'>
                    <TabPanel>
                        <div className='job-cart-container'>
                            {
                                jobs.map(job => <JobCart key={job._id} job={job}></JobCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='job-cart-container'>
                            {
                                jobs.filter(j => j.category === 'On-Site Job').map(job => <JobCart key={job._id} job={job}></JobCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='job-cart-container'>
                            {
                                jobs.filter(j => j.category === 'Remote Job').map(job => <JobCart key={job._id} job={job}></JobCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='job-cart-container'>
                            {
                                jobs.filter(j => j.category === 'Part-Time').map(job => <JobCart key={job._id} job={job}></JobCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='job-cart-container'>
                            {
                                jobs.filter(j => j.category === 'Hybrid').map(job => <JobCart key={job._id} job={job}></JobCart>)
                            }
                        </div>
                    </TabPanel>
                </div>

            </Tabs>
        </div>
    );
};

export default CategoryTab;