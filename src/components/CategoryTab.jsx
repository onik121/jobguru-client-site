
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTab = () => {
    return (
        <div className='mt-10'>
            <Tabs>
                <div className='flex justify-center'>
                    <TabList>
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Part-Time</Tab>
                        <Tab>Hybrid</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;