import React from 'react';
import "../../Style/form.css";
const Form = () => {
    return (
        <div className='Form'>
            <form className='Form-form'>
                <div className='Form-form_item'>
                    <div className='Form-form_item_label'>
                        First Name<span>*</span> 
                    </div>
                    <input name="first_name" type="text"/>
                </div> 
                <div className='Form-form_item'>
                    <div className='Form-form_item_label'>
                        Last Name<span>*</span>
                    </div>
                    <input name='last_name' type="text"/>
                </div>
                <div className='Form-form_item'>
                    <div className='Form-form_item_label'>
                        Company name<span>*</span>
                    </div>
                    <input name='company_name' type="text"/>
                </div>
                <div className='Form-form_item'>
                    <div className='Form-form_item_label'>
                        Work Email<span>*</span>
                    </div>
                    <input name="email" type="email"/>
                </div>
                <div className='Form-form_item'>
                    <div className='Form-form_item_label'>
                        Country/Region
                    </div>
                    <input max="99" min="1" name="age" step="1" type="number" value="18" />
                </div>
                <div className='Form-form_item'>
                    <div className='Form-form_item_label'>
                        State/Region
                    </div>
                    <input max="99" min="1" name="age" step="1" type="number" value="18" />
                </div>
                <div className='Form-form_item'>
                    <div className='Form-form_item_label'>
                        Phone number<span>*</span>    
                    </div>
                    <input name='phone' type="number"/>
                </div>
                <div className='Form-form_item'>
                    <div className='Form-form_item_label'>
                        Product or Service you‘re interested in<span>*</span>    
                    </div>
                    <input name="name" type="text" /> 
                </div>
                <div className='Form-form_item'>
                    <div className='Form-form_item_label'>
                        What would you like to discuss with the team?<span>*</span>     
                    </div>
                    <textarea name="overthinking" rows="4"></textarea>
                </div>
                <div className='Form-form_rules'>
                    <input type='checkbox'/>
                    <p>I‘d like to receive product information, updates and promotions from Kensho.</p>
                </div>
                <div className='Form-form_item'>
                    <button>CONTACT US</button>
                </div>
            </form>
        </div>
    );
};

export default Form;