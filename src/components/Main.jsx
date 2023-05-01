import React, { useState } from 'react'
import Header from './Header'

import './Main.css'

function Main() {
    const [current_title, set_current_title] = useState('Student Details')

  return (
    <main className='page-main'>
        <Header />

        <article className='main-article'>
            <section className='side-section'>
                <div className='links'>

                    <p 
                        className={current_title === 'Student Details' ? 'active' : ''} 
                        onClick={() => { set_current_title('Student Details') } }
                    >
                        Student Details
                    </p>


                    <p 
                        className={current_title === 'Parent Details' ? 'active' : ''} 
                        onClick={() => { set_current_title('Parent Details') } }
                    >
                        Parent Details
                    </p>


                    <p 
                        className={current_title === 'School Academics' ? 'active' : ''} 
                        onClick={() => { set_current_title('School Academics') } }
                    >
                        School Academics
                    </p>


                    <p 
                        className={current_title === 'Academic Details' ? 'active' : ''} 
                        onClick={() => { set_current_title('Academic Details') } }
                    >
                        Academic Details
                    </p>


                    <p 
                        className={current_title === 'Scholarship Details' ? 'active' : ''} 
                        onClick={() => { set_current_title('Scholarship Details') } }
                    >
                        Scholarship Details
                    </p>


                    <p 
                        className={current_title === 'Internship Details' ? 'active' : ''} 
                        onClick={() => { set_current_title('Internship Details') } }
                    >
                        Internship Details
                    </p>


                    <p 
                        className={current_title === 'Placement Details' ? 'active' : ''} 
                        onClick={() => { set_current_title('Placement Details') } }
                    >
                        Placement Details
                    </p>


                    <p 
                        className={current_title === 'Higher Studies' ? 'active' : ''} 
                        onClick={() => { set_current_title('Higher Studies') } }
                    >
                        Higher Studies
                    </p>


                    <p 
                        className={current_title === 'Other Activities' ? 'active' : ''} 
                        onClick={() => { set_current_title('Other Activities') } }
                    >
                        Other Activities
                    </p>
                </div>

            </section>

            <section className='main-section'>
                <h2>{current_title}</h2>

                <form>
                    {/* Name and Email */}
                    <div className='parent'>
                        <div className='child'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' name='name' />
                        </div>
                        <div className='child'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email' />
                        </div>
                    </div>

                    {/* Register number and Phone */}
                    <div className='parent'>
                        <div className='child'>
                            <label htmlFor='reg_no'>Register No</label>
                            <input type='text' id='reg_no' name='reg_no' />
                        </div>
                        <div className='child'>
                            <label htmlFor='phone'>Phone</label>
                            <input type='number' id='phone' name='phone' />
                        </div>
                    </div>

                    {/* Mode of degree and DOB */}
                    <div className='parent'>
                        <div className='child'>
                            <label>Mode of Degree</label>
                            <div className='radios'>
                                <input type='radio' id='ft' name='mode_of_degree' value="Full Time" />
                                <label htmlFor='ft'>Full Time</label>
                                <input type='radio' id='pt' name='mode_of_degree' value="Part Time" />
                                <label htmlFor='pt'>Part Time</label>
                            </div>
                        </div>
                        <div  className='child'>
                            <label htmlFor='dob'>Date of Birth</label>
                            <input type='date' id='dob' name='dob' />
                        </div>
                    </div>

                    {/* Mode of Admission and Regulation */}
                    <div className='parent'>
                        {/* Mode of Admission  */}
                        <div  className='child'>
                            <label>Mode of Admission</label>
                            <div className='choices'>
                                <div>
                                    <input type='radio' id='nri' name='mode_of_admission' value="NRI" />
                                    <label htmlFor='nri'>NRI</label>
                                </div>

                                <div>
                                    <input type='radio' id='tnea' name='mode_of_admission' value="TNEA Counselling" />
                                    <label htmlFor='tnea' >TNEA Counselling</label>
                                </div>

                                <div>
                                    <input type='radio' id='tancet' name='mode_of_admission' value="TANCET" />
                                    <label htmlFor='tancet' >TANCET</label>
                                </div>

                                <div>
                                    <input type='radio' id='iq' name='mode_of_admission' value="Industrial Quota" />
                                    <label htmlFor='iq'>Industrial Quota</label>
                                </div>

                                <div>
                                    <input type='radio' id='others' name='mode_of_admission' value="Others" />
                                    <label htmlFor='others'>Others</label>
                                </div>
                            </div>
                        </div>
                        {/* Regulation  */}
                        <div className='child'>
                            <label htmlFor='regulation'>Regulation</label>
                            <input type='text' id='regulation' name='regulation' />
                        </div>
                    </div>

                    {/* Photo */}
                    <div className='parent'>
                        <div className='child'>
                            <label htmlFor='photo'>Photo</label>
                            <input type='file' id='photo' name='photo' />
                        </div>
                        {/* Dummy */}
                        <div> </div>
                    </div>



                    {/* Buttons */}
                    <div className='btns'>
                        <button className='reset-btn' type='reset'>Reset</button>
                        <button className='submit-btn' type='submit'>Submit</button>
                    </div>

                </form>
            </section>

        </article>
    </main>
  )
}

export default Main