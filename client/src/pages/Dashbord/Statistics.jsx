import CountUp from 'react-countup';
import React from 'react';

const Statistics = () => {
    return ( 
        
        <div className="row gap-4 px-5  mt-5 me-lg-3  ">
                 <section className="col border rounded-2 shadow-sm py-2 ">
                    <div className="d-flex flex-row gap-3 ">
                        <div>
                            <img src="/assets/images/icons8-calendar-94.png" alt="calendare-icon" className="mt-2"/>
                        </div>

                        <div className=" text-start mt-2">
                            <h4 className="font-regulare fs-5">Nombre des rendez-vous</h4>
                            <h1 className="font-regulare fs-2 text-primary  fw-bold"><CountUp start={0} end={100} duration={5} /></h1>
                        </div>
                    </div>
                  
                </section>

                <section className="col border rounded-2 shadow-sm ">
                        <div className="d-flex flex-row gap-3 ">
                                <div className="mt-2">
                                    <img src="/assets/images/icons8-received-96.png" alt="confirm-icon" width={"90px"} className="mt-2"/>
                                </div>

                                <div className="  mt-3">
                                    <h4 className="font-regulare fs-5">Nombre de Confirmation</h4>
                                    <h1 className="font-regulare fs-2 text-success  fw-bold"><CountUp start={0} end={100} duration={5} /></h1>
                                </div>
                        </div>
                </section>

                <section className="col border rounded-2 shadow-sm ">
                        <div className="d-flex flex-row gap-3 ">
                                <div className="mt-2">
                                    <img src="/assets/images/icons8-schedule-96.png" alt="calendare-icon" width={"90px"} className="mt-2"/>
                                </div>

                                <div className=" text-start mt-3">
                                    <h4 className="font-regulare fs-5">Nombre de Reportation</h4>
                                    <h1 className="font-regulare fs-2 text-warning  fw-bold"><CountUp start={0} end={100} duration={5} /></h1>
                                </div>
                        </div>
                </section>
        </div>
     );
}
 
export default Statistics;